import Footer from '@/app/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { routing } from '@/i18n/routing'
import { getPageData } from '@/lib/api'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metadataByLocale = {
    en: {
      title: 'Aura María Medina de Wit - Psychotherapy and Healing',
      description: 'Specialist in codependency and childhood wounds. 35+ years of experience in transpersonal therapy.',
      keywords: 'psychotherapy, codependency, childhood wounds, therapy, healing, Aura Medina',
    },
    es: {
      title: 'Aura María Medina de Wit - Psicoterapia y Sanación',
      description: 'Especialista en codependencia y heridas de la infancia. 35+ años de experiencia en terapia transpersonal.',
      keywords: 'psicoterapia, codependencia, heridas de infancia, terapia, sanación, Aura Medina',
    },
  }

  const metadata = metadataByLocale[locale as keyof typeof metadataByLocale] || metadataByLocale.en

  return {
    title: metadata.title,
    description: metadata.description,
    other: {
      locale,
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  const data = await getPageData(locale)
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <div lang={locale}>
      <div>
        <NextIntlClientProvider>
          {children}
          <Footer data={data.footer} />
          <Toaster />
        </NextIntlClientProvider>
      </div>
    </div>
  )
}
