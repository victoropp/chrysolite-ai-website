import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Chrysolite AI ERP - The AI-Powered ERP That Runs Your Business',
  description: 'Enterprise Resource Planning powered by AI. Automate accounting, inventory, payroll, CRM, and more with intelligent insights and real-time analytics.',
  keywords: ['ERP', 'AI', 'Enterprise Resource Planning', 'Accounting Software', 'Business Management', 'Inventory Management', 'Payroll Software'],
  authors: [{ name: 'Chrysolite AI' }],
  creator: 'Chrysolite AI',
  publisher: 'Chrysolite AI',
  openGraph: {
    title: 'Chrysolite AI ERP - The AI-Powered ERP That Runs Your Business',
    description: 'Enterprise Resource Planning powered by AI. Automate your entire business with intelligent insights.',
    url: 'https://chrysoliteai.com',
    siteName: 'Chrysolite AI',
    type: 'website',
    images: [
      {
        url: 'https://chrysoliteai.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chrysolite AI ERP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chrysolite AI ERP - The AI-Powered ERP That Runs Your Business',
    description: 'Enterprise Resource Planning powered by AI',
    images: ['https://chrysoliteai.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="chrysolite-theme"
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
