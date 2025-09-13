export async function getPageData(locale: string = 'es') {
  try {
    const response = await fetch(`${'http://localhost:3000'}/api/data/${locale}`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
    })

    console.log(response)

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
