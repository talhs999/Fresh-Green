import { Leaf } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function AdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-offwhite">
      {/* Minimalist Sticky Header for Ad Conversion */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
              <Leaf className="text-brand-accent w-5 h-5 group-hover:-rotate-12 transition-transform" />
            </div>
            <span className="font-display font-bold text-xl text-brand-dark tracking-tight">Fresh Green</span>
          </Link>
          <a href="tel:0408086923" className="flex items-center gap-3">
             <span className="hidden sm:block text-sm font-bold text-brand-dark/60 uppercase tracking-widest">Call Now</span>
             <span className="text-xl font-display font-bold text-brand-accent hover:text-brand-primary transition-colors">0408 086 923</span>
          </a>
        </div>
      </header>
      
      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}
