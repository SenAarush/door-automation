// import UpAndDownIcon from "../icons/UpAndDownIcon";

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const AccountToggle: React.FC<Props> = () => {
    return (
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
            <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center overflow-ellipsis" >
                <img
                    src="https://api.dicebear.com/9.x/personas/svg"
                    alt="avatar"
                    className="w-12 h-12 rounded bg-violet-500 shrink-0 shadow"
                />
                <div className="text-start flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">
                        John Doe
                    </div>
                    <div className="text-xs text-stone-500 truncate">
                        senaarush@outlook.com
                    </div>
                    <div className="text-xs font-medium text-stone-700 truncate">
                        Admin
                    </div>
                </div>
                {/* <UpAndDownIcon  className="size-6"/> */}
            </button>
        </div>
    );
};