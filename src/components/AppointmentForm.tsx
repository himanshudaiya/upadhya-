import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, User, Phone, MessageSquare, Send, Activity } from 'lucide-react';

export default function AppointmentForm() {
  return (
    <section id="appointment" className="bento-card h-full">
      <h2 className="text-xl font-bold mb-4">Quick Booking</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <Label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</Label>
          <Input id="name" placeholder="e.g. Rahul Sharma" className="h-10 border-slate-200" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</Label>
          <Input id="phone" placeholder="+91" className="h-10 border-slate-200" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="problem" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service</Label>
          <Input id="problem" placeholder="Select Treatment" className="h-10 border-slate-200" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="date" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Preferred Date</Label>
          <Input id="date" type="date" className="h-10 border-slate-200" />
        </div>
        
        <Button className="w-full btn-primary h-12 mt-2">
          Confirm Slot
        </Button>
        
        <p className="text-[11px] text-center text-slate-500 mt-4">
          We will call you to confirm within 30 mins.
        </p>
      </form>
    </section>
  );
}
