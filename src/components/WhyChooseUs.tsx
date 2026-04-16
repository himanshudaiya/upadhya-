import { motion } from 'motion/react';
import { UserCheck, Wallet, Cpu, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experienced Doctor",
      desc: "Our lead dentist has over 15 years of experience in complex dental surgeries and aesthetic treatments.",
      icon: <UserCheck className="w-10 h-10" />,
      color: "bg-blue-500"
    },
    {
      title: "Affordable Treatment",
      desc: "We believe quality dental care should be accessible to everyone. We offer competitive and transparent pricing.",
      icon: <Wallet className="w-10 h-10" />,
      color: "bg-green-500"
    },
    {
      title: "Latest Technology",
      desc: "We use state-of-the-art equipment including digital X-rays and intraoral cameras for precise diagnosis.",
      icon: <Cpu className="w-10 h-10" />,
      color: "bg-purple-500"
    },
    {
      title: "Friendly Environment",
      desc: "Our clinic is designed to be warm and welcoming, ensuring a stress-free experience for patients of all ages.",
      icon: <HeartHandshake className="w-10 h-10" />,
      color: "bg-rose-500"
    }
  ];

  return (
    <section id="why-us" className="bento-card h-full bg-primary-blue text-white border-none">
      <h3 className="text-xl font-bold mb-4">Why Us?</h3>
      <div className="space-y-3 mt-2">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
          Sterilized Equipment
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
          Affordable Rajasthan Pricing
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
          Digital X-Ray Available
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
          Post-op Support
        </div>
      </div>
    </section>
  );
}
