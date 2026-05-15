import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Trophy, Clock, BadgeCheck } from "lucide-react";
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
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/5 group">
                <Image
                  src="/images/abouimage.png"
                  alt="Fresh Green Gardening Team at Work"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay gradient for style */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-6 left-6 bg-brand-dark/80 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                  <p className="text-brand-accent font-display font-bold text-2xl">15+ Years</p>
                  <p className="text-white/80 text-sm">Experience in Perth</p>
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
