
import Link from 'next/link'
import { Metadata } from 'next'
import { metadata } from './layout'

export async function generateMetadata({ params }) {
  return {
    title: `404 Page not Found` + ` — ` + metadata.title
  }
}

export default function NotFound() {


  return <div>
	<div className="container mx-auto my-10">
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/" className="ugly-blue">Go back to Home</Link>
      </div>
	  </div>
  </div>
}