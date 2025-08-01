import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ToolPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {slug?.replace('-', ' ').toUpperCase()} Tool
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Use our {slug} tool to convert your files quickly and easily.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}