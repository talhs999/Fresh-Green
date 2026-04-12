"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const items = [
  { src: "/images/services/lawn-maintenance.png", title: "Cottesloe Estate Lawn" },
  { src: "/images/services/planting.png", title: "Nedlands Front Yard" },
  { src: "/images/services/small-landscaping.png", title: "Mount Lawley Retaining Wall" },
  { src: "/images/services/tree-trimming.png", title: "Claremont Tree Thinning" },
  { src: "/images/services/yard-waste.png", title: "Peppermint Grove Cleanup" }
];

export function PortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-brand-dark overflow-hidden text-white relative">
      <div className="container mx-auto px-6 max-w-7xl mb-12 flex justify-between items-end">
        <AnimatedSection direction="up" className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Recent Work</h2>
          <p className="text-lg text-brand-text-light/70">Swipe through some of our premium landscaping and gardening projects across Perth.</p>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.2} className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </AnimatedSection>
      </div>
      
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto pb-8 snap-x snap-mandatory space-x-6 px-6 md:px-12 xl:px-[calc((100vw-1280px)/2+1.5rem)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[600px] aspect-[4/3] relative rounded-3xl overflow-hidden group border border-white/10">
            <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
              <div className="w-12 h-1 bg-brand-accent rounded-full mb-4 transition-all duration-300 group-hover:w-24" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
