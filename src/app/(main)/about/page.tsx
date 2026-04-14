import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Leaf, CheckCircle2, Trophy, Clock, BadgeCheck } from "lucide-react";
import { FeaturesBanner } from "@/components/sections/FeaturesBanner";

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              About <span className="text-brand-accent">Us</span>
            </h1>
            <p className="text-xl text-brand-text-light/80 max-w-2xl mx-auto">
              We are Perth's premier landscaping and gardening service, dedicated to transforming outdoor spaces with passion and precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection direction="right">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-brand-primary flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent/20" />
                <Leaf className="w-32 h-32 text-brand-accent/20 absolute transform rotate-12" />
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-4xl font-display font-bold text-brand-accent mb-2">Since 2008</h3>
                  <p className="text-lg">Creating Perth's Best Gardens</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark">
                Our Story
              </h2>
              <div className="prose prose-lg text-brand-dark/70">
                <p>
                  Fresh Green Gardening was founded with a simple mission: to provide high-quality, reliable gardening and landscaping services to the residents of Perth. With over 15 years of experience, we love what we do and have worked in hundreds of homes around the area.
                </p>
                <p>
                  From routine garden maintenance to full-scale garden makeovers, our team of skilled and dependable workers ensures top-notch quality and transformative solutions tailored to your unique space. We bring your vision to life.
                </p>
              </div>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                 {[
                  { label: "Experience", value: "15+ Years", icon: Clock },
                  { label: "Fully Insured", value: "100%", icon: BadgeCheck },
                  { label: "Projects", value: "500+", icon: Trophy },
                  { label: "Satisfaction", value: "Guaranteed", icon: CheckCircle2 },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-black/5 flex items-center justify-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <stat.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                       <p className="font-bold text-brand-dark text-lg md:text-base">{stat.value}</p>
                       <p className="text-xs text-brand-dark/60 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FeaturesBanner />

      <section className="py-24 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to work with us?</h2>
            <p className="text-xl text-brand-text-light/80 mb-10">
              Whether it's a small cleanup or a complete landscaping project, our professional team is ready to help.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
