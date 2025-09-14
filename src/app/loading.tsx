'use client'

import { BookOpen, Heart, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function LoadingPage() {
  const t = useTranslations('loading')
  const [currentQuote, setCurrentQuote] = useState(0)
  const [progress, setProgress] = useState(0)

  const inspirationalQuotes = t.raw('quotes') as string[]

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Quote rotation
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length)
    }, 2500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(quoteInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 via-white to-sage-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        {/* Logo/Brand Section */}
        <div className="mb-8 animate-float">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-peach-200 to-sage-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
              <Heart className="w-12 h-12 text-peach-700" />
            </div>

            {/* Floating sparkles */}
            <div className="absolute -top-2 -right-2 animate-pulse-soft">
              <Sparkles className="w-6 h-6 text-sage-600" />
            </div>
            <div className="absolute -bottom-1 -left-2 animate-pulse-soft [animation-delay:1s]">
              <BookOpen className="w-5 h-5 text-peach-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('brandName')}</h1>
          <p className="text-lg text-peach-700 font-medium">{t('brandTitle')}</p>
        </div>

        {/* Loading Progress */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
            <div className="bg-gradient-to-r from-peach-200 to-sage-200 h-2 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm text-gray-500">{progress}% {t('completed')}</p>
        </div>

        {/* Inspirational Quote */}
        <div className="mb-6 h-16 flex items-center justify-center">
          <p key={currentQuote} className="text-gray-600 italic text-center animate-fade-in px-4">
            {inspirationalQuotes[currentQuote]}
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div key={index} className="w-3 h-3 bg-peach-200 rounded-full animate-pulse-soft" style={{ animationDelay: `${index * 0.3}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
