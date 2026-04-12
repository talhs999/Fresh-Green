"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you offer free quotes?",
    answer: "Yes, we provide free, no-obligation quotes for all our services across Perth. Simply contact us via our form or call us directly."
  },
  {
    question: "Are you fully insured?",
    answer: "Absolutely. Fresh Green Gardening is fully insured for all residential and commercial works, giving you complete peace of mind."
  },
  {
    question: "What areas of Perth do you service?",
    answer: "We cover the entire Perth metropolitan area, from the northern suburbs down to the south, and eastern suburbs. If you're unsure, just give us a call!"
  },
  {
    question: "Do you supply plants and materials?",
    answer: "Yes, for planting and landscaping projects, we can source and supply high-quality plants, soil, mulch, and hardscaping materials at competitive prices."
  },
  {
    question: "How often should I have my lawn maintained?",
    answer: "During warmer months (Spring/Summer), we recommend fortnightly or even weekly mowing. In cooler months (Autumn/Winter), every 3-4 weeks is usually sufficient. We can set up a regular schedule tailored to your lawn's needs."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="bg-brand-dark pt-40 pb-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Frequently Asked <span className="text-brand-accent">Questions</span>
            </h1>
            <p className="text-xl text-brand-text-light/80 max-w-2xl mx-auto">
              Find answers to common questions about our landscaping and gardening services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection direction="up" className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={cn(
                    "bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen ? "border-brand-accent/50 shadow-md" : "border-black/5 hover:border-black/10"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-display font-bold text-lg text-brand-dark pr-8">{faq.question}</span>
                    <ChevronDown className={cn("w-5 h-5 text-brand-primary transition-transform duration-300 shrink-0", isOpen && "rotate-180")} />
                  </button>
                  <div 
                    className={cn(
                      "px-8 overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="text-brand-dark/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="mt-16 text-center">
             <p className="text-lg text-brand-dark mb-6">Still have questions?</p>
             <Button asChild size="lg">
               <Link href="/contact">Contact Our Team</Link>
             </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
