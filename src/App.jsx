import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons'; // <-- Import the new component
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Testimonials />
        <Booking />
        <Contact />
      </main>

      <Footer />
      
      {/* Add the floating buttons here so they render over everything */}
      <FloatingButtons />
    </div>
  );
}

export default App;