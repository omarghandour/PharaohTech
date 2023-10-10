import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pharaoh Tech.',
  description: 'a company that creates websites for businesses of all sizes and sectors.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/scarab-with-wings-svgrepo-com (1).svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/scarab-with-wings-svgrepo-com (1).svg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: /scarab-with-wings-svgrepo-com (1).svg',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
