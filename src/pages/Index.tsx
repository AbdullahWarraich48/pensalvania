import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionVisionSection from "@/components/MissionVisionSection";
import WaysToHelp from "@/components/WaysToHelp";
import ImpactStats from "@/components/ImpactStats";
import Stories from "@/components/Stories";
import AboutSection from "@/components/AboutSection";
import WhyTrustUs from "@/components/WhyTrustUs";
import FurnitureCategories from "@/components/FurnitureCategories";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BusinessPartnersSection from "@/components/BusinessPartnersSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionVisionSection />
      <WaysToHelp />
      <ImpactStats />
      <Stories />
      <AboutSection />
      <WhyTrustUs />
      <FurnitureCategories />
      <Gallery />
      <Testimonials />
      <BusinessPartnersSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
