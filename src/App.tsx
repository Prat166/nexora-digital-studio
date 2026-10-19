import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Process from './components/Process';
import ScrollProgress from './components/ScrollProgress';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-900">Skip to content</a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
