import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

export async function GET(request: NextRequest, { params }: { params: { locale: string } }) {
  try {
    const locale = params.locale || 'es'
    const jsonDirectory = path.join(process.cwd(), 'data')
    const fileContents = await fs.readFile(jsonDirectory + `/${locale}.json`, 'utf8')
    const data = JSON.parse(fileContents)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
  }
}
