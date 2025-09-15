import { useState } from 'react'
import Hero from '../../components/Hero'
import WelcomeSection from '../../components/Home/WelcomeSection'
import OurCarriersSection from '../../components/Home/OurCarriersSection'
import AdvancedReactions from '../../components/AdvancedReactions'

const Home = () => {
  const [pageReactions, setPageReactions] = useState({})

  const handlePageReaction = (emoji, count) => {
    setPageReactions(prev => ({
      ...prev,
      [emoji]: count
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Header */}
      <Hero
        backgroundImage="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
        title="Inspire Investment Services"
        titleSize="text-3xl md:text-4xl font-lora"
      />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Our Carriers Section */}
      <OurCarriersSection />

    </div>
  )
}

export default Home
