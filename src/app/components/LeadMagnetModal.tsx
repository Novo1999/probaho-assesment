'use client'

import { BookOpen } from 'lucide-react'

interface LeadMagnetModalProps {
  onClose: () => void
}

export default function LeadMagnetModal({ onClose }: LeadMagnetModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold text-gray-900">Descarga Gratuita</h4>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-peach-100 to-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-10 h-10 text-peach-600" />
          </div>
          <h5 className="text-xl font-semibold text-gray-900 mb-2">Primer Capítulo: Sanando la Herida Materna</h5>
          <p className="text-gray-600">Comienza tu viaje de sanación con este poderoso capítulo introductorio.</p>
        </div>

        <div className="space-y-4">
          <input type="email" placeholder="Tu correo electrónico" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peach-200 focus:border-peach-400" />

          <button className="w-full bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">Descargar Capítulo</button>

          <p className="text-xs text-gray-500 text-center">Al descargar, aceptas recibir emails ocasionales con contenido de valor. Puedes cancelar en cualquier momento.</p>
        </div>
      </div>
    </div>
  )
}
