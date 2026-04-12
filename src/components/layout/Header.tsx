"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between mx-auto max-w-7xl rounded-full transition-colors duration-300",
            isScrolled
              ? "bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20 border border-white/10 px-6 py-3"
              : "bg-brand-dark px-6 py-4"
          )}
        >
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image 
              src="/logo.png" 
              alt="Fresh Green Gardening Logo" 
              width={48} 
              height={48} 
              className="object-contain group-hover:scale-105 transition-transform" 
            />
            <span className="font-display font-bold text-xl text-white tracking-tight flex items-center">
              Fresh<span className="text-brand-accent">Green</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-text-light hover:text-brand-accent transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-brand-accent hover:bg-brand-accent-glow text-brand-dark font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-brand-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-4 right-4 mt-2 bg-brand-dark/95 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col gap-4 transform transition-all duration-300 origin-top",
          mobileMenuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-95 opacity-0 invisible"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-brand-accent text-lg font-display transition-colors py-2 border-b border-white/5"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 bg-brand-accent text-brand-dark font-bold text-center py-3 rounded-full"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
