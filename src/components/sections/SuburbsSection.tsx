import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { perthSuburbs } from "@/lib/suburbs";
import { MapPin, ArrowRight } from "lucide-react";

type SuburbsSectionProps = {
  variant?: "grid" | "compact" | "marquee" | "categorized";
};

export function SuburbsSection({ variant = "grid" }: SuburbsSectionProps) {
  // Sort alphabetically just in case
  const sortedSuburbs = [...perthSuburbs].sort();

  return (
    <section className={`py-24 border-t border-black/5 ${variant === 'compact' ? 'bg-brand-dark' : 'bg-brand-offwhite'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm tracking-wider uppercase mb-6">
            <MapPin className="w-4 h-4" /> Service Areas
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${variant === 'compact' ? 'text-white' : 'text-brand-dark'}`}>
            Find your <span className="text-brand-accent">Suburb</span>
          </h2>
          <p className={`text-lg ${variant === 'compact' ? 'text-white/70' : 'text-brand-dark/70'}`}>
            We provide premium landscaping and gardening services across the entire Perth metropolitan area. 
          </p>
        </AnimatedSection>

        {variant === "grid" && (
          <AnimatedSection direction="up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
              {sortedSuburbs.map((suburb) => (
                <div key={suburb} className="flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/20 group-hover:bg-brand-accent transition-colors" />
                  <span className="text-sm text-brand-dark/70 group-hover:text-brand-primary transition-colors cursor-default truncate">
                    {suburb}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {variant === "compact" && (
          <AnimatedSection direction="up" delay={0.2}>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
               <div className="columns-2 md:columns-4 lg:columns-5 gap-6">
                 {sortedSuburbs.map((suburb) => (
                   <div key={suburb} className="mb-2 break-inside-avoid">
                      <span className="text-sm text-white/60 hover:text-brand-accent transition-colors cursor-default">
                        {suburb}
                      </span>
                   </div>
                 ))}
               </div>
            </div>
          </AnimatedSection>
        )}

        {variant === "marquee" && (
          <AnimatedSection direction="up" delay={0.2} className="relative overflow-hidden w-full whitespace-nowrap mask-edges">
            <div className="inline-flex gap-8 group">
               {/* First scroll block */}
               <div className="animate-marquee inline-flex gap-8 items-center">
                  {sortedSuburbs.slice(0, Math.floor(sortedSuburbs.length / 2)).map((suburb) => (
                    <span key={suburb} className="text-xl font-display font-bold text-brand-primary/40 hover:text-brand-primary transition-colors cursor-default">
                      {suburb}
                    </span>
                  ))}
               </div>
               <div className="animate-marquee inline-flex gap-8 items-center absolute top-0">
                  {sortedSuburbs.slice(0, Math.floor(sortedSuburbs.length / 2)).map((suburb) => (
                    <span key={`${suburb}-dup`} className="text-xl font-display font-bold text-brand-primary/40 hover:text-brand-primary transition-colors cursor-default">
                      {suburb}
                    </span>
                  ))}
               </div>
            </div>

            <div className="inline-flex gap-8 mt-6">
               <div className="animate-marquee-reverse inline-flex gap-8 items-center">
                  {sortedSuburbs.slice(Math.floor(sortedSuburbs.length / 2)).map((suburb) => (
                    <span key={suburb} className="text-xl font-display font-bold text-brand-primary/40 hover:text-brand-primary transition-colors cursor-default">
                      {suburb}
                    </span>
                  ))}
               </div>
               <div className="animate-marquee-reverse inline-flex gap-8 items-center absolute bottom-0">
                  {sortedSuburbs.slice(Math.floor(sortedSuburbs.length / 2)).map((suburb) => (
                    <span key={`${suburb}-dup-2`} className="text-xl font-display font-bold text-brand-primary/40 hover:text-brand-primary transition-colors cursor-default">
                      {suburb}
                    </span>
                  ))}
               </div>
            </div>
          </AnimatedSection>
        )}

        {variant === "categorized" && (
          <AnimatedSection direction="up" delay={0.2}>
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
              {Array.from(new Set(sortedSuburbs.map(s => s[0].toUpperCase()))).sort().map(letter => {
                const suburbsInLetter = sortedSuburbs.filter(s => s.toUpperCase().startsWith(letter));
                return (
                  <div key={letter} className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 break-inside-avoid hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 flex items-center justify-center mb-5">
                      <span className="font-display font-bold text-2xl text-brand-primary">{letter}</span>
                    </div>
                    <ul className="space-y-3">
                       {suburbsInLetter.map(suburb => (
                         <li key={suburb} className="flex items-center gap-2 text-sm text-brand-dark/70 hover:text-brand-accent transition-colors">
                           <div className="w-1 h-1 rounded-full bg-brand-primary/20" />
                           {suburb}
                         </li>
                       ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection direction="up" delay={0.3} className="mt-16 text-center">
           <div className={`inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 p-6 rounded-2xl ${variant === 'compact' ? 'bg-brand-accent/10 border border-brand-accent/20' : 'bg-white shadow-sm border border-black/5'}`}>
              <div>
                <p className={`font-bold text-lg ${variant === 'compact' ? 'text-white' : 'text-brand-dark'}`}>Don't see your suburb?</p>
                <p className={`text-sm ${variant === 'compact' ? 'text-white/70' : 'text-brand-dark/70'}`}>Contact us and we'll come to you!</p>
              </div>
              <Link href="/contact" className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 ${variant === 'compact' ? 'bg-brand-accent text-brand-dark' : 'bg-brand-primary text-white'}`}>
                 Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
