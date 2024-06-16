import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { MessageProvider } from '@/components/custom-hooks/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online Education',
  description: 'Infinite Chinese Academy, helping you grow every day',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MessageProvider>{children}</MessageProvider>
      </body>
    </html>
  )
}
