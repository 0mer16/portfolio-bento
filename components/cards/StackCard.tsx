'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Database } from 'lucide-react'
import BentoCard from '../BentoCard'

const techIcons = [
  { Icon: Code2, label: 'React', color: 'var(--accent-main)' },
  { Icon: Zap, label: 'Next.js', color: 'var(--accent-playful)' },
  { Icon: Database, label: 'Node.js', color: 'var(--accent-main)' },
  { Icon: Palette, label: 'Shopify', color: 'var(--accent-playful)' },
]

export default function StackCard() {
  return (
    <BentoCard span="1x1" className="flex items-center justify-center relative overflow-hidden group">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div className="grid grid-cols-2 gap-3">
          {techIcons.map((tech, index) => {
            const IconComponent = tech.Icon
            return (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                }}
                className="w-8 h-8 flex items-center justify-center"
              >
                <IconComponent
                  size={24}
                  style={{ color: tech.color }}
                  strokeWidth={2}
                />
              </motion.div>
            )
          })}
        </div>
      </motion.div>
      
      <motion.p
        className="absolute bottom-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        Tech Stack
      </motion.p>
    </BentoCard>
  )
}
