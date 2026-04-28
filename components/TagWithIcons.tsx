import React from "react";

export const TagWithIcons = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-sm font-semibold flex">
      <span className="border border-gray-400/40 cursor-pointer hover:bg-[#3e3e3e] transition-all duration-100 ease-in-out bg-[#0e110f] text-white/80 rounded-xl p-2">
        {children}
      </span>
    </div>
  );
};
