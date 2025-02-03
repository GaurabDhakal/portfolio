import React from "react";

export const Tag = ({ tag_title }: { tag_title: string }) => {
    return (
        <div className="text-sm font-semibold flex">
            <p className="border-1 border-white/50 bg-black text-white/80 rounded-3xl px-2 py-1">
                {tag_title}
            </p>
        </div>
    );
};
