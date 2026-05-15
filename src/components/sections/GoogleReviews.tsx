"use client";

import { useRef, useEffect, useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { text: "We recently used gardening services from Muhammad. The service he provided was exceptional, with high standard and quality. Overall, our experience with him was great and would highly recommend his service.", author: "Ebadullah bhurgri", time: "5 months ago", rating: 5, initial: "E", color: "bg-blue-600" },
  { text: "Love Muhammad’s work and level of service. He’s on the ball, always updates me on the works done and has great initiative to suggest improvements deemed necessary for my yard. Highly recommended! 👍", author: "Jessica Wong", time: "8 months ago", rating: 5, initial: "J", color: "bg-pink-500" },
  { text: "Great experience, very friendly and professional. He trimmed and removed all my plants I wanted to, neatly and planted new ones in the garden. The job was tidy. Very happy 😁", author: "blaster s", time: "6 months ago", rating: 5, initial: "B", color: "bg-green-600" },
  { text: "Really happy with the service! Did a meticulous lawn mow and weeding with no mess left behind. Fair pricing and great communication. Highly recommended and will use again", author: "Gillian Tan", time: "8 months ago", rating: 5, initial: "G", color: "bg-purple-600" },
  { text: "Very happy with Muhammad’s work today with cleaning and trimming my yard and overgrown hedging. Left the yard looking spotless. Can’t recommend him enough and will definitely be using Fresh Green Gardening.", author: "mohd isa", time: "a year ago", rating: 5, initial: "M", color: "bg-orange-500" },
  { text: "Fast Responses, on time, immaculate work, and reasonable price... Highly recommended.. Thank you", author: "Ryan Sirait", time: "2 years ago", rating: 5, initial: "R", color: "bg-teal-600" },
  { text: "Can't recommend Mohammed and Fresh Green Gardening enough everything was straight forward from the quote process and the way the works were carried out if you want an honest and reliable Business to look after all your gardening needs give Fresh Green Gardening a go you won't regret it 🙌😊", author: "all pro G", time: "a year ago", rating: 5, initial: "A", color: "bg-red-500" },
  { text: "Mo’s attention to detail is unmatched, his work is very precise and clean. He is very professional and gets the job done well. I highly recommend his ongoing garden maintenance services.", author: "Margaret Messiha", time: "2 years ago", rating: 5, initial: "M", color: "bg-indigo-500" },
];

export function GoogleReviews() {
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
      const scrollAmount = direction === "left" ? -clientWidth / 1.1 : clientWidth / 1.1;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-12 pb-12 bg-brand-offwhite relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  <path d="M1 1h22v22H1z" fill="none"/>
                </svg>
                <span className="font-bold text-sm text-brand-dark">5.0 Rating</span>
                <span className="flex text-amber-400">
                  <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">Real Google Reviews</h2>
            <p className="text-lg text-brand-dark/70">See what our clients are saying about our gardening services.</p>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={0.2} className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center transition-all hover:bg-black/5 disabled:opacity-50 disabled:cursor-not-allowed text-brand-dark"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center transition-all hover:bg-black/5 disabled:opacity-50 disabled:cursor-not-allowed text-brand-dark"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </AnimatedSection>
      </div>

      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto pb-12 snap-x snap-mandatory space-x-6 px-6 md:px-12 xl:px-[calc((100vw-1280px)/2+1.5rem)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {reviews.map((review, i) => (
          <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-white p-8 rounded-3xl border border-black/5 flex flex-col relative group shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300">
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
        ))}
      </div>
    </section>
  );
}
