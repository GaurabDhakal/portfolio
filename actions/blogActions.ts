"use server"
import { TBlog } from "@/types"
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
export interface BlogPost {
    id: string
    title: string
    slug: string
    content: string
    lastEdited: string
    tags?: string[]
}

const notion = new Client({
    auth: process.env?.NOTION_API_KEY
})
const n2m = new NotionToMarkdown({ notionClient: notion })
async function postFormatter(metaData): Promise<TBlog | { error: string }> {
    try {
        const mdBlocks = await n2m.pageToMarkdown(metaData?.id);
        const mdString = n2m.toMarkdownString(mdBlocks);
        return {
            id: metaData?.id,
            title: metaData?.properties.Name.title[0].plain_text,
            content: mdString,
            createdOn: metaData?.created_time,
            lastEdited: metaData?.last_edited_time,
            tags: metaData.properties.Tags?.multi_select?.map((tag: any) => {
                return tag.name
            }) || []
        }

    } catch {
        return {
            error: "Something went wrong!"
        }
    }

}


export async function fetchNotionPosts(limit?: number): Promise<TBlog[] | { error: string }> {
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
        const posts: TBlog = await Promise.all(
            response.results.map(async (page) => {
                const finalOutput = await postFormatter(page)
                return finalOutput
            })
        );
        return posts
    } catch (error) {
        console.log(error)
        return {
            error: error as string
        }
    }
    // console.log(posts)
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