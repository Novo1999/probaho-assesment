import { FooterData } from '@/lib/types'
import { Heart, Mail, MapPin, Phone } from 'lucide-react'

interface FooterProps {
  data: FooterData
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-peach-200 to-sage-200 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-peach-700" />
              </div>
              <h4 className="text-xl font-bold">Aura María Medina</h4>
            </div>
            <p className="text-gray-300">{data.description}</p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">{data.contactTitle}</h5>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {data.contact.email}
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {data.contact.phone}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {data.contact.location}
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-4">{data.socialTitle}</h5>
            <div className="space-y-2 text-gray-300">
              <a href={data.social.instagram} className="block hover:text-peach-300">
                Instagram
              </a>
              <a href={data.social.facebook} className="block hover:text-peach-300">
                Facebook
              </a>
              <a href={data.social.twitter} className="block hover:text-peach-300">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
