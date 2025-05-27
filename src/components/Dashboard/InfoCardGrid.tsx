import { InfoCard } from "./InfoCard";
import { ActivityChart } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";

interface Props {
    data: InfoCardDataItem[]
}

type InfoCardDataItem = {
    title: string;
    value: number | string;
    desc: string;
}

export const InfoCardGrid: React.FC<Props> = (props) => {
    const { data } = props;
    return (
        <div className="px-4 grid gap-3 grid-cols-12 mt-4 pb-4">
            {(data.map((item, idx) => {
                return (
                    <InfoCard
                        key={idx}
                        idx={idx}
                        data={item}
                    />
                )
            }))}
            <div className="col-span-12 md:col-span-8">
                <ActivityChart />
            </div>
            <div className="col-span-12 md:col-span-4">
                <UsageRadar />
            </div>
        </div>
    );
}