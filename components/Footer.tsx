import { FooterIcons } from "@/constants/FooterIcons";
export const Footer = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-between w-[20rem] px-1 sm:w-[60rem] md:mb-2 h-20 mb-20 ">
                <div>
                    <p className="text-sm">
                        <span className="text-white/60">© 2025/ </span>
                        <span className="text-white">Gaurab Dhakal</span>{" "}
                    </p>
                </div>

                <div className="flex space-x-3 text-white">
                    {FooterIcons.map(({ svg, link }, index) => (
                        <a
                            key={index + 22}
                            href={link}
                            className="flex"
                            target="_blank"
                        >
                            {svg}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
