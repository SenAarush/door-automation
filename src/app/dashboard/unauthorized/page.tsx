import { UnauthorizedCard } from "@/components/Dashboard/UnauthorizedCard";

import { unauthorized as data } from "@/data/mock";

export default async function UnauthorizedPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <>
            <div className="grid grid-cols-12 gap-4 p-4">
                {data.map((item, index) => (
                    <UnauthorizedCard
                        key={index}
                        src={item.src}
                        date={item.date}
                        time={item.time}
                    />
                ))}
            </div>
        </>
    );
}