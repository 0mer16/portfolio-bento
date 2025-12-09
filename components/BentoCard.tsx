import { ReactNode, CSSProperties } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  span?: '1x1' | '2x1' | '1x2' | '2x2' | '3x1' | '1x3' | '2x3' | '3x2' | '4x2'
  style?: CSSProperties
}

const spanClasses = {
  '1x1': 'col-span-1 row-span-1',
  '2x1': 'col-span-1 md:col-span-2 row-span-1',
  '1x2': 'col-span-1 row-span-2',
  '2x2': 'col-span-1 md:col-span-2 row-span-2',
  '3x1': 'col-span-1 md:col-span-2 lg:col-span-3 row-span-1',
  '1x3': 'col-span-1 row-span-3',
  '2x3': 'col-span-1 md:col-span-2 row-span-3',
  '3x2': 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2',
  '4x2': 'col-span-1 md:col-span-2 lg:col-span-4 row-span-2',
}

export default function BentoCard({ children, className = '', span = '1x1', style }: BentoCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        bg-[var(--surface)] backdrop-blur-sm
        border border-white/10
        p-6
        transition-all duration-300
        hover:border-white/20 hover:shadow-lg hover:shadow-accent-main/10
        ${spanClasses[span]}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  )
}
