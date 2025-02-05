import { MdStringObject } from "notion-to-md/build/types";

export type TBlog = {
    id: string,
    title: string,
    content: MdStringObject,
    createdOn: string,
    lastEdited: string,
    tags?: string[],
}