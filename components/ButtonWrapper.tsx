import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ButtonWrapper = ({
    href,
    text,
}: {
    href: string;
    text: string;
}) => {
    return (
        <Link href={href} aria-label={text}>
            <Button
                className="cursor-pointer p-3 rounded-xl border font-heading text-md w-full"
                variant="outline"
            >
                <span>{text}</span>
                <ArrowRight />
            </Button>
        </Link>
    );
};
