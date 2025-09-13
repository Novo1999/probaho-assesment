export async function getPageData(locale: string = 'es') {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/${locale}`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching page data:', error)
    // Fallback to Spanish if English fails
    if (locale !== 'es') {
      return getPageData('es')
    }
    throw error
  }
}
