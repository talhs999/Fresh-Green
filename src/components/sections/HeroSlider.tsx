"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/hero.png",
  "/images/services/lawn-maintenance.png",
  "/images/services/planting.png",
  "/images/services/small-landscaping.png",
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-brand-dark">
      {images.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt={`Landscaping Perth - Image ${i + 1}`}
          fill
          className={`object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
          priority={i === 0}
        />
      ))}
      <div className="absolute inset-0 bg-brand-dark/60 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10" />
    </div>
  );
}
