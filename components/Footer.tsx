import { FooterIcons } from "@/constants/FooterIcons";
import { useMemo } from "react";
export const Footer = () => {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-between px-3 md:px-35 w-full h-20 m-2 mb-1">
        <div>
          <p className="text-sm">
            <span className="text-white/60">© {year}/ </span>
            <span className="text-white">Gaurab Dhakal</span>{" "}
          </p>
        </div>

        <div className="flex gap-2 text-white">
          {FooterIcons.map(({ svg, link, name }, index) => (
            <a key={index + 22} href={link} className="flex" aria-label={name} target="_blank">
              {svg}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
