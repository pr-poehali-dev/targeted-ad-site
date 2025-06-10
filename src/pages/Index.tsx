import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CasesSection />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
};

export default Index;
