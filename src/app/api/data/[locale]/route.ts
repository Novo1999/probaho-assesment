import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

type RouteParams = {
  params: Promise<{
    locale: string
  }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { locale } = await params
    const safeLocale = locale || 'es'

    const jsonDirectory = path.join(process.cwd(), 'src', 'app', 'api', 'data')
    const fileContents = await fs.readFile(path.join(jsonDirectory, `${safeLocale}.json`), 'utf8')
    const data = JSON.parse(fileContents)

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error loading data:', error)
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
  }
}
