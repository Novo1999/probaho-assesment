import LeadMagnetButton from '@/app/components/LeadMagnetButton'
import { BooksData } from '@/lib/types'
import { BookOpen, ChevronRight, Star } from 'lucide-react'

interface BooksSectionProps {
  data: BooksData
}

export default function BooksSection({ data }: BooksSectionProps) {
  return (
    <section id="books" className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h3>
          <p className="text-xl text-gray-600">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {data.items.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {book.isLatest && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-peach-200 text-peach-700 mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  {data.latest}
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-48 h-72 bg-gradient-to-br from-peach-100 to-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-16 h-16 text-peach-600" />
                </div>

                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{book.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{book.description}</p>

                  <div className="space-y-3">
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {data.buyAmazon}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </a>

                    <LeadMagnetButton text={data.preview} variant="outline" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
