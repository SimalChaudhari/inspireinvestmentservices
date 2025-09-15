import { useState } from 'react'
import AdvancedReactions from '../AdvancedReactions'

const WelcomeSection = () => {
  const [welcomeReactions, setWelcomeReactions] = useState({})

  const handleWelcomeReaction = (emoji, count) => {
    setWelcomeReactions(prev => ({
      ...prev,
      [emoji]: count
    }))
  }

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-14">
              <h2 className="md:text-2xl text-xl font-lora font-bold text-customBlack">
                WELCOME TO Inspire Investment Services
              </h2>
              <h3 className="md:text-2xl text-xl font-semibold text-customGray">
                How We Work Together
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6 text-customGray leading-relaxed">
              <p className="text-base md:text-lg">
                As an Inspire Investment Service (licensed financial professional), I believe it's important to invest my time to understand what you're working toward before you invest your money. It's also important to understand the level of risk you're comfortable accepting when investing so we can balance it with the steps necessary to reach your long-term goals.
              </p>

              <p className="text-base md:text-lg">
                Whether you're planning for retirement, saving for college for children or grandchildren, or just trying to protect the financial future of the ones you care for the most, we can work together to develop specific strategies to help you achieve your goals. We can also monitor your progress to help make sure you stay on track or determine if any adjustments need to be made. Throughout it all, we're dedicated to providing you top-notch client service.
              </p>

              <p className="text-base md:text-lg">
                But we're not alone. Thousands of people and advanced technology support our office so we can help ensure you receive the most current and comprehensive guidance. In addition, we welcome the opportunity to work with your attorney, accountant and other trusted professionals to deliver a comprehensive strategy that leverages everyone's expertise. Working together, we can help you develop a complete, tailored strategy to help you achieve your financial goals.
              </p>
            </div>

          </div>

          {/* Right Side - Logo/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Microchip Tree Image */}
              <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-104 relative">
                <img 
                  src="https://www.shutterstock.com/image-vector/microchip-tree-600nw-161237582.jpg"
                  alt="Microchip Tree Logo"
                  className="w-full h-full object-contain"
                />
              </div>

           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
