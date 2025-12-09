'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import BentoCard from '../BentoCard'

interface ProjectCardProps {
  title: string
  category: 'shopify' | 'engineering' | 'design'
  span?: '1x2' | '2x2'
  gradient?: string
}

const categoryColors = {
  shopify: 'var(--accent-main)',
  engineering: 'var(--accent-playful)',
  design: '#ec4899',
}

const categoryGradients = {
  shopify: 'from-blue-500/10 to-cyan-500/10',
  engineering: 'from-purple-500/10 to-pink-500/10',
  design: 'from-pink-500/10 to-rose-500/10',
}

export default function ProjectCard({
  title,
  category,
  span = '1x2',
  gradient,
}: ProjectCardProps) {
  const bgGradient = gradient || categoryGradients[category]
  const categoryColor = categoryColors[category]

  return (
    <BentoCard
      span={span}
      className={`bg-gradient-to-br ${bgGradient} cursor-pointer group relative overflow-hidden`}
    >
      {/* Animated overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />

      <div className="h-full flex flex-col justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block text-xs px-2 py-1 rounded-full font-medium"
            style={{ backgroundColor: categoryColor }}
            whileHover={{ scale: 1.05 }}
          >
            {category.toUpperCase()}
          </motion.span>
          
          <motion.h3
            className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mt-4"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {title}
          </motion.h3>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-200 transition-colors"
          whileHover={{ x: 5 }}
        >
          View Case Study
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </motion.div>
      </div>
    </BentoCard>
  )
}
