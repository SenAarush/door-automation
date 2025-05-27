import { NotificationIcon } from "../icons/NotificationIcon";

export const TopBar: React.FC<Props> = (props) => {
    return (
        <div className="border-b border-stone-200 px-4 pt-2 pb-4">
            <div className="flex items-center justify-between p-0.5">
                <div>
                    <span className="text-sm font-semibold block">Good Morning, Aarush!</span>
                    <span className="text-xs block text-stone-500">Friday, Apr 26th 2025</span>
                </div>

                <button className="text-sm font-medium bg-stone-200 text-stone-700 flex items-center gap-1 rounded px-2 py-1 hover:bg-stone-400 transition-colors">
                    <NotificationIcon className="w-5 h-5"/>
                </button>
            </div>
        </div>
    );
};