
import '../globals.css'
import '../styles/font.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'
import BacktoTop from '../component/widgets/backtotop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JYC',
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
        <main className="mt-20 pt-10">
          {children}
        </main>
        <BacktoTop />
        <Footer />
      </body>
    </html>
  )
}
