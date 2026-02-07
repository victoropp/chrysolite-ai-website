import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
