export interface Book {
  id: number
  title: string
  description: string
  amazonUrl: string
  isLatest: boolean
  imageUrl?: string
}

export interface Testimonial {
  name: string
  text: string
  rating: number
}

export interface Service {
  title: string
  description: string
  duration: string
  price: string
}

export interface HeroData {
  title: string
  subtitle: string
  description: string
  ctaBook: string
  ctaFree: string
}

export interface BooksData {
  title: string
  subtitle: string
  latest: string
  buyAmazon: string
  preview: string
  items: Book[]
}

export interface ServicesData {
  title: string
  therapy: Service
  workshops: Service
}

export interface TestimonialsData {
  title: string
  items: Testimonial[]
}

export interface FooterData {
  description: string
  contact: {
    email: string
    phone: string
    location: string
  }
  social: {
    instagram: string
    facebook: string
    twitter: string
  }
}
