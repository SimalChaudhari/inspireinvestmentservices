import { useState } from 'react'
import AdvancedReactions from '../AdvancedReactions'

const OurCarriersSection = () => {
  const [carriersReactions, setCarriersReactions] = useState({})

  const handleCarriersReaction = (emoji, count) => {
    setCarriersReactions(prev => ({
      ...prev,
      [emoji]: count
    }))
  }

  const carriers = [
    {
      name: "FinTech Pro",
      logo: "https://picsum.photos/150/80?random=1",
      color: "blue",
      description: "Financial Technology Solutions"
    },
    {
      name: "WealthGuard",
      logo: "https://picsum.photos/150/80?random=2",
      color: "green",
      description: "Wealth Protection Services"
    },
    {
      name: "InvestMax",
      logo: "https://picsum.photos/150/80?random=3",
      color: "purple",
      description: "Investment Management"
    },
    {
      name: "SecureLife",
      logo: "https://picsum.photos/150/80?random=4",
      color: "blue",
      description: "Life Insurance Solutions"
    },
    {
      name: "GrowthCapital",
      logo: "https://picsum.photos/150/80?random=5",
      color: "green",
      description: "Capital Growth Strategies"
    },
    {
      name: "PrimeInvest",
      logo: "https://picsum.photos/150/80?random=6",
      color: "red",
      description: "Prime Investment Services"
    },
    {
      name: "FutureFunds",
      logo: "https://picsum.photos/150/80?random=7",
      color: "blue",
      description: "Future Financial Planning"
    },
    {
      name: "SmartWealth",
      logo: "https://picsum.photos/150/80?random=8",
      color: "purple",
      description: "Smart Wealth Management"
    },
    {
      name: "EliteFinance",
      logo: "https://picsum.photos/150/80?random=9",
      color: "green",
      description: "Elite Financial Services"
    },
    {
      name: "TrustInvest",
      logo: "https://picsum.photos/150/80?random=10",
      color: "blue",
      description: "Trusted Investment Partners"
    },
    {
      name: "CapitalPlus",
      logo: "https://picsum.photos/150/80?random=11",
      color: "red",
      description: "Capital Plus Solutions"
    },
    {
      name: "WealthMax",
      logo: "https://picsum.photos/150/80?random=12",
      color: "purple",
      description: "Maximum Wealth Building"
    }
  ]

  const getLogoStyle = (carrier) => {
    const baseStyle = "w-full h-20 sm:h-24 lg:h-28 flex items-center justify-center"
    
    return baseStyle
  }


  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="px-6 py-3 rounded-lg text-2xl md:text-3xl font-bold text-customBlue2">
              Our Carriers
            </h2>
          </div>
        </div>

        {/* Carriers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {carriers.map((carrier, index) => (
            <div key={index} className="group">
              <div className={getLogoStyle(carrier)}>
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={carrier.logo}
                    alt={carrier.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default OurCarriersSection
