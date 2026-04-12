"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/lib/services-data";
import { supabase } from "@/lib/supabase";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      suburb: formData.get("suburb") as string,
      message: formData.get("message") as string,
    };

    try {
      // Basic insert to supabase table 'contact_submissions'
      // Note: Error will show if variables aren't set or table doesn't exist yet, which is expected before backend setup is finished by user
      const { error } = await supabase.from("contact_submissions").insert([data]);

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-brand-dark pt-40 pb-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary-light/10 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Get a <span className="text-brand-accent">Free Quote</span>
            </h1>
            <p className="text-xl text-brand-text-light/80 max-w-2xl mx-auto">
              Ready to transform your garden? Fill out the form below and our team will get back to you with a comprehensive quote.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection direction="right">
                <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">Contact Information</h2>
                <p className="text-brand-dark/70 mb-8 leading-relaxed">
                  Have questions before you request a quote? Feel free to reach out to us directly. We're open during normal business hours (6 am - 5 pm).
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-dark/60 font-bold uppercase tracking-wider mb-1">Call Us</p>
                      <a href="tel:0408086923" className="text-xl font-display font-bold text-brand-dark hover:text-brand-accent transition-colors">0408 086 923</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-dark/60 font-bold uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:freshgreengardening@gmail.com" className="text-xl font-display font-bold text-brand-dark hover:text-brand-accent transition-colors break-all">freshgreengardening@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-dark/60 font-bold uppercase tracking-wider mb-1">Service Area</p>
                      <p className="text-xl font-display font-bold text-brand-dark">Perth, Australia</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5">
                  {isSuccess ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                         <Send className="w-10 h-10 text-brand-primary" />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-brand-dark mb-4">Request Sent!</h3>
                      <p className="text-brand-dark/70 mb-8 text-lg">Thank you for getting in touch. Our team will contact you shortly to formulate your quote.</p>
                      <Button onClick={() => setIsSuccess(false)}>Send Another Request</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-bold text-brand-dark">Your Name *</label>
                          <input required id="name" name="name" type="text" className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold text-brand-dark">Your Email *</label>
                          <input required id="email" name="email" type="email" className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-bold text-brand-dark">Your Number *</label>
                          <input required id="phone" name="phone" type="tel" className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all" placeholder="0400 000 000" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="suburb" className="text-sm font-bold text-brand-dark">Your Suburb *</label>
                          <input required id="suburb" name="suburb" type="text" className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all" placeholder="e.g. Claremont" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-bold text-brand-dark">Service Required *</label>
                        <select required id="service" name="service" className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all appearance-none">
                          <option value="">Select a service...</option>
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                          <option value="other">Other / Multiple</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-brand-dark">Your Message (Optional)</label>
                        <textarea id="message" name="message" rows={4} className="w-full bg-brand-offwhite px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all resize-none" placeholder="Tell us more about your project..." />
                      </div>

                      {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                          {error} (Have you set up the Supabase credentials in .env.local yet?)
                        </div>
                      )}

                      <Button type="submit" size="lg" className="w-full shadow-lg shadow-brand-accent/20" disabled={isSubmitting}>
                        {isSubmitting ? "Sending Request..." : "Get My Free Quote"}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
