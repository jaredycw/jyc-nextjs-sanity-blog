
import '../globals.css'
import '../styles/font.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'
import BacktoTop from '../component/widgets/backtotop'
export const revalidate = 60;
const inter = Inter({ subsets: ['latin'] })
const host_name = process.env.HOST_NAME;

export const metadata: Metadata = {
  title: 'JYC',
  description: 'Jared Yeung Creative - Blog and Portfolio',
  openGraph: {
    title: 'JYC',   
    description: 'Jared Yeung Creative - Blog and Portfolio',
    images: [{
        url: "https://cdn.sanity.io/images/mrzc8peh/production/75f336fa906ddece5c960ff120f03c039a2659d5-801x501.jpg"
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
      </body>
    </html>
  )
}
