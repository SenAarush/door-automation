import CommandIcon from "../icons/CommandIcon";
import SearchIcon from "../icons/SearchIcon";

export const Search: React.FC<Props> = () => {
    return (
        <div className="bg-stone-200 py-1.5 flex items-center text-sm rounded px-2">
            <SearchIcon className="w-5 h-5 mr-2" />
            <input
                className="focus:outline-none w-full placeholder:text-stone-400 bg-transparent"
                type="text"
                placeholder="Search"
            />
            <div className="p-1 rounded bg-white shadow-sm flex gap-1 items-center">
                <CommandIcon className="w-4 h-4" />
                <span className="text-xs">K</span>
            </div>
        </div>
    );
};