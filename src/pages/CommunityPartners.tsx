import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CommunityPartnersHeroSection from "@/components/CommunityPartnersHeroSection";
import ServiceAreasMosaicSection from "@/components/ServiceAreasMosaicSection";
import CommunityPartnersListSection from "@/components/CommunityPartnersListSection";

const CommunityPartners = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-[88px]">
        <CommunityPartnersHeroSection />
        <ServiceAreasMosaicSection />
        <CommunityPartnersListSection />
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPartners;

