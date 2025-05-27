import { Sidebar } from "@/components/Sidebar/Sidebar";
import { TopBar } from "@/components/Dashboard/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-stone-100 grid gap-4 lg:grid-cols-[220px_1fr] p-4 relative min-h-screen">
            <Sidebar />
            <section className="bg-white shadow rounded relative flex flex-col">
                <div className="sticky top-0 z-10 shadow bg-white">
                    <TopBar />
                </div>
                <div className="flex-grow">
                    {children}
                </div>
            </section>
        </div >
    );
}