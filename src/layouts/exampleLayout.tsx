import Footer from "@/views/footer";
import Navbar from "@/views/navbar";

const exampleLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-dvh w-dvw flex flex-col justify-center place-items-center bg-lightPrimary">
            <Navbar />
            <div className="h-full w-full pt-20">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default exampleLayout;