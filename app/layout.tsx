import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1-3 Aylık Ateşli Bebeklerde İnvaziv Bakteriyel Enfeksiyonlar',
  description: 'Bilimsel kongre sunumu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
