import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import CTAButtons from './CTAButtons'
import heroSlides from '../data/heroSlides.json'

const AUTOPLAY_MS = 6000
const TRANSITION_DURATION = 0.5

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slides = heroSlides
  const total = slides.length

  const go = useCallback(
    (direction) => {
      setIndex((i) => {
        if (direction === 'next') return (i + 1) % total
        return (i - 1 + total) % total
      })
    },
    [total]
  )

  useEffect(() => {
    const t = setInterval(() => go('next'), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [go])

  const slide = slides[index]

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen" aria-label="Hero slider">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: TRANSITION_DURATION }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = slide.imageFallback || '/images/hero/placeholder.svg'
              }}
            />
            <div
              className="absolute inset-0 bg-hejaaz-dark/50"
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: TRANSITION_DURATION }}
              className="bg-hejaaz-dark/40 backdrop-blur-[2px] p-6 sm:p-8 lg:p-10 rounded-lg border border-white/10"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                {slide.title}
              </h1>
              <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="mt-8 sm:mt-10">
                <CTAButtons variant="dark" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go('prev')}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={() => go('next')}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {total > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </section>
  )
}
