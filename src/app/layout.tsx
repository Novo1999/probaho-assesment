// File: app/layout.tsx
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aura María Medina de Wit - Psicoterapia y Sanación',
  description: 'Especialista en codependencia y heridas de la infancia. 35+ años de experiencia en terapia transpersonal.',
  keywords: 'psicoterapia, codependencia, heridas de infancia, terapia, sanación, Aura Medina',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
