import React from 'react'
import Hero from '../components/Hero'

const IncomeAnnuities = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://lh7-us.googleusercontent.com/YKQMX6YHk000cFPdhDSGAE5uEy4GrOSwbCmTczL2bbb1K6X6_3plLGOrQH2H0W_AWjiRofMI4xTgswUfDTShN0uAT4n-ShUhWUUHcg36Gk2y7ETWJDUGOOYGXsdeZrPFQzaWKFvWH7rgO7AKYcmMexA"
        title="Income Annuities"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Understanding Income Annuities
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                We typically recommend people shy away from investments promising any type of "guarantee." 
                However, income annuities (sometimes referred to as "immediate annuities" or "deferred income 
                annuities," depending on when income payments begin) do offer a predictable guaranteed stream 
                of income that you can't outlive. As with any investment, though, there are trade-offs.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg text-blue-800 leading-relaxed">
                  With an income annuity, you give the insurance company a lump sum in exchange for a guaranteed 
                  stream of income. Once the money is given to the insurance company, you generally no longer 
                  have access to it. Therefore, income annuities are usually best suited for investors who want 
                  to maximize their income.
                </p>
              </div>
            </div>
          </div>

          {/* 5 Key Features */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                5 Key Features to Consider with an Income Annuity
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">1. Income Payments</h3>
                  <p className="text-green-700">
                    Generally, these remain level over time, and they can begin immediately or two to seven 
                    but no more than 10 years in the future.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">2. Flexibility</h3>
                  <p className="text-yellow-700">
                    Generally, these remain level over time, and they can begin immediately or two to seven 
                    but no more than 10 years in the future.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">3. Taxes</h3>
                  <p className="text-purple-700">
                    Some income annuities may offer tax-advantaged income when payments are considered part 
                    return of principal and part interest.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">4. Income Payment Options</h3>
                  <p className="text-blue-700">
                    You or your beneficiary can receive income payments throughout your life or for a set period 
                    of time. Depending on the income payment option you select, your beneficiary may receive a 
                    death benefit should you pass away.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">5. Fees & Expenses</h3>
                  <p className="text-red-700">
                    While there are not specific fees or expenses taken out of the income payments you receive, 
                    the insurance company does factor fees and expenses into the income payment. Fees and expenses 
                    generally cover the insurance company's administrative expenses, the cost of offering income 
                    payments for life or for the chosen period, and profits to the insurance company and agent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Income Annuities */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Types of Income Annuities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Immediate Annuities</h3>
                  <p className="text-green-700 text-sm">
                    Income payments begin immediately after the lump sum is paid to the insurance company.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Deferred Income Annuities</h3>
                  <p className="text-blue-700 text-sm">
                    Income payments begin at a future date, typically 2-10 years after the initial investment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Considerations */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Important Considerations
              </h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Liquidity Trade-off</h3>
                  <p className="text-yellow-700">
                    Once you purchase an income annuity, you generally cannot access the principal amount. 
                    This is a significant trade-off for the guaranteed income stream.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Inflation Risk</h3>
                  <p className="text-red-700">
                    Most income annuities provide fixed payments that don't increase with inflation, which 
                    could reduce your purchasing power over time.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Best for Income Maximization</h3>
                  <p className="text-blue-700">
                    Income annuities are typically best suited for investors who prioritize maximizing their 
                    guaranteed income over maintaining access to their principal.
                  </p>
                </div>
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
                <li>• <a href="/fixed-annuities" className="text-blue-600 hover:text-blue-800">Fixed Annuities</a></li>
                <li>• <a href="/variable-annuities" className="text-blue-600 hover:text-blue-800">Variable Annuities</a></li>
                <li>• <a href="/retirement" className="text-blue-600 hover:text-blue-800">Retirement Planning</a></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-customGray mb-4">
                Income Annuity Benefits
              </h3>
              <ul className="space-y-2 text-customGray">
                <li>• Guaranteed lifetime income</li>
                <li>• Cannot outlive your money</li>
                <li>• Predictable payments</li>
                <li>• Tax-advantaged options</li>
                <li>• Death benefit options</li>
              </ul>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Finding the right income annuity match for you
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeAnnuities
