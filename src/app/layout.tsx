import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Whats in the Bag?',
  description: 'The Cardiff Tiny Farm Bag Reveal',
  icons: {
    icon: '/favicon.png', 
  },
}

// random comment

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-farm-background bg-no-repeat bg-cover'>
      <nav className="p-6 flex top-0 left-0">
        <Image
            alt='logo'
            src={'/logo.png'}
            height={500}
            width={100}
          />
      </nav>
        {children}
      </body>
    </html>
  )
}
