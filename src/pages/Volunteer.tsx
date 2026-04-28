import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VolunteerHeroSection from "@/components/VolunteerHeroSection";
import VolunteerMediaCarouselSection from "@/components/VolunteerMediaCarouselSection";
import VolunteerOpportunitiesSection from "@/components/VolunteerOpportunitiesSection";
import VolunteerInterestFormSection from "@/components/VolunteerInterestFormSection";

const Volunteer = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-[88px]">
        <VolunteerHeroSection />
        <VolunteerMediaCarouselSection />
        <VolunteerOpportunitiesSection />
        <VolunteerInterestFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default Volunteer;

