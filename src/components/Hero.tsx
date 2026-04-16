import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bento-card bg-gradient-to-br from-white to-blue-50 h-full relative overflow-hidden group">
      <div className="absolute -right-10 -bottom-10 opacity-5 font-bold text-[180px] pointer-events-none group-hover:scale-110 transition-transform duration-700">🦷</div>
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-primary-blue text-xs font-semibold mb-4 shadow-sm">
          <Star className="w-3 h-3 fill-primary-blue" />
          <span>Best Dentist in Rajasthan</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight mb-4">
          Your Smile,<br />
          <span className="text-primary-blue">Our Priority</span>
        </h1>
        
        <p className="text-sm text-slate-600 mb-6 max-w-md leading-relaxed">
          Modern dental care in the heart of Rajasthan. Specialized in pain-free root canals and aesthetic implants.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <Button size="sm" className="btn-primary">
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
