import Footer from "@/views/footer";
import Navbar from "@/views/navbar";

const exampleLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-dvh w-dvw flex flex-col justify-center place-items-center bg-lightPrimary dark:bg-darkContainerPrimary">
            <Navbar />
            <div className="w-full overflow-y-auto h-full pt-20 pb-6 no-scrollbar">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default exampleLayout;