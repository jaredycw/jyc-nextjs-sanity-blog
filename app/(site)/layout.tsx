
import '../globals.css'
import '../styles/font.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'
import BacktoTop from '../component/widgets/backtotop'
import { Analytics } from '@vercel/analytics/react';
export const revalidate = 60;
const inter = Inter({ subsets: ['latin'] })
const host_name = process.env.HOST_NAME;

export const metadata: Metadata = {
  title: 'JYC',
  description: 'Jared Yeung Creative - Blog and Portfolio',
  openGraph: {
    title: 'JYC',   
    description: 'Jared Yeung Creative - Blog and Portfolio, Web Designer & Developer, Self Learner',
    images: [{
        url: "https://cdn.sanity.io/images/mrzc8peh/production/926db6f7d5b119da2e8fa0572415c94880ddf40e-3334x2084.jpg"
    }
    ]
  },
  creator: 'Jared Yeung',
  keywords: ['Next.js', 'React', 'JavaScript', 
    'HTML5', 'CSS3', 'Web Design', 'Web Development',
    'self-learner'
  ],
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
        <Analytics />
      </body>
    </html>
  )
}
