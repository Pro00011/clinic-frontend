import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Teams';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
        <Team />
        <Services />
        <FAQ />
        <Testimonials />
        <Booking />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
      <SpeedInsights />
    </div>
  );
}

export default App;