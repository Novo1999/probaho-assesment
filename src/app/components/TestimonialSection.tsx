'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { TestimonialsData } from '@/lib/types'
import { Quote, Star } from 'lucide-react'

interface TestimonialsSectionProps {
  data: TestimonialsData
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{data.title}</h3>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 mb-6">
              {data.items.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-peach-300 mb-4" />
                    <p className="text-gray-600 mb-4 italic leading-relaxed">{testimonial.text}</p>
                    <p className="font-semibold text-gray-900 mt-auto">- {testimonial.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-6 xl:-left-12 border-peach-200 hover:bg-peach-50" />
            <CarouselNext className="hidden sm:flex -right-6 xl:-right-12 border-peach-200 hover:bg-peach-50" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
