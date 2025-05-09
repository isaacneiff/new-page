
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import CoursesSection from '@/components/sections/courses-section'; // Import new section
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header academyNameColor="#c5302c" />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CoursesSection /> {/* Add new section here */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
