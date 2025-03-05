"use client";
import { create } from "zustand";
import { TBlog } from "@/types";

type State = {
    postsCache: Record<string, TBlog | { error: string }>
}
type Action = {
    setPostsCache:(postsCache:State["postsCache"])=>void
}
export const usePostsCache = create<State & Action>((set) => ({
    postsCache: {},
    setPostsCache: (postsCache: Record<string, TBlog | { error: string }>) =>
        set(() => ({ postsCache: postsCache })),
}));
