import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Battery Wh Calculator', // アプリの目的を反映
  description: 'Calculate battery capacity in Wh for airline carry-on compliance.', // 航空機持ち込みに特化
  generator: 'Customized by me', // 必要なら変更
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
