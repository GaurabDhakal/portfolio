import React from "react";

export const TagWithIcons = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="text-sm font-semibold flex">
            <span className="border-1 border-white/50 cursor-pointer hover:bg-[#3e3e3e] transition-all duration-100 ease-in-out bg-black text-white/80 rounded-xl px-2 py-1">
                {children}
            </span>
        </div>
    );
};
