import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BjoeyR | HUT RI 78',
  description: 'Website yang dibuat untuk lomba Web Design SMK TI BALI GLOBAL BADUNG',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
