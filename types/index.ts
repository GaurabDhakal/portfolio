export type TBlog = {
    id: string;
    title: string;
    content: string;
    createdOn: string;
    lastEdited: string;
    tags?: string[];
};

export type TBlogsResponse = {
    slug: string;
    description: string;
    date: string;
    title: string;
    readingTime: string;
    tags: string[];
}[];
