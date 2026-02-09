import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
