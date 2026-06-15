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
import AdminDashboard from './components/AdminDashboard';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Secret Admin Portal Route */}
        <Route path="/secret-admin-portal-xyz" element={<AdminDashboard />} />
        
        {/* Main Website */}
        <Route path="/" element={
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
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
