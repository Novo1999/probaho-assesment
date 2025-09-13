'use client'
import { Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const t = useTranslations('navigation')

  const currentLocale = params.locale as string

  const handleLanguageChange = (locale: string) => {
    const currentHash = window.location.hash
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '')
    router.push(`/${locale}${pathWithoutLocale}${currentHash}`)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-peach-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-peach-200 to-sage-200 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </div>
            <h1 className="text-xl font-bold text-black">Aura María Medina</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-black hover:text-peach-600 transition-colors">
              {t('services')}
            </Link>
            <Link href="#books" className="text-black hover:text-peach-600 transition-colors">
              {t('books')}
            </Link>
            <Link href="#testimonials" className="text-black hover:text-peach-600 transition-colors">
              {t('testimonials')}
            </Link>
            <Link href="#blog" className="text-black hover:text-peach-600 transition-colors">
              {t('blog')}
            </Link>
            <Link href="#contact" className="text-black hover:text-peach-600 transition-colors">
              {t('contact')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <select value={currentLocale} onChange={(e) => handleLanguageChange(e.target.value)} className="border border-peach-200 rounded-lg px-3 py-1 text-sm bg-white text-black">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}
