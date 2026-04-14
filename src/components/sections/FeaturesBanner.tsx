import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { UserCheck, Wrench, Users, DollarSign, Flower2, Leaf } from "lucide-react";

export function FeaturesBanner() {
  const features = [
    {
      icon: UserCheck,
      title: "Experience",
      description: "We love what we do and we have worked in 100's of homes around Perth.",
    },
    {
      icon: Wrench,
      title: "Professional Equipment",
      description: "We have a wide range of equipment for all kinds of Jobs.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "We have skilled team members who know what to do for each job.",
    },
    {
      icon: DollarSign,
      title: "Budget Friendly",
      description: "Our prices are competitive and client-friendly.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#143E2A] overflow-hidden text-white border-y border-white/5">
      {/* Decorative Floral Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <Flower2 className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rotate-12" strokeWidth={0.5} />
        <Leaf className="absolute top-[20%] left-[25%] w-[300px] h-[300px] -rotate-45" strokeWidth={0.5} />
        <Flower2 className="absolute bottom-[-20%] left-[40%] w-[500px] h-[500px] rotate-90" strokeWidth={0.5} />
        <Leaf className="absolute top-[-15%] right-[10%] w-[350px] h-[350px] rotate-[120deg]" strokeWidth={0.5} />
        <Flower2 className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] -rotate-12" strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, i) => (
            <AnimatedSection key={i} direction="up" delay={i * 0.1}>
              <div className="flex flex-col items-start gap-4 p-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent mb-2">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold tracking-wide">{feature.title}</h3>
                <p className="text-brand-text-light/80 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
