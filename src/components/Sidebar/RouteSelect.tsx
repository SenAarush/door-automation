'use client';

import { usePathname } from "next/navigation";

import SearchIcon from "../icons/SearchIcon";
import { TeamIcon } from "../icons/TeamIcon";
import { UserNotAllowedIcon } from "../icons/UserNotAllowedIcon";
import { UserProfileIcon } from "../icons/UserProfileIcon";
import { RouteElement } from "./RouteElement";

const routes = [
    {
        title: "Dashboard",
        icon: SearchIcon,
        selected: true,
        path: "/dashboard"
    },
    {
        title: "Profile",
        icon: UserProfileIcon,
        path: "/dashboard/profile"
        // selected: false,
    },
    {
        title: "Unauthorized",
        icon: UserNotAllowedIcon,
        path: "/dashboard/unauthorized"
        // selected: false,
    },
    {
        title: "Members",
        icon: TeamIcon,
        path: "/dashboard/members"
        // selected: false,
    },
]

export const RouteSelect: React.FC = () => {
    const pathName = usePathname() || '';
    return (
        <div className="mt-4 gap-1 flex flex-col">
            {routes.map((route, idx) => {
                const isSelected = pathName === route.path;
                return (
                    <RouteElement
                        suppressHydrationWarning
                        key={idx}
                        Icon={route.icon}
                        title={route.title}
                        path={route.path}
                        selected={isSelected}
                    />
                )
            })}
        </div>
    );
};