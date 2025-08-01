import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}