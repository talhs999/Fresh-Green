"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export function HeroContactForm() {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to send message");
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

  if (isSuccess) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6">
          <Send className="w-8 h-8 text-brand-accent" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">Request Sent!</h3>
        <p className="text-white/80 mb-6">Thank you. We will contact you shortly.</p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="text-white border-white/30 hover:bg-white/10">
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#F2FAF1]/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-t border-l border-brand-dark/10 shadow-2xl shadow-black/20">
      <h3 className="text-2xl font-display font-bold text-brand-primary mb-6 text-center tracking-wide">GET A FREE QUOTE</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input required id="hero-name" name="name" type="text" className="w-full bg-white px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark placeholder:text-brand-dark/50 focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm shadow-sm" placeholder="Your Name *" />
          </div>
          <div>
            <input required id="hero-email" name="email" type="email" className="w-full bg-white px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark placeholder:text-brand-dark/50 focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm shadow-sm" placeholder="Your Email *" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input required id="hero-phone" name="phone" type="tel" className="w-full bg-white px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark placeholder:text-brand-dark/50 focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm shadow-sm" placeholder="Phone *" />
          </div>
          <div>
            <input required id="hero-suburb" name="suburb" type="text" className="w-full bg-white px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark placeholder:text-brand-dark/50 focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm shadow-sm" placeholder="Suburb *" />
          </div>
        </div>
        <div>
          <select required id="hero-service" name="service" className="w-full bg-white px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm appearance-none shadow-sm">
            <option value="" className="text-brand-dark">Select a service... *</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.id} className="text-brand-dark">{s.title}</option>
            ))}
            <option value="other" className="text-brand-dark">Other / Multiple</option>
          </select>
        </div>
        <div>
          <textarea id="hero-message" name="message" rows={2} className="w-full bg-white px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark placeholder:text-brand-dark/50 focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none text-sm shadow-sm" placeholder="Your Message (Optional)" />
        </div>
        
        {error && (
          <div className="p-3 bg-red-500/20 border border-red-500/50 text-white rounded-xl text-xs">
            {error}
          </div>
        )}

        <Button type="submit" className="w-full bg-brand-dark text-white hover:bg-brand-primary shadow-lg border border-white/5" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}
