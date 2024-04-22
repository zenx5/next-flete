import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomHeader from '@/components/header/Index'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ModalContainer from '@/components/ModalContainer';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Hay Flete</title>
      </head>
      <body className={inter.className}>
        <CustomHeader/>
        {children}
        <Footer />
        <ModalContainer />
      </body>
    </html>
  )
}
