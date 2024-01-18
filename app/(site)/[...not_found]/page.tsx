
 
import { metadata } from '../layout'
import { notFound } from 'next/navigation';


export async function generateMetadata() {
  return {
    title: `404 Page not Found` + ` — ` + metadata.title
  }
}

export default function NotFoundCatchAll() {
  return notFound();
}
