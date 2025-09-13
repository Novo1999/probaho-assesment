import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  imageUrl?: string
}

const dummyBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Healing from Codependency: A Journey to Self-Discovery',
    excerpt: 'Understanding the patterns of codependency and how to break free from unhealthy relationship dynamics.',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Codependency',
    imageUrl: '/blog/codependency.jpg',
  },
  {
    id: 2,
    title: 'Inner Child Work: Reconnecting with Your Authentic Self',
    excerpt: 'Exploring how childhood wounds shape our adult relationships and the path to healing through inner child work.',
    date: '2024-03-10',
    readTime: '6 min read',
    category: 'Inner Child',
    imageUrl: '/blog/inner-child.jpg',
  },
  {
    id: 3,
    title: 'The Power of Transpersonal Therapy in Modern Healing',
    excerpt: 'Integrating spiritual and psychological approaches for deeper transformation and personal growth.',
    date: '2024-03-05',
    readTime: '10 min read',
    category: 'Therapy',
    imageUrl: '/blog/transpersonal.jpg',
  },
  {
    id: 4,
    title: 'Building Healthy Boundaries in Relationships',
    excerpt: 'Learn practical strategies for setting and maintaining boundaries that support your emotional well-being.',
    date: '2024-02-28',
    readTime: '7 min read',
    category: 'Relationships',
    imageUrl: '/blog/boundaries.jpg',
  },
  {
    id: 5,
    title: 'Mindfulness Practices for Emotional Regulation',
    excerpt: 'Simple yet powerful mindfulness techniques to help manage overwhelming emotions and find inner peace.',
    date: '2024-02-20',
    readTime: '5 min read',
    category: 'Mindfulness',
    imageUrl: '/blog/mindfulness.jpg',
  },
  {
    id: 6,
    title: 'Understanding Attachment Styles and Their Impact',
    excerpt: 'How your early attachment experiences influence your adult relationships and strategies for healing.',
    date: '2024-02-15',
    readTime: '9 min read',
    category: 'Psychology',
    imageUrl: '/blog/attachment.jpg',
  },
]

export default function BlogSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-sage-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights & Thoughts</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore articles on healing, personal growth, and therapeutic insights to support your journey toward emotional well-being.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dummyBlogPosts.map((post) => (
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
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-peach-100 text-peach-700 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
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
                    <span className="text-sm font-medium mr-2">Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button className="inline-flex items-center px-8 py-3 bg-peach-200 font-semibold rounded-lg hover:bg-peach-700 transition-colors bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 hover:from-peach-300 hover:to-rose-300 h-full">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
