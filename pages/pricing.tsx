import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import PricingSection from '../src/components/PricingSection';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PricingSection />
      <Footer />
    </div>
  );
}