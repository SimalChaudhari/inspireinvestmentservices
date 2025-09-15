import React from 'react'
import Hero from '../components/Hero'

const RothIra = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://cdn.pixabay.com/photo/2016/11/29/04/16/beach-1867271_1280.jpg"
        title="Roth IRA"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-customGray mb-4">
                Is a Roth IRA Right for You?
              </h2>
              <p className="text-customGray leading-relaxed mb-4">
                Do you think taxes when you retire will be higher or lower than they are today? 
                If you suspect they are likely to be higher, a Roth IRA may be a good option for 
                your retirement savings.
              </p>
              <p className="text-customGray leading-relaxed">
                The money you contribute to a Roth IRA today has already been taxed, so when you 
                retire and start withdrawing, the money – and any potential growth in the account – 
                may be tax free. And Roth IRAs offer a lot of flexibility even before you retire.
              </p>
            </div>

            {/* Contribution Limits */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-customGray mb-4">
                How Much You Can Contribute
              </h2>
              <p className="text-customGray leading-relaxed mb-4">
                You can contribute to a Roth IRA as long as you (or your spouse) have taxable 
                compensation. How much you can contribute depends on your modified adjusted gross 
                income (MAGI).
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Contribution Limits
                </h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• A "full contribution" for 2020 and 2021 is <strong>$6,000</strong></li>
                  <li>• If you're 50 or older, you can contribute an additional <strong>$1,000</strong> (catch-up contribution)</li>
                  <li>• If you qualify for a partial contribution, your financial advisor can help you determine how much you can contribute</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  Not Eligible for Direct Contribution?
                </h3>
                <p className="text-yellow-800">
                  If you are not eligible to make a contribution at all, a Roth IRA isn't out of the question. 
                  You may still be able to take advantage of tax-free income in retirement with a 
                  <strong> Roth conversion</strong>. Please consult with your tax advisor.
                </p>
              </div>
            </div>

            {/* Withdrawal Rules */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-customGray mb-4">
                When You Can Take Money Out
              </h2>
              <p className="text-customGray leading-relaxed mb-4">
                You're generally not taxed or penalized when you withdraw your Roth IRA contributions 
                and earnings. However, if your Roth IRA account is not at least 5 years old or if 
                you're not yet 59 ½, the earnings portion of the withdrawal may be subject to taxes 
                and a 10% penalty, unless an exception applies.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Key Advantages
                </h3>
                <ul className="text-green-800 space-y-2">
                  <li>• <strong>No Required Minimum Distributions (RMDs):</strong> Unlike Traditional IRAs, the IRS does not require the original account holder of a Roth to take any required minimum distributions when they reach age 72</li>
                  <li>• <strong>You control when you want to withdraw your money</strong></li>
                  <li>• <strong>Tax-free growth:</strong> If you don't need the money in your Roth, you can leave it alone and it may continue to be tax free – and so will any potential growth</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-customGray mb-4">
                Ready to Start Your Roth IRA?
              </h3>
              <p className="text-customGray mb-6">
                Our financial advisors can help you determine if a Roth IRA is right for your 
                retirement strategy and guide you through the setup process.
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
              <h3 className="text-xl font-semibold text-customGray mb-4">
                Related Services
              </h3>
              <ul className="space-y-2 text-customGray">
                <li>• <a href="/traditional-ira" className="text-blue-600 hover:text-blue-800">Traditional IRA</a></li>
                <li>• <a href="/what-is-ira" className="text-blue-600 hover:text-blue-800">What is an IRA?</a></li>
                <li>• <a href="/401k-rollovers" className="text-blue-600 hover:text-blue-800">401(k) Rollovers</a></li>
                <li>• <a href="/roth-ira-conversion" className="text-blue-600 hover:text-blue-800">Roth IRA Conversion</a></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-customGray mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-customGray">
                <li>• Tax-free withdrawals in retirement</li>
                <li>• No age limit for contributions</li>
                <li>• No required minimum distributions</li>
                <li>• Income limits apply</li>
                <li>• 5-year rule for earnings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RothIra