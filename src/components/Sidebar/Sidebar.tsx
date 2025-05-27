import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";
import { RouteSelect } from "./RouteSelect";

interface Props { }

export const Sidebar: React.FC<Props> = () => {
    return (
            <div className="hidden lg:block overflow-y-hidden sticky top-4 bg-stone-100 h-[calc(100vh-32px-48px)]">
                <AccountToggle />
                <Search />
                <RouteSelect />
            </div>
    );
};