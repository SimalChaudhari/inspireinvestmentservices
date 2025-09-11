import React from 'react'
import Hero from '../components/Hero'

const Annuity = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
        title="Annuity Solutions"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-lora mb-6">
              Secure Your Retirement Income
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-lora">
              Annuities provide guaranteed income during retirement and tax-deferred growth as you save. 
              Discover how our annuity solutions can help protect your financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="bg-gray-50 rounded-lg p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-lora">
                Fixed Annuities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-lora">
                Guaranteed principal protection with fixed interest rates. 
                Perfect for conservative investors seeking stability and predictable returns.
              </p>
              <button 
                className="bg-customBlue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 font-lora"
                style={{backgroundColor: '#74a4cb'}}
              >
                Learn More
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-lora">
                Variable Annuities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-lora">
                Investment growth potential with professional management. 
                Choose from a variety of investment options to match your risk tolerance.
              </p>
              <button 
                className="bg-customBlue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 font-lora"
                style={{backgroundColor: '#74a4cb'}}
              >
                Learn More
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-lora">
                Income Annuities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-lora">
                Convert your savings into guaranteed lifetime income. 
                Ensure you never outlive your retirement savings with our income solutions.
              </p>
              <button 
                className="bg-customBlue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 font-lora"
                style={{backgroundColor: '#74a4cb'}}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-lora">
                Ready to Explore Annuity Options?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-lora">
                Contact us today to discuss which annuity solution best fits your retirement goals and financial situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-300 font-lora shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{backgroundColor: '#74a4cb'}}
                >
                  Schedule Consultation
                </button>
                <button 
                  className="border-2 border-customBlue text-customBlue py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue hover:text-white transition-all duration-300 font-lora shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{borderColor: '#74a4cb', color: '#74a4cb'}}
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Annuity
