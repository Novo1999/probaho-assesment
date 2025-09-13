import Footer from '@/app/components/Footer'
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
      title: 'Probaho Assessment',
      description: 'Assessment project for Probaho',
    },
    es: {
      title: 'Evaluación de Probaho',
      description: 'Proyecto de evaluación para Probaho',
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
        </NextIntlClientProvider>
      </div>
    </div>
  )
}
