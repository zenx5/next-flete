import './globals.css'
import { Inter } from 'next/font/google'

import CustomFooter from '@/components/CustomFooter'
import CustomHeader from '@/components/CustomHeader'



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
          <CustomHeader />
          {children}
          <CustomFooter />
      </body>
    </html>
  )
}
