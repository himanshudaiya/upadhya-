import { motion } from 'motion/react';
import { 
  Sparkles, 
  Activity, 
  Trash2, 
  ShieldCheck, 
  Smile, 
  Zap 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      title: "Teeth Cleaning",
      description: "Professional scaling and polishing to remove plaque and tartar for a fresh, healthy mouth.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Root Canal (RCT)",
      description: "Advanced painless root canal treatments to save your natural teeth from deep infections.",
      icon: <Activity className="w-8 h-8" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Tooth Extraction",
      description: "Gentle and safe removal of damaged or wisdom teeth with minimal discomfort.",
      icon: <Trash2 className="w-8 h-8" />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Dental Implants",
      description: "Permanent and natural-looking tooth replacements to restore your smile and function.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Braces & Aligners",
      description: "Straighten your teeth with traditional braces or modern invisible clear aligners.",
      icon: <Smile className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments to brighten your smile by several shades instantly.",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section id="services" className="bento-card h-full">
      <h3 className="text-xl font-bold mb-6">Our Premium Services</h3>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {services.map((service) => (
          <div 
            key={service.title} 
            className="bg-slate-50 p-3 rounded-lg text-[11px] font-bold text-center border border-transparent hover:border-primary-blue hover:text-primary-blue hover:bg-white transition-all cursor-default flex items-center justify-center"
          >
            {service.title}
          </div>
        ))}
        <div className="bg-slate-50 p-3 rounded-lg text-[11px] font-bold text-center border border-transparent hover:border-primary-blue hover:text-primary-blue hover:bg-white transition-all cursor-default flex items-center justify-center">
          Pediatric Care
        </div>
        <div className="bg-slate-50 p-3 rounded-lg text-[11px] font-bold text-center border border-transparent hover:border-primary-blue hover:text-primary-blue hover:bg-white transition-all cursor-default flex items-center justify-center">
          Gum Treatment
        </div>
        <div className="bg-slate-50 p-3 rounded-lg text-[11px] font-bold text-center border border-transparent hover:border-primary-blue hover:text-primary-blue hover:bg-white transition-all cursor-default flex items-center justify-center">
          Smile Design
        </div>
      </div>
    </section>
  );
}
