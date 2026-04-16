import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                U
              </div>
              <span className="text-xl font-display font-bold">
                Upadhaya <span className="text-primary-blue">Dental Clinic</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Leading dental clinic in Rajasthan providing world-class treatments with a patient-first approach. Your smile is our priority.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#0056b3' }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-slate-400 hover:text-primary-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Teeth Cleaning', 'Root Canal (RCT)', 'Dental Implants', 'Braces & Aligners', 'Teeth Whitening', 'Extraction'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-primary-blue transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get dental health tips and special offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary-blue"
              />
              <button className="bg-primary-blue hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {currentYear} Upadhaya Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Rajasthan
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
