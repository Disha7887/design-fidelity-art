import { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import ToolsSection from '../src/components/ToolsSection';
import AnimatedStatsSection from '../src/components/AnimatedStatsSection';
import GallerySection from '../src/components/GallerySection';
import TestimonialsSection from '../src/components/TestimonialsSection';
import Footer from '../src/components/Footer';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-inter relative bg-gray-900">
      {/* Animated Dark Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Moving geometric shapes */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-dark-float-1" style={{top: '5%', left: '10%'}}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-dark-float-2" style={{top: '40%', right: '15%'}}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-br from-green-500/12 to-emerald-500/12 rounded-full blur-2xl animate-dark-float-3" style={{bottom: '20%', left: '20%'}}></div>
        <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-dark-float-4" style={{top: '60%', right: '5%'}}></div>
        <div className="absolute w-56 h-56 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-dark-float-5" style={{bottom: '40%', right: '25%'}}></div>
        <div className="absolute w-88 h-88 bg-gradient-to-br from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-dark-float-6" style={{top: '15%', left: '40%'}}></div>

        {/* Floating particles */}
        <div className="absolute w-4 h-4 bg-white/20 rounded-full animate-particle-1" style={{top: '10%', left: '20%'}}></div>
        <div className="absolute w-3 h-3 bg-red-400/30 rounded-full animate-particle-2" style={{top: '30%', right: '30%'}}></div>
        <div className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-particle-3" style={{bottom: '25%', left: '15%'}}></div>
        <div className="absolute w-5 h-5 bg-green-400/25 rounded-full animate-particle-4" style={{top: '70%', right: '10%'}}></div>
        <div className="absolute w-3 h-3 bg-purple-400/35 rounded-full animate-particle-5" style={{bottom: '15%', right: '20%'}}></div>
        <div className="absolute w-4 h-4 bg-orange-400/30 rounded-full animate-particle-6" style={{top: '50%', left: '70%'}}></div>

        {/* Moving lines */}
        <div className="absolute w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-line-1" style={{top: '20%', left: '25%'}}></div>
        <div className="absolute w-px h-24 bg-gradient-to-b from-transparent via-red-400/30 to-transparent animate-line-2" style={{top: '60%', right: '35%'}}></div>
        <div className="absolute w-px h-28 bg-gradient-to-b from-transparent via-blue-400/25 to-transparent animate-line-3" style={{bottom: '30%', left: '60%'}}></div>
      </div>

      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        <div id="hero" data-section className="scroll-section">
          <HeroSection />
        </div>
        
        <ToolsSection />
        <AnimatedStatsSection />
        
        <div id="gallery" data-section className="scroll-section">
          <GallerySection />
        </div>
        
        <div id="testimonials" data-section className="scroll-section">
          <TestimonialsSection />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}