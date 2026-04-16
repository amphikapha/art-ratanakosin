interface ThaiDividerProps {
  className?: string
}

export function ThaiDivider({ className = '' }: ThaiDividerProps) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="flex items-center gap-4 max-w-md w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/50 to-gold" />
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="currentColor">
            <path d="M12 2L9 9H2l6 4.5L5.5 22 12 17l6.5 5-2.5-8.5L22 9h-7L12 2z" />
          </svg>
          <span className="text-gold text-xl font-serif">๛</span>
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="currentColor">
            <path d="M12 2L9 9H2l6 4.5L5.5 22 12 17l6.5 5-2.5-8.5L22 9h-7L12 2z" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/50 to-gold" />
      </div>
    </div>
  )
}
