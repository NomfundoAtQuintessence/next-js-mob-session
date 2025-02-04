import SearchField from '@/components/searchField'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex gap-1'>
          <nav className='bg-yellow-500 h-screen w-1/6 flex flex-col'>
            <Link href={'/'}>Home</Link>
            <Link href={'/dashboard'}>Go to dashboard</Link>
          </nav>
          <main className='flex-grow h-screen'>
            <header className='bg-blue-300 h-20'>
              <SearchField/>
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
