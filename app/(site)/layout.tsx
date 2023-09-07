
import '../globals.css'
import '../styles/font.css'
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JYZ',
  description: 'Blog and Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-20 pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
