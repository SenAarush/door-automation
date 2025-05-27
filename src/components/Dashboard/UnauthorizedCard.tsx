import Image from "next/image";

import { Button } from "./Button";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    date?: string;
    time?: string;
}

export const UnauthorizedCard: React.FC<Props> = (props) => {
    const { src, date, time } = props;
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-4 border-[1px] border-stone-200 rounded shadow">
            <Image
                src={src || `https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D`}
                height={125}
                width={125}
                alt="Unauthorized Access"
                className="w-full object-cover rounded-t shadow max-h-52"
            />
            <div className="flex justify-between items-center text-sm font-medium px-5 pt-4">
                <div>{date || "Tuesday, 15th of October"}</div>
                <div>{time || "15:55"}</div>
            </div>

            <div className="flex p-4 justify-between items-center gap-2">
                <Button title={"Discard"} variant={"primary"} />
                <Button title={"Allow"} variant={"secondary"} />
            </div>
        </div>
    );
}