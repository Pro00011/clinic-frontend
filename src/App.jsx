import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Hero />
        <Services />
        <Testimonials />
        <Booking />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;