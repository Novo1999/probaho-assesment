import { routing } from '@/i18n/routing'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang="es">
      <body className={inter.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
