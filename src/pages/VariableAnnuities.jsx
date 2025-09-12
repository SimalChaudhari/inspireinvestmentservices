import React from 'react'
import Hero from '../components/Hero'

const VariableAnnuities = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
        title="Variable Annuities"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                Understanding Variable Annuities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-lora">
                Variable annuities are insurance contracts designed to help you reach your long-term financial 
                goals by providing you with a way to accumulate tax-deferred retirement savings while you are 
                preparing for retirement and a stream of income to use when you are in retirement.
              </p>
            </div>
          </div>

          {/* How Variable Annuities Work */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                How Variable Annuities Work
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg text-blue-800 leading-relaxed font-lora">
                  When you invest in a variable annuity, the insurance company typically offers a selection 
                  of underlying mutual fund-like investments called "subaccounts." You can choose from several 
                  professionally managed and diversified variable annuity subaccounts or portfolios based on 
                  your investment objectives, comfort level with risk and length of time until you retire.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                Key Features to Consider
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-lora mb-6">
                There are several key features to consider with a variable annuity.
              </p>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Tax-deferred Growth</h3>
                  <p className="text-green-700">
                    During the accumulation phase, increases in the value of the annuity are not subject to 
                    taxes until withdrawn.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Guaranteed Death Benefit</h3>
                  <p className="text-purple-700">
                    If the owner of the annuity passes away, the beneficiary is usually guaranteed the amount 
                    originally invested, minus previous withdrawals. Additional death benefit options may be available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Flexible Income Options */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                Flexible Income Options
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-lora mb-6">
                During the distribution phase, you may take income from a variable annuity in a number of ways:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Lifetime Income Stream</h3>
                  <p className="text-gray-700">
                    All deferred annuities can be converted to a lifetime stream of income.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Systematic Withdrawals</h3>
                  <p className="text-blue-700">
                    You may also have the option to take systematic withdrawals, the amount of which can be 
                    adjusted at any time.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Optional Living Benefits</h3>
                  <p className="text-red-700">
                    Some variable annuities enable the policyholder to elect an optional living benefit. Such 
                    benefits can provide certain guarantees for contract withdrawals for life. These benefits 
                    may require additional fees, charges, expenses or investment restrictions, and they may be 
                    subject to eligibility limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Avoiding Probate */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                Avoiding Probate
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-lg text-yellow-700 leading-relaxed font-lora">
                  Variable annuity proceeds paid to the beneficiary upon death are excluded from estate probate. 
                  However, the proceeds are subject to ordinary income taxes and estate taxes.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Options */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                Investment Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Subaccounts</h3>
                  <p className="text-green-700 text-sm">
                    Mutual fund-like investments that offer professional management and diversification across 
                    various asset classes and investment strategies.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Portfolio Selection</h3>
                  <p className="text-blue-700 text-sm">
                    Choose from multiple professionally managed portfolios based on your investment objectives, 
                    risk tolerance, and time horizon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-lora">
                Related Services
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="/annuity" className="text-blue-600 hover:text-blue-800">Annuity Overview</a></li>
                <li>• <a href="/fixed-annuities" className="text-blue-600 hover:text-blue-800">Fixed Annuities</a></li>
                <li>• <a href="/income-annuities" className="text-blue-600 hover:text-blue-800">Income Annuities</a></li>
                <li>• <a href="/retirement" className="text-blue-600 hover:text-blue-800">Retirement Planning</a></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-lora">
                Variable Annuity Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tax-deferred growth potential</li>
                <li>• Professional investment management</li>
                <li>• Flexible income options</li>
                <li>• Death benefit protection</li>
                <li>• Probate avoidance</li>
              </ul>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 font-lora shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Finding the right variable annuity match for you
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VariableAnnuities
