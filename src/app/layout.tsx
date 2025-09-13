import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://probaho-assesment-novodip.vercel.app'),
  title: {
    default: 'Aura María Medina de Wit - Psicoterapeuta Especialista en Codependencia',
    template: '%s | Aura María Medina de Wit - Psicoterapia',
  },
  description: 'Psicoterapeuta especializada en codependencia y heridas de la infancia con 35+ años de experiencia. Autora de 4 libros bestsellers. Terapia online y presencial.',
  keywords: [
    'psicoterapeuta',
    'codependencia',
    'heridas de infancia',
    'terapia online',
    'sanación emocional',
    'Aura Medina',
    'psicoterapia transpersonal',
    'autoestima',
    'relaciones tóxicas',
    'amor propio',
    'terapia de pareja',
    'trauma infantil',
  ],
  authors: [{ name: 'Aura María Medina de Wit' }],
  creator: 'Aura María Medina de Wit',
  publisher: 'Aura María Medina de Wit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://probaho-assesment-novodip.vercel.app',
    siteName: 'Aura María Medina de Wit - Psicoterapia',
    title: 'Aura María Medina de Wit - Psicoterapeuta Especialista en Codependencia',
    description: 'Psicoterapeuta especializada en codependencia y heridas de la infancia con 35+ años de experiencia. Autora de 4 libros bestsellers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aura María Medina de Wit - Psicoterapeuta',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AuraMedinaW',
    creator: '@AuraMedinaW',
    title: 'Aura María Medina de Wit - Psicoterapeuta Especialista en Codependencia',
    description: 'Psicoterapeuta especializada en codependencia y heridas de la infancia con 35+ años de experiencia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  alternates: {
    canonical: 'https://probaho-assesment-novodip.vercel.app',
    languages: {
      'es-ES': 'https://probaho-assesment-novodip.vercel.app',
      'en-US': 'https://probaho-assesment-novodip.vercel.app/en',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fbb6ce" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aura Medina Psicoterapia" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
