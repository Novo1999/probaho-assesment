'use client'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'
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

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="#services" className="text-black hover:text-peach-600 transition-colors px-3 py-2 rounded-md hover:bg-peach-50">
                  {t('services')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#books" className="text-black hover:text-peach-600 transition-colors px-3 py-2 rounded-md hover:bg-peach-50">
                  {t('books')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#testimonials" className="text-black hover:text-peach-600 transition-colors px-3 py-2 rounded-md hover:bg-peach-50">
                  {t('testimonials')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#blog" className="text-black hover:text-peach-600 transition-colors px-3 py-2 rounded-md hover:bg-peach-50">
                  {t('blog')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="text-black hover:text-peach-600 transition-colors px-3 py-2 rounded-md hover:bg-peach-50">
                  {t('contact')}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Select value={currentLocale} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[70px] border-peach-200 bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">ES</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  )
}
