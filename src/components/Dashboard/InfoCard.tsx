// import { StonksUpIcon } from "@/components/icons/StonksUpIcon";
// import { StonksDownIcon } from "@/components/icons/StonksDownIcon";

interface Props extends React.PropsWithChildren {
    idx: number;
    data: {
        title: string;
        value: number | string;
        desc: string;
    };
}

export const InfoCard: React.FC<Props> = (props) => {
    return (
        <div key={props.idx} className="h-full col-span-12 sm:col-span-6 md:col-span-4 border-[1px] border-stone-300 rounded">
            <div className="rounded-lg p-4">
                <div className="flex item-center justify-between">
                    <p className="text-sm text-stone-500">
                        {props.data.title}
                    </p>
                    
                    {/* Tag */}
                    {/* <div>
                        <div className={`text-xs font-semibold rounded  flex items-center p-[3px] ${up ? `bg-green-200 text-green-800` : `bg-red-200 text-red-800`}`}>
                            {up ?
                                <>
                                    <StonksUpIcon className="w-4 h-4 text-green-500" />

                                </> :
                                <>
                                    <StonksDownIcon className="w-4 h-4 text-red-500" />
                                </>}
                            <span className="ml-1">2.75%</span>
                        </div>
                    </div> */}


                </div>
                <h2 className="text-lg font-semibold">
                    {props.data.value}
                </h2>

                <p className="mt-4 text-xs font-medium text-stone-500">
                    {props.data.desc}
                </p>
            </div>
        </div>

    )
};