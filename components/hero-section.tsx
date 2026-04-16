'use client'

import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2074&auto=format&fit=crop')`,
        }}
      />

      {/* Thai Pattern Overlay */}
      <div className="absolute inset-0 thai-pattern opacity-30" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/50 to-brown-dark/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative Top Element */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Temple Name */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-4 leading-tight text-balance">
          วัดสระเกศราชวรมหาวิหาร
        </h1>

        {/* English Name */}
        <p className="text-gold text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-6">
          Wat Saket Ratcha Wora Maha Wihan
        </p>

        {/* Tagline */}
        <p className="text-cream/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed text-pretty">
          พระอารามหลวงชั้นโท ชนิดราชวรมหาวิหาร
        </p>
        <p className="text-cream/80 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed text-pretty">
          สถานที่ศักดิ์สิทธิ์แห่งศรัทธา ภูเขาทองอันงดงาม ตั้งตระหง่านใจกลางกรุงเทพมหานคร
        </p>

        {/* Decorative Bottom Element */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-2xl">๛</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <a
          href="#overview"
          className="inline-flex flex-col items-center gap-2 text-cream/70 hover:text-gold transition-colors group"
        >
          <span className="text-sm">เลื่อนลง</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
