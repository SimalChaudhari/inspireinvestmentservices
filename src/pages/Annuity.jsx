import React from 'react'
import Hero from '../components/Hero'

const Annuity = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://img.freepik.com/free-photo/business-women-signature-document_1388-90.jpg?t=st=1757678285~exp=1757681885~hmac=4cf9664b646f71690e1047764f9d4488865a84914fb31e6b72eac03f0e3b9bf3&w=1480"
        title="Annuity Solutions"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-customGray mb-6">
              Secure Your Retirement Income
            </h2>
            <p className="text-lg sm:text-xl text-customGray max-w-4xl mx-auto leading-relaxed">
              Annuities provide guaranteed income during retirement and tax-deferred growth as you save. 
              Discover how our annuity solutions can help protect your financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="bg-gray-50 rounded-lg p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-customGray mb-4">
                Fixed Annuities
              </h3>
              <p className="text-customGray leading-relaxed mb-6">
                Guaranteed principal protection with fixed interest rates. 
                Perfect for conservative investors seeking stability and predictable returns.
              </p>
              <button 
                className="bg-customBlue text-white py-3 px-6 rounded-lg font-semibold hover:bg-customBlue2 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-customGray mb-4">
                Variable Annuities
              </h3>
              <p className="text-customGray leading-relaxed mb-6">
                Investment growth potential with professional management. 
                Choose from a variety of investment options to match your risk tolerance.
              </p>
              <button 
                className="bg-customBlue text-white py-3 px-6 rounded-lg font-semibold hover:bg-customBlue2 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-customGray mb-4">
                Income Annuities
              </h3>
              <p className="text-customGray leading-relaxed mb-6">
                Convert your savings into guaranteed lifetime income. 
                Ensure you never outlive your retirement savings with our income solutions.
              </p>
              <button 
                className="bg-customBlue text-white py-3 px-6 rounded-lg font-semibold hover:bg-customBlue2 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-customGray mb-4">
                Ready to Explore Annuity Options?
              </h3>
              <p className="text-lg text-customGray mb-8 max-w-2xl mx-auto">
                Contact us today to discuss which annuity solution best fits your retirement goals and financial situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"

                >
                  Schedule Consultation
                </button>
                <button 
                  className="border-2 border-customBlue text-customBlue py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
