import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import About from './pages/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact'
import RetirementCollegeSavings from './pages/RetirementCollegeSavings'
import Annuity from './pages/Annuity'
import WhatIsIra from './pages/WhatIsIra'
import TraditionalIra from './pages/TraditionalIra'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="retirement" element={<RetirementCollegeSavings />} />
          <Route path="annuity" element={<Annuity />} />
          <Route path="what-is-ira" element={<WhatIsIra />} />
          <Route path="traditional-ira" element={<TraditionalIra />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
