'use client'
import LeadMagnetModal from '@/app/components/LeadMagnetModal'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Book, BooksData } from '@/lib/types'
import { cn } from '@/lib/utils'
import { BookOpen, Download, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface BooksSectionProps {
  data: BooksData
}

export default function BooksSection({ data }: BooksSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState<Book | null>(null)

  return (
    <section id="books" className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl  font-bold text-gray-900 mb-4">{data.title}</h3>
          <p className="text-lg sm:text-xl text-gray-600">{data.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12">
          {data.items.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
              {book.isLatest ? (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-peach-200 text-peach-700 mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  {data.latest}
                </div>
              ) : (
                <div className="py-1 mb-4"></div>
              )}

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6">
                <div className="mx-auto sm:mx-0 lg:mx-auto xl:mx-0 w-32 h-48 sm:w-40 sm:h-56 lg:w-48 lg:h-72 xl:w-40 xl:h-56 flex-shrink-0">
                  {book.imageUrl ? (
                    <Image width={500} height={500} src={book.imageUrl} alt={book.title} className="w-full h-full object-cover rounded-xl shadow-md" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-peach-100 to-sage-100 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-peach-600" />
                    </div>
                  )}
                </div>

                <div className="flex-1 text-center sm:text-left lg:text-center xl:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">{book.title}</h4>
                  <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">{book.description}</p>

                  <div className="flex flex-wrap flex-col *:w-full sm:flex-row sm:*:w-fit lg:justify-center xl:justify-start items-start gap-4 xl:gap-4">
                    <Link
                      href={{ pathname: book.amazonUrl }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit bg-gradient-to-r from-peach-200 to-rose-200 text-rose-800 !px-4 py-3 lg:py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 whitespace-nowrap flex items-center justify-center h-full"
                    >
                      {data.buyAmazon}
                    </Link>

                    <Dialog open={!!isModalOpen} onOpenChange={() => setIsModalOpen(isModalOpen ? null : book)}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-fit bg-white text-rose-800 !px-4 py-3 lg:py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 whitespace-nowrap flex items-center justify-center h-full'
                          )}
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md min-h-[50vh]">{isModalOpen && <LeadMagnetModal onClose={() => setIsModalOpen(null)} book={isModalOpen} />}</DialogContent>
                    </Dialog>
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
