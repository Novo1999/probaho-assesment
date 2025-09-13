import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your journey toward healing and personal growth? I'm here to support you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Your first name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Your last name"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can I help you?"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me a bit about what you're looking for..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 font-semibold rounded-lg hover:from-peach-300 hover:to-rose-300 transition-all duration-300">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-peach-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-900">Email</h5>
                    <p className="text-gray-600">aura@auramedinadewitpsicoterapia.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-peach-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-900">Phone</h5>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-peach-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-900">Location</h5>
                    <p className="text-gray-600">Online & In-Person Sessions</p>
                    <p className="text-gray-600 text-sm">Miami, FL & Virtual Worldwide</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-peach-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-900">Office Hours</h5>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-peach-50 to-sage-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Consultation</h4>
              <p className="text-gray-600 mb-6">
                Ready to take the first step? Book a complimentary 15-minute consultation to discuss your needs and see if we're a good fit.
              </p>
              <Button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 font-semibold rounded-lg hover:from-peach-300 hover:to-rose-300 transition-all duration-300">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}