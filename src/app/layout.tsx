import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'JesusMH - Portafolio personal',
  description: 'Portafolio de proyectos y de experiencia de JesusMH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="JesusMH - Portafolio personal"/>
          <meta property="og:description" content="Portafolio de proyectos y de experiencia de JesusMH"/>
            <meta property="og:image" content="images/main_in_laptop.png"/>
              <meta property="og:url" content="https://jesusmh.com"/>
                <meta property="og:type" content="website"/>
                </Head>
                <body className={inter.className}>{children}</body>
              </html>
              )
}
