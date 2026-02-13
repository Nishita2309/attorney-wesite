import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consultation" element={<Consultation />} />
    </Routes>
  )
}
