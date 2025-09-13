import { Metadata } from 'next'
import { Suspense } from 'react'

import BlogSection from '@/app/components/BlogSection'
import BooksSection from '@/app/components/BookSection'
import ContactSection from '@/app/components/ContactSection'
import Header from '@/app/components/Header'
import HeroSection from '@/app/components/HeroSection'
import LoadingSkeleton from '@/app/components/LoadingSkeleton'
import ServicesSection from '@/app/components/ServicesSection'
import TestimonialsSection from '@/app/components/TestimonialSection'
import { getPageData } from '@/lib/api'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Inicio - Sana tu Corazón, Transforma tu Vida',
    description: 'Descubre cómo romper patrones tóxicos y crear relaciones sanas con Aura María Medina de Wit, psicoterapeuta con 35+ años de experiencia especializada en codependencia.',
    openGraph: {
      title: 'Aura María Medina de Wit - Sana tu Corazón, Transforma tu Vida',
      description: 'Descubre cómo romper patrones tóxicos y crear relaciones sanas con nuestra psicoterapeuta especializada.',
      url: 'https://auramedinadewitpsicoterapia.com',
      images: ['/og-home.jpg'],
    },
  }
}

type PageProps = {
  params: Promise<{ locale?: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function HomePage({ params }: PageProps) {
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
      <article>
        <HeroSection data={data.hero} />

        <section id="libros" aria-labelledby="books-heading">
          <BooksSection data={data.books} />
        </section>

        <section id="servicios" aria-labelledby="services-heading">
          <ServicesSection data={data.services} />
        </section>

        <section id="blogs" aria-labelledby="blogs-heading">
          <BlogSection />
        </section>

        <section id="testimonios" aria-labelledby="testimonials-heading">
          <TestimonialsSection data={data.testimonials} />
        </section>

        <section id="contacto" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </article>
    </>
  )
}
