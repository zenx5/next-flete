import CustomHeader from '@/components/CustomHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import CustomFooter from '@/components/CustomFooter'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
          <CustomHeader />
          {children}
          <CustomFooter />
      </body>
    </html>
  )
}
