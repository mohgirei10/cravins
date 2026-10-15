"use client";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  { image: "/images/ice-cream-cup.jpg", alt: "A Cravins ice cream cup topped with cherries", eyebrow: "A moment worth savouring", title: "Your sweet escape.", note: "Made for little moments that feel like a treat." },
  { image: "/images/interior.jpg", alt: "The warm and welcoming Cravins lounge interior", eyebrow: "Stay a little longer", title: "Good vibes. Great scoops.", note: "Your spot for catch-ups, cool treats and happy memories." },
  { image: "/images/storefront.jpg", alt: "The Cravins Ice Cream storefront in Yola", eyebrow: "Find your happy place", title: "Yola, meet your cravings.", note: "Come for the ice cream. Stay for the whole experience." },
];
export default function HeroSlider() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setActive((n) => (n + 1) % slides.length), []);
  const previous = () => setActive((n) => (n - 1 + slides.length) % slides.length);
  useEffect(() => { if (paused || reduce) return; const timer = window.setInterval(next, 5200); return () => window.clearInterval(timer); }, [paused, reduce, next]);
  const slide = slides[active];
  return <div className="relative mx-auto w-full max-w-[480px]">
    <div className="absolute inset-8 rounded-full border border-gold/10" />
    <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-2xl sm:p-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-charcoal">
        <AnimatePresence mode="wait">
          <motion.div key={slide.image} initial={reduce ? false : { opacity: 0, scale: 1.045 }} animate={{ opacity: 1, scale: 1 }} exit={reduce ? undefined : { opacity: 0, scale: .985 }} transition={{ duration: .65, ease: "easeOut" }} className="absolute inset-0">
            <Image src={slide.image} alt={slide.alt} fill priority={active === 0} sizes="(max-width: 768px) 90vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/5" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-5 bottom-6 sm:inset-x-7 sm:bottom-8">
          <AnimatePresence mode="wait"><motion.div key={slide.title} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .35 }}>
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-gold sm:text-xs">{slide.eyebrow}</p><h2 className="mt-2 max-w-sm font-display text-3xl sm:text-4xl">{slide.title}</h2><p className="mt-2 max-w-xs text-xs leading-5 text-cream/75 sm:text-sm">{slide.note}</p>
          </motion.div></AnimatePresence>
        </div>
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <button onClick={() => setPaused((v) => !v)} aria-label={paused ? "Play slideshow" : "Pause slideshow"} className="grid size-9 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md hover:border-gold/60">{paused ? <Play size={15}/> : <Pause size={15}/>}</button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
        <div><p className="font-display text-lg">CRAVINS</p><p className="mt-1 text-[10px] uppercase tracking-[.2em] text-muted">Ice Cream & More</p></div>
        <div className="flex items-center gap-2" aria-label={`Slide ${active + 1} of ${slides.length}`}>
          {slides.map((s, i) => <button key={s.image} aria-label={`Show slide ${i + 1}`} aria-current={i === active ? "true" : undefined} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${i === active ? "w-7 bg-gold" : "w-1.5 bg-white/30 hover:bg-white/60"}`} />)}
          <button onClick={previous} aria-label="Previous slide" className="ml-1 grid size-9 place-items-center rounded-full border border-white/10 hover:border-gold/50"><ArrowLeft size={15}/></button>
          <button onClick={next} aria-label="Next slide" className="grid size-9 place-items-center rounded-full bg-gold text-ink hover:bg-gold-light"><ArrowRight size={15}/></button>
        </div>
      </div>
    </div>
    <div className="absolute -left-3 top-12 hidden rounded-2xl border border-white/10 bg-charcoal/95 px-4 py-3 shadow-lg sm:block"><p className="font-display text-lg italic text-gold">Sweet moments.</p><p className="mt-1 text-[10px] text-muted">Served with a smile.</p></div>
    <div className="pointer-events-none absolute -right-4 bottom-20 hidden size-16 items-center justify-center rounded-full border border-gold/25 bg-ink/80 text-gold shadow-xl backdrop-blur-md sm:flex"><ArrowUpRight size={24}/></div>
  </div>;
}
