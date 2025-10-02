import Header from "@/components/Header";
import {Inter, Poppins} from 'next/font/google'
import '../globals.css'
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'LINKLY - Todos os seus links em um só lugar',
  description: 'Compartilhe seus links, redes sociais e informações de contato em uma única página',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${poppins.variable}`}>
        <main className="flex flex-col min-h-screen">
          <Header />
          <div className="max-w-6xl mx-auto flex-grow w-full">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
