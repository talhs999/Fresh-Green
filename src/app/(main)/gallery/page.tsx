import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Leaf } from "lucide-react";

export default function GalleryPage() {
  const portfolioImages = [
    { src: "/images/hero.png", alt: "Beautiful landscaped garden", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/services/lawn-maintenance.png", alt: "Perfectly manicured lawn", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/services/planting.png", alt: "Vibrant flower beds", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/services/small-landscaping.png", alt: "Modern stone pathway", span: "md:col-span-1 md:row-span-2" },
    { src: "/images/services/tree-trimming.png", alt: "Carefully maintained tree", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/services/yard-waste.png", alt: "Immaculate backyard after cleanup", span: "md:col-span-2 md:row-span-1" },
    { src: "/images/services/seasonal-cleanup.png", alt: "Garden prepared for the season", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <>
      <section className="bg-brand-dark pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Project <span className="text-brand-accent">Gallery</span>
            </h1>
            <p className="text-xl text-brand-text-light/80 max-w-2xl mx-auto">
              Take a look at some of our recent premium landscaping, gardening, and maintenance projects across Perth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-6">
            {portfolioImages.map((image, i) => (
              <AnimatedSection 
                key={i} 
                delay={i * 0.1} 
                direction="up" 
                className={`w-full h-full min-h-[300px] ${image.span}`}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 border border-black/5">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <Leaf className="w-8 h-8 text-brand-accent mb-3" />
                      <h3 className="text-white font-display text-xl font-bold">{image.alt}</h3>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
