import Preloader from './components/Preloader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Options from './components/Options.jsx'
import Listing from './components/Listing.jsx'
import WordReel from './components/WordReel.jsx'
import FindSpace from './components/FindSpace.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <main className="stack">
        <Options />
        <Listing />
        <WordReel />
        <FindSpace />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
