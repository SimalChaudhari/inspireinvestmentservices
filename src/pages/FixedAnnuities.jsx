import React from 'react'
import Hero from '../components/Hero'

const FixedAnnuities = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://lh7-us.googleusercontent.com/YKQMX6YHk000cFPdhDSGAE5uEy4GrOSwbCmTczL2bbb1K6X6_3plLGOrQH2H0W_AWjiRofMI4xTgswUfDTShN0uAT4n-ShUhWUUHcg36Gk2y7ETWJDUGOOYGXsdeZrPFQzaWKFvWH7rgO7AKYcmMexA"
        title="Fixed Annuities"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Understanding Fixed Annuities
              </h2>
              <p className="text-lg text-customGray leading-relaxed">
                Fixed annuities are designed to help you reach your long-term goals by providing a guaranteed 
                return for a set period of time. They may be a good addition to a retirement strategy, but 
                it's important to understand how they work.
              </p>
            </div>
          </div>

          {/* How Fixed Annuities Work */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                How Fixed Annuities Work
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg text-blue-800 leading-relaxed">
                  When you invest in a fixed annuity, you pay a lump sum to an insurance company. They then 
                  guarantee a stated rate of interest over a specific period of time. The interest accumulates 
                  on a tax-deferred basis, meaning you do not pay tax on the interest until you withdraw it 
                  or take it as income.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Key Features to Consider
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                There are several key features to consider with a fixed annuity.
              </p>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Tax-deferred Accumulation</h3>
                  <p className="text-green-700">
                    Generally, fixed annuities are purchased with a single payment. The account value grows 
                    tax deferred at the guaranteed rate. When you decide to take the earnings, they are 
                    taxed as ordinary income.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">Choice of Guarantee Periods</h3>
                  <p className="text-yellow-700">
                    Your money is invested for a specific period of time, which you select based on your 
                    investment time horizon.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Guarantee of Interest and Principal</h3>
                  <p className="text-purple-700">
                    The value of your fixed annuity increases when interest is added to your contract.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Flexible Income Options */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Flexible Income Options
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                You can take income from a fixed annuity in a number of ways:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-customGray mb-3">Lifetime Income Stream</h3>
                  <p className="text-customGray">
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
                    Some fixed annuities enable the policyholder to elect an optional living benefit. Such 
                    benefits can provide certain guarantees for contract withdrawals for life. These benefits 
                    may require additional fees, charges, or expenses, and may be subject to eligibility limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Avoiding Probate */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Avoiding Probate
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-lg text-yellow-700 leading-relaxed">
                  Fixed-annuity proceeds paid to the beneficiary upon death are excluded from estate probate. 
                  However, any tax-deferred earnings in the contract will be subject to ordinary income tax, 
                  and estate taxes would apply to the total value of the contract, if applicable. The payout 
                  at death is generally the accumulated value without any imposed charges or market value adjustment.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-customGray mb-4">
                Related Services
              </h3>
              <ul className="space-y-2 text-customGray">
                <li>• <a href="/annuity" className="text-blue-600 hover:text-blue-800">Annuity Overview</a></li>
                <li>• <a href="/variable-annuities" className="text-blue-600 hover:text-blue-800">Variable Annuities</a></li>
                <li>• <a href="/income-annuities" className="text-blue-600 hover:text-blue-800">Income Annuities</a></li>
                <li>• <a href="/retirement" className="text-blue-600 hover:text-blue-800">Retirement Planning</a></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-customGray mb-4">
                Fixed Annuity Benefits
              </h3>
              <ul className="space-y-2 text-customGray">
                <li>• Guaranteed returns for set period</li>
                <li>• Tax-deferred growth</li>
                <li>• Principal protection</li>
                <li>• Flexible income options</li>
                <li>• Probate avoidance</li>
              </ul>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Finding the right fixed annuity match for you
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FixedAnnuities
