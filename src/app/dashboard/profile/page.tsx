import { Button } from "@/components/Dashboard/Button";

const roles = [
    {
        title: "Assistant Coordinator",
    },
    {
        title: "Teacher",
    }
]
export default function ProfilePage() {
    return (
        <div className="p-4 bg-purple-500 m-4 rounded flex flex-col sm:gap-4 sm:flex-row">
            <div className="h-52 w-52 bg-white rounded shadow-md flex items-center justify-center">
                {/* Image container */}
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex mt-4 gap-2 flex-wrap">
                    {roles.map((role, index) => (
                        <Tag key={index} title={role.title} />
                    ))}
                </div>

                <div className="flex-1 text-2xl font-bold">John Doe</div>
                <div className="flex-1">
                    Year - 2024
                </div>
                <div className="text-center px-4 py-2 bg-white text-purple-700 rounded-full font-medium text-sm shadow max-w-fit">
                    CSE
                </div>

                <Button variant="secondary" title="Edit Profile" />

            </div>

        </div >
    );
}

export const Tag = ({ title }: { title: string }) => {
    return (
        <div className="text-center px-4 py-1.5 bg-white text-purple-700 rounded font-medium text-sm shadow max-w-fit">
            {title}
        </div>
    )
}

export const TagContainer = ({ children }: { children: React.ReactNode }) => {  
    return (
        <div className="flex mt-4 gap-2 flex-wrap">
            {children}
        </div>
    )
}