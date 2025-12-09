'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check } from 'lucide-react'
import BentoCard from '../BentoCard'

export default function ContactCard() {
  const [copied, setCopied] = useState(false)
  const email = 'your.email@example.com' // TODO: Connect to Sanity profile

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <BentoCard
      span="2x1"
      className="flex items-center justify-center cursor-pointer hover:bg-[var(--accent-main)]/10 transition-colors relative overflow-hidden group"
      onClick={handleCopy}
    >
      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 bg-[var(--accent-main)]"
        initial={{ scale: 0, opacity: 0.5 }}
        animate={copied ? { scale: 2, opacity: 0 } : { scale: 0, opacity: 0.5 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="text-center relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="text-3xl mb-2"
          animate={copied ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {copied ? <Check size={32} className="text-green-500 mx-auto" /> : <Mail size={32} className="mx-auto" />}
        </motion.div>
        
        <motion.p
          className="font-medium text-lg"
          animate={copied ? { scale: [1, 1.1, 1] } : {}}
        >
          {copied ? 'Email Copied!' : 'Get in Touch'}
        </motion.p>
        
        <motion.p
          className="text-sm text-gray-400 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {copied ? '✓ Ready to paste' : 'Click to copy email'}
        </motion.p>
      </motion.div>
    </BentoCard>
  )
}
