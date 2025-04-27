import type { Metadata } from 'next'
import './globals.css'
import { Spin } from 'antd'
import HeaderWrapper from '@/components/layout/header/HeaderWrapper'

export const metadata: Metadata = {
  title: 'Phanupong Portfolio',
  description: 'Phanupong Portfolio',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!children) return <Spin fullscreen />

  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
