import { InfoCardGrid } from "./InfoCardGrid";

const data = [
    {
        "title": "Users Currently Inside",
        "value": 6,
        "desc": "Estimated number of users currently within the tracked area"
    },
    {
        "title": "Access Events",
        "value": 30,
        "desc": "Total successful door openings/unlocks recorded today"
    },
    {
        "title": "Failed Access Attempts",
        "value": 5,
        "desc": "Unauthorized or failed attempts to open/unlock doors today"
    }
]

export const Dashboard: React.FC = () => {
    return (
        <>
            <InfoCardGrid data={data} />
        </>
    );
};

