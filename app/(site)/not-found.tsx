 
import Link from 'next/link'
import { Metadata } from 'next'
import { metadata } from './layout'
import RouterBlock from '../component/widgets/routerblock'

export async function generateMetadata() {
  return {
    title: `404 Page not Found` + ` — ` + metadata.title
  }
}

export default function NotFound() {
 

  return <div>
	<div className="container mx-auto my-10">
      <h1>Not found – 404!</h1>
      <div>
        <RouterBlock />
      </div>
	  </div>
  </div>
}