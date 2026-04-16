import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ThaiDivider } from "@/components/thai-divider";
import { OverviewSection } from "@/components/overview-section";
import { HistorySection } from "@/components/history-section";
import { ArchitectureSection } from "@/components/architecture-section";
import { RitualsSection } from "@/components/rituals-section";
import { MediaSection } from "@/components/media-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function WatSaketPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Overview Section */}
      <OverviewSection />

      {/* Thai Decorative Divider */}
      <ThaiDivider />

      {/* History Section */}
      <HistorySection />

      {/* Thai Decorative Divider */}
      <ThaiDivider className="bg-cream-dark" />

      {/* Architecture Section */}
      <ArchitectureSection />

      {/* Thai Decorative Divider */}
      <ThaiDivider />

      {/* Rituals & Ceremonies Section */}
      <RitualsSection />

      {/* Thai Decorative Divider */}
      <ThaiDivider className="bg-cream-dark" />

      {/* Media Section */}
      <MediaSection />

      {/* Thai Decorative Divider */}
      <ThaiDivider />

      {/* Contact & Directions Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
}
