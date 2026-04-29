export const Tag = ({ tag_title }: { tag_title: string }) => {
  return (
    <div className="text-sm font-semibold flex">
      <p className="border border-gray-400/40 bg-[#17131c5f] text-white/80 rounded-2xl px-2 antialiased mr-1 p-1">
        {tag_title}
      </p>
    </div>
  );
};
