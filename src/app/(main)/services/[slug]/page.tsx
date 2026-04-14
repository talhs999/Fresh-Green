import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SuburbsSection } from "@/components/sections/SuburbsSection";
import { servicesData } from "@/lib/services-data";
import { CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Related services
  const otherServices = servicesData.filter((s) => s.slug !== resolvedParams.slug).slice(0, 3);

  return (
    <>
      <section className="bg-brand-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-primary-light/10 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <AnimatedSection direction="up">
            <Link href="/services" className="text-brand-accent hover:text-white transition-colors mb-6 inline-flex items-center font-medium">
              &larr; Back to all services
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-brand-text-light/80 max-w-2xl leading-relaxed">
              {service.shortDescription}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-offwhite shadow-2xl border border-black/5 flex items-center justify-center">
                 <Image 
                   src={service.image} 
                   alt={service.title} 
                   fill 
                   className="object-cover"
                 />
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                Professional {service.title} Services in Perth
              </h2>
              <div className="prose prose-lg text-brand-dark/70">
                <p>
                  At Fresh Green Gardening, we understand that {service.title.toLowerCase()} is crucial for maintaining the beauty and longevity of your outdoor spaces. Our experienced team utilizes professional equipment and proven techniques to deliver outstanding results every time.
                </p>
                <p className="mt-4">
                  Whether you have a small residential garden or a large commercial property, we tailor our approach to meet your specific needs and exceed your expectations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-6">What's Included</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                      <span className="font-medium text-brand-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Quote for {service.title}</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <ProcessSection />

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

      {/* Other Services */}
      <section className="py-24 bg-brand-offwhite border-t border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">More Services</h2>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2} className="hidden md:block">
              <Link href="/services" className="text-brand-primary font-bold hover:text-brand-accent transition-colors flex items-center uppercase tracking-wide text-sm">
                View All <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.1} direction="up">
                <Link 
                  href={`/services/${s.slug}`}
                  className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-accent/30 relative overflow-hidden"
                >
                  <h3 className="text-xl font-display font-bold text-brand-dark mb-3">{s.title}</h3>
                  <p className="text-brand-dark/70 mb-6 line-clamp-2">{s.shortDescription}</p>
                  <div className="text-brand-primary font-bold group-hover:text-brand-accent transition-colors text-sm uppercase">Explore &rarr;</div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SuburbsSection variant="compact" />
    </>
  );
}
