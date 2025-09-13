'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { toast } from 'sonner'

interface BookingModalProps {
  onClose: () => void
}

export default function BookingModal({ onClose }: BookingModalProps) {
  const t = useTranslations('booking')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!name.trim()) {
      newErrors.name = t('form.nameRequired')
    }

    if (!email.trim()) {
      newErrors.email = t('form.emailRequired')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t('form.emailInvalid')
    }

    if (!phone.trim()) {
      newErrors.phone = t('form.phoneRequired')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleConfirm = () => {
    if (!validateForm()) {
      return
    }

    // Handle booking confirmation logic here
    console.log('Booking confirmed:', { selectedDate, selectedTime, name, email, phone, message })

    toast.success(t('success'), {
      description: t('successMessage'),
    })

    onClose()
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-900">{t('title')}</DialogTitle>
      </DialogHeader>

      <div className="space-y-6 py-4">
        <div>
          <h5 className="font-semibold text-gray-700 mb-3">{t('selectDate')}</h5>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
            className="rounded-md border w-full"
          />
        </div>

        {selectedDate && (
          <div>
            <h5 className="font-semibold text-gray-700 mb-3">{t('selectTime')}</h5>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className={`text-sm ${selectedTime === time ? 'bg-rose-200 text-rose-800 hover:bg-rose-300' : 'hover:bg-rose-50'}`}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}

        {selectedDate && selectedTime && (
          <div className="space-y-4">
            <div className="p-4 bg-rose-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {t('selectedDate')}: <span className="font-semibold">{selectedDate.toLocaleDateString()}</span>
              </p>
              <p className="text-sm text-gray-600">
                {t('selectedTime')}: <span className="font-semibold">{selectedTime}</span>
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <Input
                  type="text"
                  placeholder={t('form.name')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder={t('form.email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder={t('form.phone')}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400 ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <Textarea
                placeholder={t('form.message')}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400"
              />
            </div>

            <Button
              onClick={handleConfirm}
              className="w-full bg-gradient-to-r from-peach-200 to-rose-200 text-rose-800 hover:from-peach-300 hover:to-rose-300 hover:shadow-lg transition-all"
              size="lg"
            >
              {t('confirm')}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
