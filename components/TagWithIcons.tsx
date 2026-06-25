import React from "react";

export const TagWithIcons = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-sm font-semibold flex">
      <span className="border border-gray-400/40 cursor-pointer hover:bg-[#172224] transition-all duration-300 ease-in-out bg-[#17222458] text-white/80 rounded-xl px-2 py-1">
        {children}
      </span>
    </div>
  );
};
