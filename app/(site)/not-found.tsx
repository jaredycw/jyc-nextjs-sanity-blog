import Image from 'next/image'
import { metadata } from './layout'
import RouterBlock from '@/app/component/widgets/routerblock'

export async function generateMetadata() {
  return {
    title: `404 Page not Found` + ` — ` + metadata.title
  }
}

export default function NotFound() {
 

  return <div>
	<div className="container mx-auto my-10">
      <h1>Oops! 404: Page not found</h1>
      <div>
        <div className="grid grid-flow-col">
            <div></div>
            <div className='my-20 error-field'>
                <Image 
                src="https://cdn.sanity.io/images/mrzc8peh/production/891a6610065ee1f6a095c3e0f0ba7d932bba5e00-912x420.svg"
                alt="404" width={500} height={500} />
            </div>
            <div></div>
        </div>
      </div>
        <RouterBlock />
      </div>
	  </div>
 
}