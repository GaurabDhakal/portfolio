"use client";
import { usePathname } from "next/navigation";
import { titles } from "@/constants/header_data";
import { useEffect } from "react";
// Helper function with proper typing and fallback
const getTitle = <T extends Record<string, string>>(
    path: string,
    titles: T,
    defaultTitle = "Default Title"
): string => {
    // Exact match first (O(1) lookup)
    if (path in titles) return titles[path as keyof T];

    // Optional: Handle dynamic/nested routes (only if needed)
    const dynamicMatch = Object.entries(titles).find(([key]) => {
        // Example: Match "/blog/*" paths if using wildcards
        return key.endsWith("/*") && path.startsWith(key.slice(0, -2));
    });

    return dynamicMatch?.[1] || defaultTitle;
};
export const useDynamicTitle = () => {
    const path = usePathname();
    const title = getTitle(path, titles, `Page Not Found`);
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);
};
