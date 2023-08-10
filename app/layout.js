import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: ['400', '700', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'MediaHarbor',
  description: 'Your Secure Haven for File Management and Image Galleries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
