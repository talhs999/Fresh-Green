import Link from "next/link";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-text-light pt-20 pb-10 border-t border-brand-primary-light">
      <div className="container mx-auto px-6 max-w-7xl border-b border-white/10 pb-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-brand-accent" />
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Fresh<span className="text-brand-accent">Green</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-brand-text-light/80">
              Professional gardening and landscaping services in Perth. We pride ourselves on creating and maintaining beautiful, natural environments that enhance any property.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-accent transition-colors">All Services</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-accent transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-brand-accent transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-white text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/lawn-maintenance" className="hover:text-brand-accent transition-colors">Lawn Maintenance</Link></li>
              <li><Link href="/services/planting" className="hover:text-brand-accent transition-colors">Planting</Link></li>
              <li><Link href="/services/pruning-hedges-shrubs" className="hover:text-brand-accent transition-colors">Pruning Hedges</Link></li>
              <li><Link href="/services/small-landscaping" className="hover:text-brand-accent transition-colors">Landscaping</Link></li>
              <li><Link href="/services/tree-trimming" className="hover:text-brand-accent transition-colors">Tree Trimming</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-white text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-accent shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:0408086923" className="hover:text-brand-accent transition-colors mt-1 block">0408 086 923</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-accent shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:freshgreengardening@gmail.com" className="hover:text-brand-accent transition-colors mt-1 block break-all">freshgreengardening@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-accent shrink-0" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="mt-1">Perth, Australia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-text-light/60">
        <p>&copy; {new Date().getFullYear()} Fresh Green Gardening. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
