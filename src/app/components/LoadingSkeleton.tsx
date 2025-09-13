export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-peach-50 to-white">
      {/* Header Skeleton */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse-custom"></div>
              <div className="w-32 h-6 bg-gray-200 rounded animate-pulse-custom"></div>
            </div>
            <div className="hidden md:flex space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-16 h-4 bg-gray-200 rounded animate-pulse-custom"></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-12 bg-gray-200 rounded mb-6 animate-pulse-custom"></div>
              <div className="w-3/4 h-6 bg-gray-200 rounded mb-6 animate-pulse-custom"></div>
              <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse-custom"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded mb-8 animate-pulse-custom"></div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-40 h-12 bg-gray-200 rounded-xl animate-pulse-custom"></div>
                <div className="w-40 h-12 bg-gray-200 rounded-xl animate-pulse-custom"></div>
              </div>
            </div>

            <div className="w-full h-96 bg-gray-200 rounded-3xl animate-pulse-custom"></div>
          </div>
        </div>
      </section>

      {/* Books Section Skeleton */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-64 h-10 bg-gray-200 rounded mx-auto mb-4 animate-pulse-custom"></div>
            <div className="w-48 h-6 bg-gray-200 rounded mx-auto animate-pulse-custom"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-48 h-72 bg-gray-200 rounded-xl animate-pulse-custom"></div>
                  <div className="flex-1">
                    <div className="w-full h-8 bg-gray-200 rounded mb-4 animate-pulse-custom"></div>
                    <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse-custom"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded mb-6 animate-pulse-custom"></div>
                    <div className="space-y-3">
                      <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse-custom"></div>
                      <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse-custom"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-48 h-10 bg-gray-200 rounded mx-auto animate-pulse-custom"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-6 animate-pulse-custom"></div>
                <div className="w-3/4 h-8 bg-gray-200 rounded mb-4 animate-pulse-custom"></div>
                <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse-custom"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded mb-6 animate-pulse-custom"></div>
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse-custom"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
