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
import RothIra from './pages/RothIra'
import RothIraConversion from './pages/RothIraConversion'
import Rollovers401k from './pages/401kRollovers'
import LifeInsurance from './pages/LifeInsurance'
import HealthInsurance from './pages/HealthInsurance'
import LongtermCare from './pages/LongtermCare'
import FixedAnnuities from './pages/FixedAnnuities'
import VariableAnnuities from './pages/VariableAnnuities'
import IncomeAnnuities from './pages/IncomeAnnuities'

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
          <Route path="roth-ira" element={<RothIra />} />
          <Route path="roth-ira-conversion" element={<RothIraConversion />} />
          <Route path="401k-rollovers" element={<Rollovers401k />} />
          <Route path="life-insurance" element={<LifeInsurance />} />
          <Route path="health-insurance" element={<HealthInsurance />} />
          <Route path="longterm-care" element={<LongtermCare />} />
          <Route path="fixed-annuities" element={<FixedAnnuities />} />
          <Route path="variable-annuities" element={<VariableAnnuities />} />
          <Route path="income-annuities" element={<IncomeAnnuities />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
