"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const videos = [
  "/images/videos/1.mp4",
  "/images/videos/2.mp4",
  "/images/videos/3.mp4",
  "/images/videos/4.mp4",
  "/images/videos/5.mp4",
  "/images/videos/6.mp4",
  "/images/videos/7.mp4",
];

export function VideoReels() {
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
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,177,67,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl mb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        <AnimatedSection direction="up" className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Watch Us <span className="text-brand-accent italic font-serif">In Action</span>
          </h2>
          <p className="text-lg text-brand-text-light/70">Check out our latest gardening and landscaping projects across Perth.</p>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.2} className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Previous videos"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-brand-accent transition-colors" />
          </button>
          <button 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Next videos"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-brand-accent transition-colors" />
          </button>
        </AnimatedSection>
      </div>
      
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto pb-8 snap-x snap-mandatory space-x-6 px-6 md:px-12 xl:px-[calc((100vw-1280px)/2+1.5rem)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {videos.map((video, i) => (
          <div key={i} className="snap-center shrink-0 w-[80vw] sm:w-[350px] md:w-[320px] aspect-[9/16] relative rounded-3xl overflow-hidden group border border-white/10 bg-brand-surface shadow-2xl">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">Project Highlight</span>
               </div>
            </div>

            {/* Glass effect ring */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
}
