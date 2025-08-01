import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';

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