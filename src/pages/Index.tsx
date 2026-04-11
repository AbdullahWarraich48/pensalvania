import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="how">
        <HowItWorks />
      </div>
      <div id="categories">
        <Categories />
      </div>
      <div id="impact">
        <Impact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
