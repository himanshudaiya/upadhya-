import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Sharma",
      role: "Patient",
      text: "The best dental experience I've ever had. Dr. Upadhaya is very professional and explained the RCT procedure clearly. The clinic is super clean and modern.",
      rating: 5,
      image: "https://picsum.photos/seed/p1/100/100"
    },
    {
      name: "Priya Verma",
      role: "Patient",
      text: "I was very nervous about my wisdom tooth extraction, but the team made me feel so comfortable. It was almost painless! Highly recommend for anyone in Rajasthan.",
      rating: 5,
      image: "https://picsum.photos/seed/p2/100/100"
    },
    {
      name: "Amit Patel",
      role: "Patient",
      text: "Got my braces done here. The results are amazing and the pricing was very fair compared to other clinics. Friendly staff and great environment.",
      rating: 5,
      image: "https://picsum.photos/seed/p3/100/100"
    },
    {
      name: "Sunita Devi",
      role: "Patient",
      text: "Excellent care and attention to detail. The clinic uses the latest technology which made my implant surgery very smooth. Thank you Upadhaya Dental!",
      rating: 5,
      image: "https://picsum.photos/seed/p4/100/100"
    }
  ];

  return (
    <section id="testimonials" className="bento-card h-full">
      <h3 className="text-xl font-bold mb-6">Patient Stories</h3>
      <div className="space-y-6">
        {reviews.slice(0, 2).map((review, i) => (
          <div key={i} className="border-l-4 border-accent-green pl-4">
            <p className="text-sm italic text-slate-600 mb-2">"{review.text}"</p>
            <p className="text-xs font-bold text-slate-900">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
