"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

const reels = [
  { id: "DKeVMexsG3e" },
  { id: "DPoFneFj3RY" },
  { id: "DQJcyvSDtz8" },
  { id: "DQWN3bWCs_o" },
  { id: "DPTeXNtDhRY" },
];

const VISIBLE = 3; // show 3 at a time

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

  const next = () => {
    setCurrent((prev) => (prev + 1) % reels.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reels.length) % reels.length);
  };

  // Get visible reels (looping)
  const getVisibleReels = () => {
    return Array.from({ length: visibleCount }, (_, i) => reels[(current + i) % reels.length]);
  };

  return (
    <section className="py-20 md:pt-28 md:pb-12 bg-brand-dark overflow-hidden relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(46,90,39,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedSection direction="up" className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
            <svg className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span className="text-brand-accent text-sm font-bold tracking-wider uppercase">
              @freshgreengardening
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Watch Us <span className="text-brand-accent italic font-serif">In Action</span>
          </h2>
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

          {/* Reels Flex Grid */}
          <div className="flex gap-4 md:gap-6 justify-center px-6 md:px-10 transition-all duration-500 overflow-hidden">
            {getVisibleReels().map((reel, i) => (
              <div
                key={`${reel.id}-${i}`}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-[9/16] relative"
              >
                <div className="absolute inset-0 w-full h-full">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                    className="absolute w-full h-full scale-[1.7] origin-center -translate-y-[15%] border-0"
                    scrolling="no"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                {/* Overlay to block interaction and maintain clean look */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/20" />
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
              className={`transition-all duration-300 rounded-full ${i === current
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
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Follow Us on Instagram
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
