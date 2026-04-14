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
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] overflow-hidden">
        <Flower2 className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] animate-[spin_120s_linear_infinite]" strokeWidth={0.5} />
        <Leaf className="absolute top-[20%] left-[25%] w-[300px] h-[300px] -rotate-45 hover:animate-pulse" strokeWidth={0.5} />
        <Flower2 className="absolute bottom-[-20%] left-[40%] w-[500px] h-[500px] animate-[spin_100s_linear_infinite_reverse]" strokeWidth={0.5} />
        <Leaf className="absolute top-[-15%] right-[10%] w-[350px] h-[350px] rotate-[120deg]" strokeWidth={0.5} />
        <Flower2 className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] animate-[spin_150s_linear_infinite]" strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <AnimatedSection key={i} direction="up" delay={i * 0.1}>
              <div className="group flex flex-col items-start gap-4 p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-accent/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-dark/50 text-brand-accent mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold tracking-wide text-white group-hover:text-brand-accent transition-colors">{feature.title}</h3>
                <p className="text-brand-text-light/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
