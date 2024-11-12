import Navbar from "@/layouts/publicLayout/navbar";
import Footer from "@/layouts/publicLayout/footer";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col w-full gap-4 overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}