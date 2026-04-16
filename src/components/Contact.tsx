import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: "123, Medical Road, Near City Center, Jaipur, Rajasthan - 302001",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: "info@upadhayadental.com",
      link: "mailto:info@upadhayadental.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 8:00 PM, Sun: Closed",
      link: null
    }
  ];

  return (
    <section id="contact" className="bento-card h-full">
      <h3 className="text-xl font-bold mb-4">Find Us</h3>
      <div className="space-y-3 flex-1">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <MapPin className="w-4 h-4 text-primary-blue" />
          Main Road, Jaipur, Rajasthan
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Phone className="w-4 h-4 text-primary-blue" />
          0141-2345678
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Clock className="w-4 h-4 text-primary-blue" />
          10:00 AM - 8:00 PM
        </div>
        
        <div className="mt-4 h-24 bg-slate-100 rounded-lg flex items-center justify-center text-[11px] text-slate-400 border border-slate-200">
          Google Maps View
        </div>
      </div>
    </section>
  );
}
