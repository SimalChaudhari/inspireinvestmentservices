import React from 'react'
import Hero from '../components/Hero'

const RothIraConversion = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://cdn.pixabay.com/photo/2017/08/30/18/19/bali-2698078_1280.jpg"
        title="Roth IRA Conversion"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-lora">
                Is a Roth IRA Conversion the Right Strategy for You?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Roth conversion is a strategy that allows you to pay income taxes on some or all of 
                your retirement assets today, rather than when you withdraw them in retirement. It's 
                done by converting a Traditional IRA to a Roth IRA, and, with few exceptions, anyone 
                is eligible to convert regardless of age or income.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-lora">
                What are the benefits of a Roth IRA conversion?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike with a Traditional IRA, you're generally not taxed when you withdraw contributions 
                and earnings from your Roth IRA – as long as your Roth IRA is at least five years old 
                and you're 59 ½ or older. If not, the earnings portion of the withdrawal may be subject 
                to taxes and a 10% penalty, unless the exception applies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Tax Advantages
                  </h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• You may pay lower taxes if your current tax rate is lower than your expected tax rate in retirement</li>
                    <li>• Tax-free withdrawals in retirement (with conditions)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    Flexibility & Growth
                  </h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• Diversifying your retirement assets by tax treatment may give you greater flexibility to manage your taxable income in retirement</li>
                    <li>• No minimum distributions (RMDs) are required while the original account holder is alive</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg mt-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Legacy Benefits
                </h3>
                <p className="text-purple-800">
                  You may be able to create a tax-free legacy for your heirs.
                </p>
              </div>
            </div>

            {/* Rules & Limits Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-lora">
                Roth IRA Rules & Limits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before converting your IRA, there are important tax rules and considerations. If you do 
                decide to convert to a Roth, the taxes you'll owe for the conversion generally will be 
                based on the value of the investments in your IRA at the time. Whatever amount you 
                convert may be included as part of your taxable income in that year.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                  Important Considerations
                </h3>
                <p className="text-yellow-800 mb-4">
                  And remember: Converting a Traditional IRA to a Roth IRA is not an all-or-nothing 
                  decision – converting a portion of your Traditional IRA also is a strategy to consider.
                </p>
                <p className="text-yellow-800">
                  Keep your end goal in mind when deciding to convert to a Roth. Consider these factors:
                </p>
              </div>
            </div>

            {/* Decision Factors */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-lora">
                Key Factors to Consider
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Tax Affordability
                  </h3>
                  <p className="text-gray-700">
                    Will you be able to afford the taxes due?
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Tax Rate Analysis
                  </h3>
                  <p className="text-gray-700">
                    What is your tax rate now, and what will it be in the future?
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Withdrawal Timeline
                  </h3>
                  <p className="text-gray-700">
                    When do you need to make withdrawals?
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-lora">
                Ready to Explore Roth IRA Conversion?
              </h3>
              <p className="text-gray-700 mb-6">
                Our financial advisors can help you determine if a Roth IRA conversion is the right 
                strategy for your retirement planning and guide you through the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More About IRAs
                </button>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-lora">
                Related Services
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="/roth-ira" className="text-blue-600 hover:text-blue-800">Roth IRA</a></li>
                <li>• <a href="/traditional-ira" className="text-blue-600 hover:text-blue-800">Traditional IRA</a></li>
                <li>• <a href="/what-is-ira" className="text-blue-600 hover:text-blue-800">What is an IRA?</a></li>
                <li>• <a href="/401k-rollovers" className="text-blue-600 hover:text-blue-800">401(k) Rollovers</a></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-lora">
                Conversion Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pay taxes now, withdraw tax-free later</li>
                <li>• No required minimum distributions</li>
                <li>• Tax-free growth potential</li>
                <li>• Flexible withdrawal timing</li>
                <li>• Estate planning advantages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RothIraConversion
