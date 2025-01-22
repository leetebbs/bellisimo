import Hero from "./components/Hero"
import Services from "./components/Services"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Hero />
      <Services />
      <Footer />
    </main>
  )
}

