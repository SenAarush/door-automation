import Link from "next/link";

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    selected?: boolean;
    Icon: React.FC<{ className?: string }>;
    title: string;
    path: string;
}

export const RouteElement: React.FC<Props> = ({ selected, Icon, title, path }) => {
    return (
        <Link href={path} prefetch={true}>
            <button
                className={`flex items-center gap-2 text-sm py-1.5 h-full w-full rounded px-2 font-medium transition-[box-shadow, _background-color, _color] hover:cursor-pointer ${selected ? "bg-white shadow-sm" : "hover:bg-stone-200 hover:shadow-none text-stone-500"}`}
            >
                <Icon className={`w-4 h-4 ${selected ? `text-purple-500` : `text-stone-500`}`} />
                <span className={`${selected ? `text-stone-950` : `text-stone-500`}`}>{title}</span>
            </button>
        </Link>
    )
}