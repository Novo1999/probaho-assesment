'use client'

import { Button } from '@/components/ui/button'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { BookOpen } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

interface Book {
  id: number
  title: string
  description: string
  amazonUrl: string
  isLatest: boolean
  imageUrl?: string
}

interface LeadMagnetModalProps {
  onClose: () => void
  book?: Book
}

export default function LeadMagnetModal({ onClose, book }: LeadMagnetModalProps) {
  const t = useTranslations('leadMagnet')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleDownload = () => {
    if (!email.trim()) {
      setError(t('emailRequired'))
      return
    }

    if (!validateEmail(email)) {
      setError(t('emailInvalid'))
      return
    }

    // Handle download logic here
    console.log('Download initiated for:', email, book ? `Book: ${book.title}` : 'General preview')

    toast.success(t('success'), {
      description: book ? `${book.title} - ${t('successMessage')}` : t('successMessage'),
    })

    onClose()
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-900">{book ? `${t('title')} - ${book.title}` : t('title')}</DialogTitle>
      </DialogHeader>

      <div className="py-4">
        <div className="text-center mb-6">
          {book && book.imageUrl ? (
            <div className="w-20 h-28 mx-auto mb-4 rounded-lg overflow-hidden shadow-md">
              <Image width={500} height={500} src={book.imageUrl} alt={book.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-20 h-20 bg-gradient-to-br from-peach-100 to-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-peach-600" />
            </div>
          )}
          <h5 className="text-xl font-semibold text-gray-900 mb-2">{book ? `Vista Previa: ${book.title}` : t('subtitle')}</h5>
          <p className="text-gray-600">{book ? `Obtén una vista previa de "${book.title}" y comienza tu viaje de sanación.` : t('description')}</p>
        </div>

        <div className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              className={`border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400 ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <Button onClick={handleDownload} className="w-full bg-gradient-to-r from-peach-200 to-rose-200 text-rose-800 hover:from-peach-300 hover:to-rose-300 hover:shadow-lg transition-all" size="lg">
            {t('download')}
          </Button>

          <p className="text-xs text-gray-500 text-center">{t('disclaimer')}</p>
        </div>
      </div>
    </>
  )
}
