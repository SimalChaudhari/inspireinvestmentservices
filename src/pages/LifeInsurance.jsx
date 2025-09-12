import React from 'react'
import Hero from '../components/Hero'

const LifeInsurance = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://img.freepik.com/premium-photo/concepts-risk-management-insurance-financial-management-investments_1253175-4442.jpg?semt=ais_incoming&w=740&q=80"
        title="Life Insurance"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* What is Life Insurance */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                What is Life Insurance?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-lora mb-6">
                Life insurance is a contract between an insurance policy holder and an insurer or assures, 
                where the insurer promises to pay a designated beneficiary a sum of money in exchange for 
                a premium, upon the death of an insured person. Depending on the contract, other events 
                such as terminal illness or critical illness can also trigger payment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-lora">
                The policy holder typically pays a premium, either regularly or as one lump sum. Other 
                expenses, such as funeral expenses, can also be included in the benefits.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                How it Works
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg text-blue-800 leading-relaxed font-lora">
                  With permanent life insurance you can transfer a death benefit to your beneficiaries 
                  free from federal income taxes. Some plans also allow you to build equity, or cash value, 
                  on a tax-deferred basis. This type of life insurance is best suited for individuals or 
                  business owners with long-term life insurance needs.
                </p>
              </div>
            </div>
          </div>

          {/* How much you need */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                How Much You Need
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed font-lora">
                    The amount you need really depends on your financial goals. No two individuals' life 
                    insurance needs are the same. Your financial advisor will look at your entire financial 
                    picture to help you calculate the right amount for your situation. Factors could include: 
                    What you've already saved, what you're trying to save and what you want to leave behind.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">When to Review Your Coverage</h3>
                  <p className="text-yellow-700">
                    Over time your needs and goals will change. Even if you have coverage in place today, 
                    it's important to review it with your financial advisor periodically, particularly after:
                  </p>
                  <ul className="text-yellow-700 mt-3 space-y-1">
                    <li>• The addition of a child</li>
                    <li>• Change in marital status</li>
                    <li>• A change in home ownership</li>
                    <li>• When changing jobs if your policy was provided through your employer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What you can expect to pay */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                What You Can Expect to Pay
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Cost Comparison</h3>
                  <p className="text-red-700">
                    Because of the lifetime benefits it provides, permanent insurance can be three to five 
                    times higher, on average, than a term policy. The primary reason for this is that unlike 
                    term life insurance, which only covers you for a set period of time, with permanent 
                    insurance you have coverage for as long as you pay your premiums.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Premium Factors</h3>
                  <p className="text-gray-700">
                    The amount you pay can be based on your age, gender, health and the type and amount of 
                    coverage you choose. Permanent insurance premiums are generally level, and expenses of 
                    the policy are typically balanced out after 20 years.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Life Insurance */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                Types of Life Insurance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-lora mb-6">
                There are four major types of life insurance policies. These life insurance types are:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">1. Whole Life Insurance</h3>
                    <p className="text-blue-700 text-sm">Provides lifetime coverage with fixed premiums and guaranteed cash value growth.</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">2. Term Life Insurance</h3>
                    <p className="text-green-700 text-sm">Coverage for a specific period with lower premiums and no cash value.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">3. Universal Life Insurance</h3>
                    <p className="text-purple-700 text-sm">Flexible premiums and death benefits with potential for cash value growth.</p>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-2">4. Variable Universal Life Insurance</h3>
                    <p className="text-indigo-700 text-sm">Investment component with variable returns and flexible premiums.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Term Insurance Explanation */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-lora mb-6">
                What Does Term Insurance Mean?
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed font-lora">
                  Term insurance is a type of life insurance policy that provides coverage for a certain 
                  period of time or a specified "term" of years. If the insured dies during the time period 
                  specified in the policy and the policy is active, or in force, a death benefit will be paid.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 font-lora shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Finding the right life insurance match for you
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeInsurance
