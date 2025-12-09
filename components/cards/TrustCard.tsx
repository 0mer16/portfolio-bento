'use client'

import { motion } from 'framer-motion'
import { Star, Trophy, Briefcase } from 'lucide-react'
import BentoCard from '../BentoCard'

const stats = [
  { value: '100%', label: 'Job Success', Icon: Star, color: 'var(--accent-main)' },
  { value: '50+', label: 'Projects', Icon: Briefcase, color: 'var(--accent-playful)' },
  { value: 'Top Rated', label: 'Upwork', Icon: Trophy, color: '#10b981' },
]

export default function TrustCard() {
  return (
    <BentoCard span="2x1" className="flex items-center justify-between gap-4 overflow-hidden">
      {stats.map((stat, index) => {
        const IconComponent = stat.Icon
        return (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              <IconComponent
                size={28}
                style={{ color: stat.color }}
                strokeWidth={2}
              />
            </motion.div>
            
            <motion.div
              className="text-2xl md:text-3xl font-bold mt-2"
              style={{ color: stat.color }}
            >
              {stat.value}
            </motion.div>
            
            <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
          </motion.div>
        )
      })}
    </BentoCard>
  )
}
