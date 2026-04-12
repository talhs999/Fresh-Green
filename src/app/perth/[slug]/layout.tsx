import Image from "next/image";
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
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image src="/logo.png" alt="Fresh Green Gardening Logo" width={200} height={100} className="w-auto h-16 object-contain group-hover:scale-105 transition-transform" />
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
