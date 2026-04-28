import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HistoryFoundersHeroSection from "@/components/HistoryFoundersHeroSection";
import HistoryOfPFMSection from "@/components/HistoryOfPFMSection";

const HistoryFounders = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-[88px]">
        <HistoryFoundersHeroSection />
        <HistoryOfPFMSection />
      </main>

      <Footer />
    </div>
  );
};

export default HistoryFounders;

