import BooksSection from '@/components/BooksSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { getPageData } from '@/lib/api'
import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('home')
  const data = await getPageData(locale)

  return (
    <main className="min-h-screen bg-gradient-to-b from-peach-50 to-white">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection data={data.hero} />
        <BooksSection data={data.books} />
        <ServicesSection data={data.services} />
        <TestimonialsSection data={data.testimonials} />
      </Suspense>

      <Footer data={data.footer} />
    </main>
  )
}
