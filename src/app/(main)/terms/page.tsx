import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FileText, AlertTriangle, CreditCard, Leaf, UserX } from "lucide-react";

export default function TermsPage() {
  return (
    <>
       <section className="bg-brand-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Terms & <span className="text-brand-accent">Conditions</span>
            </h1>
            <p className="text-xl text-brand-text-light/80 max-w-2xl mx-auto">
              Please read these terms carefully before engaging our professional landscaping services in Perth.
            </p>
            <div className="mt-8 text-sm text-brand-text-light/50 font-bold uppercase tracking-widest">
              Last updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-8">
            
            <AnimatedSection direction="up" delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 hover:border-brand-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary-light flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-brand-dark mt-1">1. Scope of Services</h2>
                </div>
                <p className="text-brand-dark/70 leading-relaxed ml-16">
                  Fresh Green Gardening provides professional landscaping, routine lawn maintenance, tree trimming, and cleanup services across the Perth metropolitan area. All scheduled services are subject to environmental factors including severe weather conditions and safe site accessibility.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 hover:border-brand-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary-light flex items-center justify-center shrink-0">
                    <CreditCard className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-brand-dark mt-1">2. Quotes & Payment Terms</h2>
                </div>
                <p className="text-brand-dark/70 leading-relaxed ml-16 mb-4">
                  All initial site visits and subsequent quotes are absolutely free of charge. Quotes provided represent a highly accurate estimate based on visual inspection. 
                </p>
                <div className="ml-16 bg-brand-offwhite p-6 rounded-2xl border border-black/5">
                   <ul className="list-disc list-inside text-brand-dark/70 space-y-2">
                     <li>Payment for standard maintenance is strictly due within <strong>7 days</strong> of invoice.</li>
                     <li>Major landscaping transformations require a <strong>30% deposit</strong> before commencement.</li>
                     <li>Unforeseen underground obstacles (e.g., hidden rock, pipes) may incur adjusted variation costs.</li>
                   </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 hover:border-brand-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary-light flex items-center justify-center shrink-0">
                    <UserX className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-brand-dark mt-1">3. Cancellations & Rescheduling</h2>
                </div>
                <p className="text-brand-dark/70 leading-relaxed ml-16">
                  We value our team's time and yours. We require a minimum of <strong>24 hours' notice</strong> for the cancellation or rescheduling of any routine services. Late cancellations may be subject to a nominal call-out fee. For significant landscaping works, cancellation policies will be documented in your custom contract.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 hover:border-brand-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-brand-dark mt-1">4. Property Liability</h2>
                </div>
                <p className="text-brand-dark/70 leading-relaxed ml-16">
                  Fresh Green Gardening is comprehensively insured. While we exercise absolute extreme care across your property, we cannot be held liable for damage to concealed assets hidden within overgrowth (e.g., buried reticulation lines, hidden cables, or small toys). Please ensure the primary work zone is cleared of hazards prior to our scheduled arrival.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
               <div className="p-8 text-center bg-brand-dark rounded-3xl mt-8">
                 <Leaf className="w-8 h-8 text-brand-accent mx-auto mb-4" />
                 <p className="text-brand-text-light/80 text-lg">These Terms shall be legally governed by and construed in accordance with the laws of Western Australia.</p>
               </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
