import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import AuthForm from '../src/components/AuthForm';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-20">
        <div className="max-w-md mx-auto">
          <AuthForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}