import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to your dashboard! Manage your PDF conversions and account settings here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}