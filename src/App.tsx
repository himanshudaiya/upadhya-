import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen"
    >
      <Navbar />
      
      <main className="max-w-7xl mx-auto bento-grid mt-20">
        <div className="col-span-2 row-span-1">
          <Hero />
        </div>
        <div className="col-span-1 row-span-1">
          <About />
        </div>
        <div className="col-span-1 row-span-2">
          <AppointmentForm />
        </div>
        <div className="col-span-2 row-span-1">
          <Services />
        </div>
        <div className="col-span-1 row-span-1">
          <WhyChooseUs />
        </div>
        <div className="col-span-2 row-span-1">
          <Testimonials />
        </div>
        <div className="col-span-1 row-span-1">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
}
