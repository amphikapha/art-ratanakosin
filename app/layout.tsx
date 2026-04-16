import type { Metadata, Viewport } from 'next'
import { Noto_Serif_Thai, Sarabun } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifThai = Noto_Serif_Thai({ 
  subsets: ["thai", "latin"],
  variable: '--font-serif-thai',
  weight: ['400', '500', '600', '700'],
})

const sarabun = Sarabun({ 
  subsets: ["thai", "latin"],
  variable: '--font-sarabun',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'วัดสระเกศราชวรมหาวิหาร | Wat Saket - ภูเขาทอง กรุงเทพมหานคร',
  description: 'วัดสระเกศราชวรมหาวิหาร หรือ วัดภูเขาทอง พระอารามหลวงชั้นโท ชนิดราชวรมหาวิหาร ตั้งอยู่ในเขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร เป็นวัดเก่าแก่ที่มีความสำคัญทางประวัติศาสตร์และสถาปัตยกรรมไทย',
  keywords: ['วัดสระเกศ', 'ภูเขาทอง', 'วัดภูเขาทอง', 'Wat Saket', 'Golden Mount', 'Bangkok Temple', 'วัดกรุงเทพ'],
}

export const viewport: Viewport = {
  themeColor: '#8B0000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={`${notoSerifThai.variable} ${sarabun.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
