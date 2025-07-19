import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phanupong Portfolio',
  description: 'Phanupong Portfolio',
  icons: {
    icon: '/icon.svg',
  },
}

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-400"></div>
  </div>
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!children) return <LoadingSpinner />

  return (
    <html lang='en' className={inter.className}>
      <body>
        <div>{children}</div>
        <Toaster position='top-center' />
      </body>
    </html>
  )
}
