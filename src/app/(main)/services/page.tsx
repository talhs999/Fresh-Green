import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { servicesData } from "@/lib/services-data";
import { ArrowRight, Leaf, CheckCircle2 } from "lucide-react";
import { SuburbsSection } from "@/components/sections/SuburbsSection";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Our <span className="text-brand-accent">Services</span>
            </h1>
            <p className="text-xl text-brand-text-light/80 max-w-2xl mx-auto">
              Comprehensive landscaping and gardening services designed to transform your outdoor space into a beautiful, functional retreat.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1} direction="up" className="h-full">
                <Link 
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-black/5 hover:border-brand-accent/30 relative overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full transition-transform duration-500 ease-out group-hover:scale-[2.5]" />
                  <div className="w-16 h-16 rounded-2xl bg-brand-offwhite flex items-center justify-center mb-6 border border-black/5 group-hover:bg-brand-accent group-hover:border-transparent transition-colors text-brand-primary">
                    <Leaf className="w-8 h-8 group-hover:text-brand-dark" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">{service.title}</h3>
                  <p className="text-brand-dark/70 mb-6 flex-grow">{service.shortDescription}</p>
                  
                  <ul className="mb-8 space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-brand-dark/60">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-brand-primary font-bold group-hover:text-brand-accent transition-colors uppercase tracking-wide text-sm mt-auto">
                    Explore Service <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-8">
              Not sure what you need?
            </h2>
            <p className="text-xl text-brand-dark/70 mb-10">
              Get in touch with our team. We offer free consultations to help you figure out the best approach for your garden.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Request a Free Consultation</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <SuburbsSection variant="compact" />
    </>
  );
}
