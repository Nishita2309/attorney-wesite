import Navigation from '@/components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Clients from './sections/Clients';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />     
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}

