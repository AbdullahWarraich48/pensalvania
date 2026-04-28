import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationGuideSection from "@/components/DonationGuideSection";
import SuperstarDonorSection from "@/components/SuperstarDonorSection";
import DidYouKnowSection from "@/components/DidYouKnowSection";
import DonateFinanciallyHeroSection from "@/components/DonateFinanciallyHeroSection";
import DonationFormSection from "@/components/DonationFormSection";

const DonateFinancially = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-[88px]">
        <DonateFinanciallyHeroSection />

        <DonationGuideSection />
        <SuperstarDonorSection />
        <DidYouKnowSection />
        <DonationFormSection />

      </main>

      <Footer />
    </div>
  );
};

export default DonateFinancially;

