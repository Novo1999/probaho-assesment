import BookingButton from '@/app/components/BookingButton'
import LeadMagnetButton from '@/app/components/LeadMagnetButton'
import { HeroData } from '@/lib/types'
import Image from 'next/image'

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
              <LeadMagnetButton className='sm:py-3.5' text={data.ctaFree} />
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 overflow-hidden bg-gradient-to-br from-peach-100 to-sage-100 rounded-3xl flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image src="/aura.png" width={1000} height={1000} alt="Aura Medina" className="h-full w-full object-cover object-top" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
