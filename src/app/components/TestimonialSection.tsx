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
          <h3 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.items.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-peach-300 mb-4" />
              <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
