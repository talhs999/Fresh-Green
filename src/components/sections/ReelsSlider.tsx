"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

const reels = [
  { id: "DPoFneFj3RY" },
  { id: "DQJcyvSDtz8" },
  { id: "DQWN3bWCs_o" },
  { id: "DPTeXNtDhRY" },
  { id: "DKeVMexsG3e" },
];

const VISIBLE = 3; // visible on desktop

export function ReelsSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCount = isMobile ? 1 : VISIBLE;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reels.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reels.length) % reels.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Get visible reels (looping)
  const getVisibleReels = () => {
    return Array.from({ length: visibleCount }, (_, i) => reels[(current + i) % reels.length]);
  };

  return (
    <section className="py-20 md:py-28 bg-brand-dark overflow-hidden relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(46,90,39,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection direction="up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
            <Instagram className="w-4 h-4 text-brand-accent" />
            <span className="text-brand-accent text-sm font-bold tracking-wider uppercase">
              @freshgreengardening
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Watch Us <span className="text-brand-accent italic font-serif">In Action</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            See our latest projects and gardening transformations on Instagram.
          </p>
        </AnimatedSection>

        {/* Slider */}
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Reels */}
          <div className="flex gap-4 md:gap-6 justify-center px-6 md:px-10 transition-all duration-500">
            {getVisibleReels().map((reel, i) => (
              <div
                key={`${reel.id}-${i}`}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-12px)] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black"
                style={{ aspectRatio: "9/16", maxHeight: "560px" }}
              >
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  className="w-full h-full"
                  style={{ minHeight: "560px" }}
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reels.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "bg-brand-accent w-8 h-3"
                  : "bg-white/20 w-3 h-3 hover:bg-white/40"
              }`}
              aria-label={`Go to reel ${i + 1}`}
            />
          ))}
        </div>

        {/* Instagram CTA */}
        <AnimatedSection direction="up" className="text-center mt-10">
          <Link
            href="https://www.instagram.com/freshgreengardening"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:scale-105 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
