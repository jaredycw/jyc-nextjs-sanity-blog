import Link from 'next/link'
import NotFound from '../not-found'
import { Metadata } from 'next'
import { metadata } from '../layout'


export async function generateMetadata({ params }) {
  return {
    title: `404 Page not Found` + ` — ` + metadata.title
  }
}

export default function NotFoundCatchAll() {
  return NotFound()
}
