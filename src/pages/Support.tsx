import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Need help? Contact our support team and we'll be happy to assist you.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}