import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FooterCTA from './components/FooterCTA'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import BookRide from './pages/BookRide'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8f8f7] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookRide />} />
          </Routes>
        </main>
        <FooterCTA />
      </div>
    </BrowserRouter>
  )
}

export default App
