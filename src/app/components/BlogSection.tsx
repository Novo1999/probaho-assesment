'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  imageUrl?: string
}

export default function BlogSection() {
  const t = useTranslations('blog')
  const blogPosts = t.raw('posts') as BlogPost[]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getCategoryTranslation = (category: string) => {
    return t(`categories.${category}`)
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-bold text-gray-900 mb-4 text-3xl sm:text-4xl">{t('title')}</h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-gradient-to-br from-peach-100 to-sage-100 flex items-center justify-center">
                {post.imageUrl ? (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <span className="text-sm">Blog Image</span>
                  </div>
                ) : (
                  <div className="text-gray-400">
                    <Calendar className="w-16 h-16" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center flex-wrap gap-2 justify-between mb-3">
                  <span className="inline-block bg-peach-100 text-peach-700 px-3 py-1 rounded-full text-sm font-medium">{getCategoryTranslation(post.category)}</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-peach-700 transition-colors">{post.title}</h4>

                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center text-peach-600 group-hover:text-peach-700 transition-colors">
                    <span className="text-sm font-medium mr-2">{t('readMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button className="inline-flex items-center px-8 py-3 bg-peach-200 font-semibold rounded-lg hover:bg-peach-700 transition-colors bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 hover:from-peach-300 hover:to-rose-300 h-full">
            {t('viewAll')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
