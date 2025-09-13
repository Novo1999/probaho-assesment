// File: components/HeroSection.tsx
import { HeroData } from '@/lib/types'
import { Calendar, Download, Heart } from 'lucide-react'
import BookingButton from './BookingButton'
import LeadMagnetButton from './LeadMagnetButton'

interface HeroSectionProps {
  data: HeroData
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">{data.title}</h2>
            <p className="text-xl text-peach-700 mb-6 font-medium">{data.subtitle}</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{data.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookingButton text={data.ctaBook} />
              <LeadMagnetButton text={data.ctaFree} />
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-peach-100 to-sage-100 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Heart className="w-16 h-16 text-peach-600" />
                </div>
                <p className="text-gray-600 text-lg">35+ años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
