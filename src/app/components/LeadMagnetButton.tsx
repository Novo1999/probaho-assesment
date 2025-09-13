'use client'

import LeadMagnetModal from '@/app/components/LeadMagnetModal'
import { Download } from 'lucide-react'
import { useState } from 'react'

interface LeadMagnetButtonProps {
  text: string
  variant?: 'default' | 'outline'
}

export default function LeadMagnetButton({ text, variant = 'default' }: LeadMagnetButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const baseClasses = 'px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center'

  const variantClasses = variant === 'outline' ? 'border-2 border-sage-200 text-sage-700 hover:bg-sage-100' : 'border-2 border-sage-200 text-sage-700 hover:bg-sage-100'

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className={`${baseClasses} ${variantClasses}`}>
        <Download className="w-5 h-5 mr-2" />
        {text}
      </button>

      {isModalOpen && <LeadMagnetModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
