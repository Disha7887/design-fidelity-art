import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are dedicated to providing the best PDF tools and services to help you work more efficiently.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}