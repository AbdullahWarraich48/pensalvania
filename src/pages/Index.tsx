import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaysToHelp from "@/components/WaysToHelp";
import ImpactStats from "@/components/ImpactStats";
import Stories from "@/components/Stories";
import AboutSection from "@/components/AboutSection";
import WhyTrustUs from "@/components/WhyTrustUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WaysToHelp />
      <ImpactStats />
      <Stories />
      <AboutSection />
      <WhyTrustUs />
      <Gallery />
      <Testimonials />
      <Partners />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
