"use server"
import { TBlog } from "@/types"
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import { GetPageResponse, PartialDatabaseObjectResponse, PageObjectResponse, DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints"


const postsCache: Record<string, TBlog | { error: string }> = {}

const notion = new Client({
    auth: process.env?.NOTION_API_KEY
})

type ExtendedProperties = {
    Name: {
        title: Array<{
            plain_text: string;
        }>
    },
    Tags?: {
        multi_select: Array<{
            name: string;
        }>
    }
}
const n2m = new NotionToMarkdown({ notionClient: notion })
async function postFormatter(metaData: GetPageResponse | PageObjectResponse | DatabaseObjectResponse | PartialDatabaseObjectResponse): Promise<TBlog | { error: string }> {
    try {
        const mdBlocks = await n2m.pageToMarkdown(metaData?.id);
        const mdString = n2m.toMarkdownString(mdBlocks);
        return {
            id: metaData?.id,
            title: ((metaData as PageObjectResponse).properties.Name as ExtendedProperties['Name']).title[0]?.plain_text || '',
            content: mdString,
            createdOn: (metaData as PageObjectResponse)?.created_time,
            lastEdited: (metaData as PageObjectResponse)?.last_edited_time,
            tags: ((metaData as PageObjectResponse).properties.Tags as ExtendedProperties['Tags'])?.multi_select?.map((tag: { name: string }) => {
                return tag.name
            }) ?? []
        }

    } catch {
        return {
            error: "Something went wrong!"
        }
    }

}

export async function fetchNotionPosts(limit?: number) {
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
        return {
            error: "Notion database ID is not configured!"
        }
    }
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            sorts: [
                {
                    property: "Date",
                    direction: "descending",
                },
            ],
            page_size: limit
        });

        const posts = await Promise.all(
            response.results.map(async (page) => {
                const finalOutput = await postFormatter(page)
                if ("id" in finalOutput) {
                    postsCache[finalOutput.id] = finalOutput
                }

                return finalOutput
            })
        );
        return { allPosts: posts, cache: postsCache }
    } catch (error) {
        return {
            error: error as string
        }
    }
}
export async function fetchNotionPostById(id: string) {
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
        return {
            error: "Notion database ID is not configured!"
        }
    }
    if (!id) {
        return {
            error: "Post id is required!"
        }
    }
    console.log("FetchNotionPostByID was called")
    //additional cache 
    if (id in postsCache) {
        console.log(
            "Cache HIT!"
        )
        return postsCache[id]
    }
    try {
        const metaData = await notion.pages.retrieve({
            page_id: id
        })
        const finalOutput = await postFormatter(metaData)
        return finalOutput
    } catch (error) {
        return {
            error: error,
        }
    }
}