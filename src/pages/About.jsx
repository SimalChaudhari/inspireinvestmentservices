import { useState } from 'react'
import Hero from '../components/Hero'
import AdvancedReactions from '../components/AdvancedReactions'

const About = () => {
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
        backgroundImage="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg"
        title="About Us"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />

      {/* Main Content Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                At Inspire Investment Services, we are dedicated to helping individuals and businesses 
                achieve their financial goals through strategic investment planning and expert guidance.
              </p>
            </div>
            
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              With over 15 years of experience in the financial industry, our team of certified 
              financial advisors provides personalized investment solutions tailored to your unique 
              needs and risk tolerance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To empower our clients with the knowledge and tools they need to make informed 
                  financial decisions and build lasting wealth for their future.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Vision</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To be the leading financial advisory firm that transforms lives through 
                  innovative investment strategies and exceptional client service.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-blue-600 text-lg mr-3 mt-1">✓</span>
                  <span className="text-gray-600 text-sm sm:text-base">Integrity and transparency in all our dealings</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 text-lg mr-3 mt-1">✓</span>
                  <span className="text-gray-600 text-sm sm:text-base">Client-first approach to financial planning</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 text-lg mr-3 mt-1">✓</span>
                  <span className="text-gray-600 text-sm sm:text-base">Continuous learning and adaptation to market changes</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 text-lg mr-3 mt-1">✓</span>
                  <span className="text-gray-600 text-sm sm:text-base">Long-term relationship building with our clients</span>
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center bg-blue-600 text-white p-4 sm:p-6 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm opacity-90">Years Experience</div>
              </div>
              <div className="text-center bg-green-600 text-white p-4 sm:p-6 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm opacity-90">Happy Clients</div>
              </div>
              <div className="text-center bg-purple-600 text-white p-4 sm:p-6 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">$50M+</div>
                <div className="text-xs sm:text-sm opacity-90">Assets Managed</div>
              </div>
              <div className="text-center bg-orange-600 text-white p-4 sm:p-6 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

          {/* Floating Reaction Widget */}
          <div className="fixed bottom-6 right-6 z-50">
            <AdvancedReactions 
              onReaction={handlePageReaction}
              initialReactions={pageReactions}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
