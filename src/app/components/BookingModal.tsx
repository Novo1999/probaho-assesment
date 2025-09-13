// File: components/BookingModal.tsx
'use client'

import { useState } from 'react'

interface BookingModalProps {
  onClose: () => void
}

export default function BookingModal({ onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

  const CalendarComponent = () => {
    const today = new Date()
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay()

    const days = []

    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today.getDate()
      const isPast = day < today.getDate()
      const isSelected = selectedDate === day

      days.push(
        <button
          key={day}
          onClick={() => !isPast && setSelectedDate(day)}
          disabled={isPast}
          className={`h-10 w-10 rounded-lg text-sm font-medium transition-all ${
            isPast ? 'text-gray-300 cursor-not-allowed' : isSelected ? 'bg-rose-200 text-rose-800' : isToday ? 'bg-sage-100 text-sage-800' : 'hover:bg-peach-100 text-gray-700'
          }`}
        >
          {day}
        </button>
      )
    }

    return (
      <div className="grid grid-cols-7 gap-2">
        {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map((day) => (
          <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        {days}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold text-gray-900">Reserva tu Sesión</h4>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Selecciona una fecha</h5>
            <CalendarComponent />
          </div>

          {selectedDate && (
            <div>
              <h5 className="font-semibold text-gray-700 mb-3">Selecciona una hora</h5>
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${selectedTime === time ? 'bg-peach-200 text-peach-700' : 'bg-gray-100 text-gray-700 hover:bg-peach-100'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <div className="space-y-4">
              <div className="p-4 bg-peach-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Fecha seleccionada: <span className="font-semibold">{selectedDate} de mes</span>
                </p>
                <p className="text-sm text-gray-600">
                  Hora: <span className="font-semibold">{selectedTime}</span>
                </p>
              </div>

              <div className="space-y-3">
                <input type="text" placeholder="Tu nombre completo" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peach-200 focus:border-peach-400" />
                <input type="email" placeholder="Tu correo electrónico" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peach-200 focus:border-peach-400" />
                <input type="tel" placeholder="Tu teléfono" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peach-200 focus:border-peach-400" />
                <textarea
                  placeholder="Cuéntame brevemente sobre lo que te gustaría trabajar..."
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peach-200 focus:border-peach-400"
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">Confirmar Reserva</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
