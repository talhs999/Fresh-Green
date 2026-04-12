import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { servicesData } from "@/lib/services-data";
import { CheckCircle2, Star, ShieldCheck, HelpCircle } from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function AdLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* High-Conversion Hero */}
      <section className="relative py-24 md:py-32 bg-brand-dark overflow-hidden">
         <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right" className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent font-bold text-sm uppercase tracking-wider backdrop-blur-md">
                <Star className="w-4 h-4 fill-current" /> Top Rated in Perth
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                Premium <span className="text-brand-accent">{service.title}</span> in Perth.
              </h1>
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Transform your outdoor space today. Fill out the form to claim your <span className="text-brand-accent font-bold">15% Off Introductory Offer</span>.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Fast, Free Quotes Within 24 Hrs",
                  "100% Fully Insured & Guaranteed",
                  "Over 15 Years of Local Experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-lg">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            
            <AnimatedSection direction="left">
               <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative border border-brand-accent/20">
                 <div className="absolute -top-5 left-10 bg-brand-accent text-brand-dark font-bold px-6 py-2 rounded-full shadow-lg">
                    🔥 Limited Time: 15% OFF
                 </div>
                 <h3 className="text-3xl font-display font-bold text-brand-dark mb-2 mt-4">Get Your Free Quote</h3>
                 <p className="text-brand-dark/60 mb-8">Takes less than 30 seconds.</p>
                 
                 <form className="space-y-5">
                    <input type="text" placeholder="Full Name" required className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border border-black/5 focus:ring-2 focus:ring-brand-accent outline-none" />
                    <input type="tel" placeholder="Phone Number" required className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border border-black/5 focus:ring-2 focus:ring-brand-accent outline-none" />
                    <input type="text" placeholder="Suburb (e.g. Claremont)" required className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border border-black/5 focus:ring-2 focus:ring-brand-accent outline-none" />
                    <Button size="lg" className="w-full text-lg shadow-xl shadow-brand-accent/20">Claim Offer & Get Quote</Button>
                 </form>

                 <div className="mt-6 flex justify-center items-center gap-2 text-sm text-brand-dark/50 font-medium">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> Your provided information is secure.
                 </div>
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-brand-offwhite relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">Why Choose Our {service.title} Experts?</h2>
              <p className="text-xl text-brand-dark/70 mb-8">We provide top-tier {service.title.toLowerCase()} across Perth, designed to elevate your property's value and aesthetic.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                 {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center shrink-0">
                         <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                      </div>
                      <span className="font-bold text-brand-dark mt-2">{feature}</span>
                    </div>
                 ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left">
               <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-black/5">
                 <Image src={service.image} alt={service.title} fill className="object-cover" />
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust & Review Sections */}
      <ProcessSection />
      
      {/* Portfolio Gallery */}
      <PortfolioCarousel />

      <GoogleReviews />

      {/* Service specific FAQ */}
      <section className="py-24 bg-white relative border-t border-black/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">Questions about {service.title}?</h2>
              <p className="text-lg text-brand-dark/70">Everything you need to know about our {service.title.toLowerCase()} process in Perth.</p>
            </AnimatedSection>
          </div>
          
          <div className="space-y-6">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="bg-brand-offwhite p-8 rounded-2xl">
                 <h4 className="text-xl font-display font-bold text-brand-dark mb-3 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-brand-accent"/> Do I need to be home when you perform {service.title.toLowerCase()}?</h4>
                 <p className="text-brand-dark/70">Not at all! As long as we have clear access to the required outdoor areas, our trusted team can complete the work and leave your property secure and pristine upon completion.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className="bg-brand-offwhite p-8 rounded-2xl">
                 <h4 className="text-xl font-display font-bold text-brand-dark mb-3 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-brand-accent"/> Is the quoted price for {service.title.toLowerCase()} fixed?</h4>
                 <p className="text-brand-dark/70">Yes, the quote we provide after our initial consultation is comprehensive and fixed. We pride ourselves on absolute transparency with zero hidden fees during our projects.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </>
  );
}
