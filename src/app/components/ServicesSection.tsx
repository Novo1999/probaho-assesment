import { ServicesData } from '@/lib/types'
import { Heart, Users } from 'lucide-react'
import BookingButton from './BookingButton'

interface ServicesSectionProps {
  data: ServicesData
}

export default function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-peach-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-peach-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{data.therapy.title}</h4>
            <p className="text-gray-600 mb-6">{data.therapy.description}</p>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">{data.therapy.duration}</span>
              <span className="font-semibold text-peach-700">{data.therapy.price}</span>
            </div>
            <BookingButton text="Reservar Sesión" />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-sage-600" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{data.workshops.title}</h4>
            <p className="text-gray-600 mb-6">{data.workshops.description}</p>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">{data.workshops.duration}</span>
              <span className="font-semibold text-sage-700">{data.workshops.price}</span>
            </div>
            <button className="w-full border-2 border-sage-200 text-sage-700 py-3 rounded-lg font-semibold hover:bg-sage-100 transition-all">Más Información</button>
          </div>
        </div>
      </div>
    </section>
  )
}
