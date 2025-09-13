'use client'

import { Heart } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es'

  const handleLanguageChange = (locale: string) => {
    if (locale === 'en') {
      router.push('/en')
    } else {
      router.push('/es')
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-peach-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-peach-200 to-sage-200 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-peach-700" />
            </div>
            <h1 className="text-xl font-bold text-black">Aura María Medina</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-black hover:text-peach-600 transition-colors">
              Servicios
            </a>
            <a href="#books" className="text-black hover:text-peach-600 transition-colors">
              Libros
            </a>
            <a href="#testimonials" className="text-black hover:text-peach-600 transition-colors">
              Testimonios
            </a>
            <a href="#blog" className="text-black hover:text-peach-600 transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-black hover:text-peach-600 transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <select
              value={currentLocale}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="border border-peach-200 rounded-lg px-3 py-1 text-sm bg-white text-black"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}
