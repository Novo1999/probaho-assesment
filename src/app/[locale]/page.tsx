import BooksSection from '@/app/components/BookSection'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import HeroSection from '@/app/components/HeroSection'
import ServicesSection from '@/app/components/ServicesSection'
import TestimonialsSection from '@/app/components/TestimonialSection'
import { getPageData } from '@/lib/api'
import { getTranslations } from 'next-intl/server'
import { Suspense } from 'react'

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // const t = await getTranslations('home')
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
