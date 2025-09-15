import Hero from '../components/Hero'

const StepsToFinancialSecurity = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://st.depositphotos.com/1518767/3846/i/450/depositphotos_38464677-stock-photo-steps-in-a-blue-room.jpg"
        title="Steps to Financial Security"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Your Path to Financial Security
              </h2>
              <p className="text-lg text-customGray leading-relaxed max-w-4xl mx-auto">
                Follow these essential steps to build a solid financial foundation and secure your family's future. Each step is designed to help you achieve long-term financial stability and peace of mind.
              </p>
            </div>
          </div>

          {/* Step 1: Increase Cash Flow */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-customGray mb-6">
                      Increase Cash Flow
                    </h2>
                    <p className="text-lg text-customGray leading-relaxed">
                      Improving cash flow is an essential part of financial planning. We start by identifying expenses that can be reduced, eliminated or optimized. Then we identify opportunities to increase revenue.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg" 
                    alt="Cash Flow Management"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Debt Management */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                  <img 
                    src="https://images.pexels.com/photos/4386436/pexels-photo-4386436.jpeg" 
                    alt="Debt Management"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="p-8 lg:p-12 flex items-center order-1 lg:order-2">
                  <div>
                    <h2 className="text-3xl font-bold text-customGray mb-6">
                      DEBT MANAGEMENT
                    </h2>
                    <p className="text-lg text-customGray leading-relaxed">
                      If you have a mortgage, auto loans, credit card balances, student loans, or other financial obligations, we put you on a plan to be debt-free within the next 8-10 years, including your mortgage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Emergency Fund */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-customGray mb-6">
                      EMERGENCY FUND
                    </h2>
                    <p className="text-lg text-customGray leading-relaxed">
                      To properly plan and be prepared for emergencies, 3-6 months of net income should be in reserve and assessable in a bank. Unfortunately, the only savings that the majority of people have is in their 401(k) or IRA, which is subject to restrictions and penalties for early withdrawal.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 lg:p-12 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/4386432/pexels-photo-4386432.jpeg" 
                    alt="Emergency Fund"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Proper Protection */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                  <img 
                    src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg" 
                    alt="Proper Protection"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="p-8 lg:p-12 flex items-center order-1 lg:order-2">
                  <div>
                    <h2 className="text-3xl font-bold text-customGray mb-6">
                      PROPER PROTECTION
                    </h2>
                    <p className="text-lg text-customGray leading-relaxed">
                      The majority of Americans do not have enough life insurance nor do they have the right type of life insurance for their family's needs. Furthermore, as the cost of healthcare rises and we are living longer, most people are not prepared for the costs that are associated with chronic, critical or terminal illness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5: Build Wealth */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-customGray mb-6">
                      BUILD WEALTH
                    </h2>
                    <p className="text-lg text-customGray leading-relaxed">
                      Long-term savings must outpace inflation and minimize taxation in order to achieve financial success. We educate clients on the many options available.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 lg:p-12 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/4386434/pexels-photo-4386434.jpeg" 
                    alt="Build Wealth"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Preserve Wealth */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                  <img 
                    src="https://images.pexels.com/photos/4386435/pexels-photo-4386435.jpeg" 
                    alt="Preserve Wealth"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="p-8 lg:p-12 flex items-center order-1 lg:order-2">
                  <div>
                    <h2 className="text-3xl font-bold text-customGray mb-6">
                      PRESERVE WEALTH
                    </h2>
                    <p className="text-lg text-customGray leading-relaxed">
                      A successful financial plan includes a strategy to reduce or eliminate estate taxes upon the transferrance of wealth from one generation to another. We use the tools and strategies of the wealthy to help Middle America keep its hard-earned money in the family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-customGray mb-4">
                Ready to Start Your Financial Security Journey?
              </h3>
              <p className="text-lg text-customGray mb-6">
                Let us help you implement these steps and build a secure financial future for you and your family.
              </p>
              <button className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsToFinancialSecurity
