import type { Metadata } from 'next'
import '../globals.css'
import { Spin } from 'antd'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phanupong Portfolio',
  description: 'Phanupong Portfolio',
  icons: {
    icon: '/icon.svg',
  },
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!children) return <Spin fullscreen />

  return (
    <html lang='en' className={inter.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
