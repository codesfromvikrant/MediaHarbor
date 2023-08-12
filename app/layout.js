"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

const inter = Inter({ weight: ['400', '700', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'MediaHarbor',
  description: 'Your Secure Haven for File Management and Image Galleries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
