import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Phone, CalendarCheck, Sparkles } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">Our Process</h2>
            <p className="text-lg text-brand-dark/70">
              We make transforming your garden simple, transparent, and completely stress-free. Here is how we work.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-brand-primary-light/20 z-0">
             <div className="absolute top-0 left-0 h-full bg-brand-accent w-0 animate-[grow_2s_ease-out_forwards]" />
          </div>

          {[
            {
              icon: Phone,
              title: "1. Consultation",
              desc: "Contact us for a free, no-obligation quote. We'll discuss your vision, assess your outdoor space, and determine the optimal approach."
            },
            {
              icon: CalendarCheck,
              title: "2. Strategic Planning",
              desc: "We develop a comprehensive plan, timeline, and select the finest materials and plants tailored precisely to Perth's unique climate."
            },
            {
              icon: Sparkles,
              title: "3. Execution & Reveal",
              desc: "Our expert team gets to work. We deliver premium results efficiently, leaving you with an immaculate, transformed landscape."
            }
          ].map((step, i) => (
            <AnimatedSection direction="up" delay={i * 0.2} key={i} className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto bg-white rounded-full border-[8px] border-brand-offwhite shadow-lg flex items-center justify-center mb-8 relative group hover:border-brand-accent/20 transition-colors">
                <div className="absolute inset-2 rounded-full bg-brand-primary-light flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                   <step.icon className="w-10 h-10 text-brand-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">{step.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed max-w-sm mx-auto">{step.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
