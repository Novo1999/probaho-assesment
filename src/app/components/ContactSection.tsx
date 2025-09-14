'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

export default function ContactSection() {
  const t = useTranslations('contact')
  const footer = useTranslations('footer')

  const formSchema = z.object({
    firstName: z.string().min(1, t('form.validation.firstNameRequired')),
    lastName: z.string().min(1, t('form.validation.lastNameRequired')),
    email: z.string().email(t('form.validation.emailRequired')),
    phone: z.string().optional(),
    subject: z.string().min(1, t('form.validation.subjectRequired')),
    message: z.string().min(10, t('form.validation.messageRequired')),
  })

  type FormData = z.infer<typeof formSchema>

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)
      toast.success(t('form.success'))
      form.reset()
    } catch (error: unknown) {
      toast.error(t('form.error') + error)
    }
  }
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('title')}</h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full overflow-hidden">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t('form.title')}</h4>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.firstName')} <span className="text-rose-500">{t('form.required')}</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t('form.placeholders.firstName')}
                            className="w-full border-2 focus:ring-2 focus:ring-rose-200 border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="flex items-center mt-1 text-sm text-rose-600"></FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.lastName')} <span className="text-rose-500">{t('form.required')}</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={t('form.placeholders.lastName')}
                            className="w-full border-2 focus:ring-2 focus:ring-rose-200 border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="flex items-center mt-1 text-sm text-rose-600"></FormMessage>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.email')} <span className="text-rose-500">{t('form.required')}</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('form.placeholders.email')}
                          className="w-full border-2 focus:ring-2 focus:ring-rose-200 border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="flex items-center mt-1 text-sm text-rose-600"></FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700 mb-2">{t('form.phone')}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder={t('form.placeholders.phone')} className="border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.subject')} <span className="text-rose-500">{t('form.required')}</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder={t('form.placeholders.subject')}
                          className="w-full border-2 focus:ring-2 focus:ring-rose-200 border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="flex items-center mt-1 text-sm text-rose-600"></FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.message')} <span className="text-rose-500">{t('form.required')}</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('form.placeholders.message')}
                          rows={5}
                          className="w-full border-2 focus:ring-2 focus:ring-rose-200 resize-none border-gray-300 focus-visible:ring-rose-200 focus-visible:border-rose-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="flex items-center mt-1 text-sm text-rose-600"></FormMessage>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 font-semibold rounded-lg hover:from-peach-300 hover:to-rose-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {form.formState.isSubmitting ? t('form.sending') : t('form.send')}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 w-full">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full overflow-hidden">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t('info.title')}</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-peach-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-900">{t('info.email')}</h5>
                    <p className="text-gray-600">{footer('contact.email')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-peach-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-900">{t('info.phone')}</h5>
                    <p className="text-gray-600">{footer('contact.phone')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-peach-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-900">{t('info.location')}</h5>
                    <p className="text-gray-600">{t('info.locationDetails.online')}</p>
                    <p className="text-gray-600 text-sm">{t('info.locationDetails.address')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-peach-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-900">{t('info.hours')}</h5>
                    <div className="text-gray-600 space-y-1">
                      <p>{t('info.schedule.weekdays')}</p>
                      <p>{t('info.schedule.saturday')}</p>
                      <p>{t('info.schedule.sunday')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-peach-50 to-sage-50 rounded-2xl p-4 sm:p-6 lg:p-8 w-full overflow-hidden">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('consultation.title')}</h4>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{t('consultation.description')}</p>
              <Button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-peach-200 to-rose-200 text-peach-700 font-semibold rounded-lg hover:from-peach-300 hover:to-rose-300 transition-all duration-300">
                {t('consultation.button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
