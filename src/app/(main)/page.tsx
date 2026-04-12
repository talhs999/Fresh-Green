import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { servicesData } from "@/lib/services-data";
import { CheckCircle2, Trophy, Clock, BadgeCheck, ArrowRight, Leaf } from "lucide-react";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { ProcessSection } from "@/components/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Beautiful landscaped garden in Perth"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/60 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-20 pb-40">
          <div className="max-w-4xl">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-brand-accent font-medium text-sm tracking-wide uppercase">Premum Landscaping in Perth</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6">
                Design. Construct. <br />
                <span className="text-brand-accent">Maintain.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <p className="text-xl md:text-2xl text-brand-text-light/90 mb-10 max-w-2xl leading-relaxed">
                Transform your outdoor space with Perth's leading gardening and landscaping experts. We create environments you'll love spending time in.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.7} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-24 container mx-auto px-6 max-w-7xl">
        <AnimatedSection direction="up">
          <div className="bg-brand-surface border border-white/5 shadow-2xl rounded-3xl p-8 md:p-12 overflow-hidden relative backdrop-blur-xl">
            {/* Subtle glow effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10 text-center">
              {[
                { label: "Happy Homes", value: "100+", icon: Trophy },
                { label: "Services", value: "7+", icon: CheckCircle2 },
                { label: "Experience", value: "15yrs", icon: Clock },
                { label: "Fully Insured", value: "100%", icon: BadgeCheck },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center text-brand-accent mb-2 shadow-lg shadow-black/20">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-white tracking-tight">{stat.value}</h3>
                  <p className="text-brand-text-light/70 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-brand-offwhite relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <AnimatedSection direction="up">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">Our Premium Services</h2>
              <p className="text-lg text-brand-dark/70 leading-relaxed">
                From vibrant healthy gardens through to more involved spaces with multiple elements, our team can design and implement your functional, beautiful landscape.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1} direction="up">
                <Link 
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-black/5 hover:border-brand-accent/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full transition-transform duration-500 ease-out group-hover:scale-[2.5]" />
                  <div className="w-16 h-16 rounded-2xl bg-brand-offwhite flex items-center justify-center mb-8 border border-black/5 group-hover:bg-brand-accent group-hover:border-transparent transition-colors text-brand-primary">
                    <Leaf className="w-8 h-8 group-hover:text-brand-dark" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">{service.title}</h3>
                  <p className="text-brand-dark/70 mb-8 line-clamp-2 leading-relaxed">{service.shortDescription}</p>
                  
                  <div className="flex items-center text-brand-primary font-bold group-hover:text-brand-accent transition-colors uppercase tracking-wide text-sm">
                    Explore Service <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" asChild className="px-12">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-primary-light/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-brand-primary-light flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent/20 mix-blend-overlay" />
                <Leaf className="w-32 h-32 text-brand-accent/20 absolute transform -rotate-12 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 text-center p-8 bg-brand-dark/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
                  <h3 className="text-5xl font-display font-bold text-brand-accent mb-2">15+</h3>
                  <p className="text-xl font-medium tracking-wide uppercase">Years Experience</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Skilled Hands, <br/>
                <span className="text-brand-accent">Beautiful Gardens.</span>
              </h2>
              <p className="text-xl text-brand-text-light/80 mb-8 leading-relaxed">
                We believe no two landscapes are the same, which is why we provide a tailored approach to each project. You can trust us to handle all aspects of your lawn care and landscaping needs.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  "Guaranteed and backed 100%",
                  "High quality products and materials",
                  "Complete project management from start to finish",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <div className="w-8 h-8 rounded-full bg-brand-accent/20 shrink-0 flex items-center justify-center">
                      <CheckCircle2 className="text-brand-accent w-5 h-5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Portfolio Slider */}
      <PortfolioCarousel />

      {/* Reviews Section */}
      <GoogleReviews />

      {/* CTA */}
      <section className="py-24 bg-brand-accent relative overflow-hidden">
        <div className="absolute -top-[50%] -right-[10%] w-[80%] h-[200%] bg-white/10 rotate-12 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-[50%] -left-[10%] w-[80%] h-[200%] bg-brand-primary-light/5 rotate-12 blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-8 tracking-tight">
              Ready to Elevate Your Outdoor Area?
            </h2>
            <p className="text-xl text-brand-dark/80 mb-10 max-w-2xl mx-auto font-medium">
              Embark on the journey to transform your outdoor space now. Contact our team for a comprehensive consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-brand-dark text-white hover:bg-brand-primary-light border-none shadow-[0_15px_30px_rgba(10,61,46,0.3)] transition-all hover:scale-105 active:scale-95" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-accent border-2 bg-transparent" asChild>
                <Link href="tel:0408086923">Call 0408 086 923</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
