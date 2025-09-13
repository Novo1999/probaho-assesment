import { Suspense } from 'react'

import BlogSection from '@/app/components/BlogSection'
import BooksSection from '@/app/components/BookSection'
import Header from '@/app/components/Header'
import HeroSection from '@/app/components/HeroSection'
import LoadingSkeleton from '@/app/components/LoadingSkeleton'
import ServicesSection from '@/app/components/ServicesSection'
import TestimonialsSection from '@/app/components/TestimonialSection'
import { getPageData } from '@/lib/api'

type PageParams = {
  params: Promise<{
    locale: string
  }>
}

export default async function HomePage({ params }: PageParams) {
  const { locale } = await params
  const safeLocale = locale || 'es'

  return (
    <main className="min-h-screen bg-gradient-to-b from-peach-50 to-white">
      <Header />

      <Suspense fallback={<LoadingSkeleton />}>
        <PageContent locale={safeLocale} />
      </Suspense>
    </main>
  )
}

async function PageContent({ locale }: { locale: string }) {
  const data = await getPageData(locale)

  return (
    <>
      <HeroSection data={data.hero} />
      <BooksSection data={data.books} />
      <ServicesSection data={data.services} />
      <BlogSection />
      <TestimonialsSection data={data.testimonials} />
    </>
  )
}
