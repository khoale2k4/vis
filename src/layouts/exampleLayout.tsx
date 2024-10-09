import Footer from "@/components/footer";
import Navbar from "@/components/navbar"

const exampleLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-dvh w-dvw flex flex-col justify-center place-items-center">
            <Navbar />
            <div className="h-full w-full pt-20">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default exampleLayout;