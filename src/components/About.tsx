import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    "15+ Years of Clinical Experience",
    "Advanced Digital Dentistry",
    "Painless Treatment Options",
    "Sterilized & Hygienic Environment",
    "Patient-Centric Care Approach",
    "Affordable & Transparent Pricing"
  ];

  return (
    <section id="about" className="bento-card h-full">
      <h3 className="text-accent-green text-lg font-bold mb-3">Experience Excellence</h3>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        Led by Dr. S. Upadhaya (MDS), our clinic has served over 5,000+ happy patients with state-of-the-art technology and compassionate care.
      </p>
      
      <div className="mt-auto flex gap-8">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-primary-blue">15+</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Years Exp</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-primary-blue">4.9</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Rating</span>
        </div>
      </div>
    </section>
  );
}
