import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}