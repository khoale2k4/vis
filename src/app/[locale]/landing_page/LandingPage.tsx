import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full min-h-dvh">
      <Navbar />
      <Footer />
    </div>
  );
}
