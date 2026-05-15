import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Phone } from "lucide-react";

export function GetQuoteBanner() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Top Process Bar */}
      <div className="bg-white border-b border-brand-dark/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-dark/10">
            {[
              { step: "01", title: "Point of Contact" },
              { step: "02", title: "Consultation" },
              { step: "03", title: "Present the Plan" },
              { step: "04", title: "Execution" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="flex flex-col items-center justify-center py-6 md:py-8 px-4 group hover:bg-brand-offwhite transition-colors duration-300">
                  <span className="text-xs font-bold text-brand-accent/60 tracking-widest uppercase mb-1">
                    Step {item.step}
                  </span>
                  <span className="text-brand-primary font-bold text-sm md:text-base text-center leading-tight group-hover:text-brand-dark transition-colors">
                    {item.title}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Main CTA Banner */}
      <div className="relative min-h-[280px] md:min-h-[320px] flex items-center">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-brand-primary-light/5 blur-[80px] pointer-events-none" />
        <div className="absolute right-[30%] top-0 w-1/3 h-full bg-brand-accent/5 blur-[60px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex items-end justify-between">
            {/* Left: Text Content */}
            <AnimatedSection direction="right" className="py-14 md:py-16 max-w-xl">
              <span className="inline-flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-8 h-[2px] bg-brand-accent inline-block" />
                Ready to Start?
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Get a <span className="text-brand-accent italic font-serif">Quote</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-md leading-relaxed">
                Transform your outdoor space today. Contact our expert team for a comprehensive, no-obligation quote tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand-accent text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,213,130,0.4)] group text-sm uppercase tracking-wider"
                >
                  Contact Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:0408086923"
                  className="inline-flex items-center gap-3 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  <Phone className="w-5 h-5" />
                  0408 086 923
                </a>
              </div>
            </AnimatedSection>

            {/* Right: Worker Image */}
            <AnimatedSection direction="left" className="hidden md:block relative self-end flex-shrink-0">
              <div className="relative w-[280px] lg:w-[340px] h-[320px] lg:h-[380px]">
                <Image
                  src="/images/geta quote imaeg.png"
                  alt="Fresh Green Gardening Professional"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
