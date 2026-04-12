import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ShieldCheck, Database, Eye, Bell, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-brand-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-primary-light/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Privacy <span className="text-brand-accent">Policy</span>
            </h1>
            <p className="text-xl text-brand-text-light/80 max-w-2xl mx-auto">
              Your privacy is our priority. We are committed to protecting the personal data of our Perth landscaping clients.
            </p>
            <div className="mt-8 text-sm text-brand-text-light/50 font-bold uppercase tracking-widest">
              Last updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            
            <AnimatedSection direction="up" delay={0.1}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-dark">1. Information We Collect</h2>
                </div>
                <p className="text-lg text-brand-dark/70 mb-6 leading-relaxed">
                  To provide our premium landscaping services across Perth, we collect necessary information when you interact with our website, request a quote, or book our team. This includes:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-brand-offwhite rounded-2xl border border-black/5">
                    <h4 className="font-bold text-brand-dark mb-2">Personal Data</h4>
                    <p className="text-brand-dark/70 text-sm">Your full name, direct phone number, email address, and physical property address required for site inspections.</p>
                  </div>
                  <div className="p-6 bg-brand-offwhite rounded-2xl border border-black/5">
                    <h4 className="font-bold text-brand-dark mb-2">Project Data</h4>
                    <p className="text-brand-dark/70 text-sm">Photographs of your outdoor space, landscaping preferences, and budget constraints submitted via our quote forms.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-dark">2. How We Use Your Data</h2>
                </div>
                <ul className="space-y-6">
                  {[
                    "To generate accurate landscaping and maintenance quotes.",
                    "To schedule on-site visits and communicate project timelines.",
                    "To process secure payments and issue official tax invoices.",
                    "To comply with local Australian taxation and legal obligations."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-accent"></span>
                      </div>
                      <span className="text-lg text-brand-dark/80 pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-dark">3. Data Security & Sharing</h2>
                </div>
                <p className="text-lg text-brand-dark/70 leading-relaxed">
                  We treat your data with the utmost strictness. <strong>We do not sell, trade, or rent your personal information to third parties.</strong> Your data is stored in secure, encrypted databases. Access to your personal data is restricted exclusively to Fresh Green Gardening staff who require it to perform site visits or communicate with you.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="bg-brand-primary p-8 md:p-12 rounded-3xl shadow-lg text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white">4. Your Privacy Rights</h2>
                </div>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Under the Australian Privacy Principles (APPs), you reserve the right to request full access to the personal information we hold about you. You may ask for corrections or request immediate deletion of your data from our systems at any time.
                </p>
                <a href="mailto:freshgreengardening@gmail.com" className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors">
                  <Bell className="w-5 h-5" /> Contact Privacy Officer
                </a>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
