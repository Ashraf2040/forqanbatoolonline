import { Inter, Roboto,Merriweather,Poppins ,Lexend} from 'next/font/google'
import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'



const inter = Lexend({ subsets: ['latin'] ,weight :["400"]})

export const metadata = {
  title: 'BatoolForqan-School',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >

      <body className={`${inter.className} `}>


      <Header />
<main>
{children}
</main>
      
      <Footer />
      
      </body>
    </html>
  )
}
