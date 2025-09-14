'use client'

import BookingModal from '@/app/components/BookingModal'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Calendar } from 'lucide-react'
import { useState } from 'react'

interface BookingButtonProps {
  text: string
}

export default function BookingButton({ text }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 !px-10 py-4 rounded-xl font-semibold text-sm sm:text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:from-peach-300 hover:to-rose-300 h-full"
        >
          <Calendar className="w-5 h-5 mr-2" />
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <BookingModal onClose={() => setIsModalOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
