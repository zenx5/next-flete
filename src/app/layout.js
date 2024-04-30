import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomHeader from '@/components/header/Index'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ModalContainer from '@/components/ModalContainer';
import { ToastProvider } from '../components/ToastProvider';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Hay Flete</title>
      </head>
      <body className={`${inter.className} flex flex-col justify-between min-h-screen`}>
        <CustomHeader/>
        {children}
        <Footer />
        <ModalContainer />
        {/** Aqui deberia ir el ToastProvider */}
        <ToastProvider  />
      </body>
    </html>
  )
}
