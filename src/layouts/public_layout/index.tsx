import Navbar from "@/layouts/public_layout/navbar";
import Footer from "@/layouts/public_layout/footer";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col w-full overflow-x-hidden max-h-screen no-scrollbar">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}