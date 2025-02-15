import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'バッテリー Wh 計算機',
  description: 'モバイルバッテリーのWh（ワット時）を簡単に計算できます。航空機内持ち込み時のチェックに便利！',
  generator: 'Customized by me',
  openGraph: {
    title: 'バッテリー Wh 計算機',
    description: 'モバイルバッテリーの Wh（ワット時）を簡単に計算。飛行機に持ち込む際の容量チェックに最適。',
    url: 'https://your-deployed-app-url.vercel.app',
    siteName: 'バッテリー Wh 計算機',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'バッテリー Wh 計算機のイメージ',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'バッテリー Wh 計算機',
    description: 'モバイルバッテリーの Wh（ワット時）を計算。飛行機の持ち込み制限をチェック！',
    images: ['/og-image.png'],
  },
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
