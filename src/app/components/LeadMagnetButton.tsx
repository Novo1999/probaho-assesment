'use client'

import LeadMagnetModal from '@/app/components/LeadMagnetModal'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import { useState } from 'react'

interface Book {
  id: number
  title: string
  description: string
  amazonUrl: string
  isLatest: boolean
  imageUrl?: string
}

interface LeadMagnetButtonProps {
  text: string
  variant?: 'default' | 'outline'
  book?: Book
  className?: string
}

export default function LeadMagnetButton({ text, className, book }: LeadMagnetButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'border-2 border-sage-200 text-sage-700 hover:bg-sage-100 !px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center h-full hover:shadow-lg',
            className
          )}
        >
          <Download className="w-5 h-5 mr-2" />
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <LeadMagnetModal onClose={() => setIsModalOpen(false)} book={book} />
      </DialogContent>
    </Dialog>
  )
}
