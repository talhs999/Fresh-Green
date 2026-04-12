import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Star } from "lucide-react";

const reviews = [
  { text: "Phenomenal attention to detail. Fresh Green transformed our overgrown backyard into a modern oasis.", author: "Sarah Jenkins", time: "2 weeks ago", rating: 5, initial: "S", color: "bg-blue-600" },
  { text: "The team is incredibly professional and always leaves our lawn looking immaculate. Highly recommended!", author: "David Wong", time: "1 month ago", rating: 5, initial: "D", color: "bg-orange-500" },
  { text: "We hired them for a seasonal cleanup and planting. The new garden beds are thriving.", author: "Emma Thompson", time: "3 months ago", rating: 5, initial: "E", color: "bg-purple-600" },
];

export function GoogleReviews() {
  return (
    <section className="py-24 bg-brand-offwhite relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  <path d="M1 1h22v22H1z" fill="none"/>
                </svg>
                <span className="font-bold text-sm text-brand-dark">Excellent</span>
                <span className="flex text-amber-400">
                  <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">Trusted in Perth</h2>
            <p className="text-lg text-brand-dark/70">Read what our happy clients say on Google.</p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <AnimatedSection direction="up" delay={i * 0.15} key={i}>
              <div className="bg-white p-8 rounded-3xl border border-black/5 h-full flex flex-col relative group shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-display font-bold text-lg`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-[15px]">{review.author}</h4>
                    <p className="text-[13px] text-brand-dark/50">{review.time}</p>
                  </div>
                  <div className="ml-auto w-6 h-6 relative shrink-0">
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
                <div className="flex text-amber-400 mb-4 gap-[2px]">
                  {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-[18px] h-[18px] fill-current" />)}
                </div>
                <p className="text-[15px] text-brand-dark/80 leading-relaxed flex-grow">"{review.text}"</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
