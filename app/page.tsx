import { Navbar } from "@/components/navigation/Navbar"
import { HeroSection } from "@/sections/Hero/HeroSection"
import { AboutSection } from "@/sections/About/AboutSection"
import { ServicesSection } from "@/sections/Services/ServicesSection"
import { WhyChooseUsSection } from "@/sections/WhyChooseUs/WhyChooseUsSection"
import { ProcessSection } from "@/sections/Process/ProcessSection"
import { FAQSection } from "@/sections/FAQ/FAQSection"
import { BlogSection } from "@/sections/Blog/BlogSection"
import { CTASection } from "@/sections/CTA/CTASection"
import { ContactSection } from "@/sections/Contact/ContactSection"
import { FooterSection } from "@/sections/Footer/FooterSection"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
