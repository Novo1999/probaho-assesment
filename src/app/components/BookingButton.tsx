'use client'

import BookingModal from '@/app/components/BookingModal'
import { Calendar } from 'lucide-react'
import { useState } from 'react'

interface BookingButtonProps {
  text: string
}

export default function BookingButton({ text }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        <Calendar className="w-5 h-5 mr-2" />
        {text}
      </button>

      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
