import React from 'react'
import Hero from '../components/Hero'

const TraditionalIra = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://cdn.pixabay.com/photo/2020/09/09/14/47/man-5557864_1280.jpg"
        title="Traditional IRA"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
      />
      
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-customGray leading-relaxed mb-6">
              We understand that saving for retirement can be a challenge. Not only do you need the day-to-day discipline to stick with your savings strategy, but you have to keep up with IRA rules and regulations. We can help. One common retirement savings tool is a traditional IRA.
            </p>
            <p className="text-lg sm:text-xl text-customGray leading-relaxed mb-6">
              Traditional IRAs are tax-deferred, which simply means you generally won't pay taxes on the money in your IRA until you start withdrawing it. At that time, the money you take out of your IRA will be taxed just like regular income. On the front end, the money you deposit today into your traditional IRA may be deductible from your taxable income.
            </p>
            <p className="text-lg sm:text-xl text-customGray leading-relaxed">
              Many people find themselves in a lower tax bracket when they retire. This means that while you're working, you may get a bigger tax break on IRA contributions. Then, when you withdraw the money later in life, it's potentially taxed at a lower rate.
            </p>
          </div>

          {/* How much you can contribute */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-customGray mb-6">
              How much you can contribute
            </h2>
            <div className="space-y-4 text-lg text-customGray leading-relaxed">
              <p>
                Beginning with tax year 2020, an individual is eligible to contribute to a traditional IRA, regardless of age, as long as they have taxable compensation. 2019 and prior years, contributions could not be made for the year an individual turned 70½ and older. For 2020 and 2021, you can generally contribute up to $6,000.
              </p>
              <p>
                If you're 50 or older, you can make a $1,000 "catch-up" contribution.
              </p>
            </div>
          </div>

          {/* Do you qualify for a deduction? */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-customGray mb-6">
              Do you qualify for a deduction?
            </h2>
            <p className="text-lg text-customGray leading-relaxed mb-6">
              Your ability to deduct contributions today generally depends on your participation in your employer's retirement plan and your income.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-customGray mb-6">
                If you are:
              </h3>
              <ul className="space-y-4 text-lg text-customGray leading-relaxed">
                <li className="flex items-start">
                  <span className="text-customBlue font-bold mr-3">•</span>
                  <span><strong>Single</strong> and don't have a 401(k) or other retirement account through your employer, you can deduct your full contribution.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-customBlue font-bold mr-3">•</span>
                  <span><strong>Married</strong> and neither you nor your spouse has an employer retirement plan, you can deduct your full contribution.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-customBlue font-bold mr-3">•</span>
                  <span><strong>Covered by a plan</strong>, or your spouse has one through work, the amount of the contribution that can be deducted will depend on your modified adjusted gross income (MAGI).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What else you should consider */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-customGray mb-6">
              What else you should consider
            </h2>
            
            <div className="space-y-8">
              {/* Penalties */}
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-customGray mb-4">
                  Penalties
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you withdraw money from your IRA before age 59½, you may be required to pay a 10% IRS penalty in addition to income taxes – but there are exceptions. If you need the money for college, a first-time home purchase, or expenses for medical purposes, death, disability and health insurance due to a period of unemployment, you may not have to pay the early withdrawal penalty.*
                </p>
              </div>

              {/* Required Withdrawals */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-customGray mb-4">
                  Required Withdrawals
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When you reach age 72, the IRS generally requires you to withdraw a minimum amount each year. These are called "required minimum distributions," or RMDs. At Edward Jones, we calculate this amount for you automatically. So if you have IRAs outside Edward Jones, consider consolidating them so we can help make the RMD process easier for you.
                </p>
              </div>

              {/* Contribute All Year */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-customGray mb-4">
                  Contribute All Year
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You can contribute to a Traditional IRA throughout the year and up until your tax-filing deadline – usually around April 15.
                </p>
              </div>

              {/* Roth IRA Conversions */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-customGray mb-4">
                  Roth IRA Conversions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you have a Traditional IRA, it might make sense to convert some or all of it to a Roth IRA.
                </p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-customGray mb-6">
              Important Information:
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold">*</span> Withdrawals are subject to IRS rules and regulations. Please see your qualified tax professional for all the relevant information before making a decision.
              </p>
            </div>
          </div>

          {/* Contact Us Today */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-customGray mb-4">
                Ready to Start Your Traditional IRA?
              </h3>
              <p className="text-lg text-customGray mb-8 max-w-2xl mx-auto">
                Contact us today to discuss how a Traditional IRA can help you save for retirement.
              </p>
              <button 
                className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{backgroundColor: '#74a4cb'}}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TraditionalIra
