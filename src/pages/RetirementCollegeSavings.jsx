import React from 'react'
import Hero from '../components/Hero'

const RetirementCollegeSavings = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
        title="Retirement & College Savings"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* What is an IRA? */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-lora mb-6">
              What is an IRA?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-lora mb-6">
              Individual retirement accounts, known as IRAs, are designed to help investors save for retirement. 
              Accounts are set up through a financial institution and are given special tax treatment by the IRS. 
              Unlike a 401(k), an IRA is not tied to an investor's employer.
            </p>
          </div>

          {/* Navigate the ins and outs of IRAs */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-lora mb-6">
              Navigate the ins and outs of IRAs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-lora">
              Whether you're a seasoned investor or still a few years away, let's take a closer look at how 
              individual retirement accounts (IRAs) might meet your needs.
            </p>
          </div>

          {/* How does an IRA account work? */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-lora mb-6">
              How does an IRA account work?
            </h2>
            <ul className="space-y-4 text-lg text-gray-600 leading-relaxed font-lora">
              <li className="flex items-start">
                <span className="text-customBlue font-bold mr-3">•</span>
                <span>IRAs help individuals save for retirement by investing in stocks, bonds, certificates of deposit (CDs), mutual funds and ETFs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-customBlue font-bold mr-3">•</span>
                <span>Only one person can own and contribute to an IRA. You and your spouse each can have one, but you can't share one.</span>
              </li>
              <li className="flex items-start">
                <span className="text-customBlue font-bold mr-3">•</span>
                <span>Certain rules must be followed, and you may pay penalties if you take your money out before you reach a certain age.</span>
              </li>
            </ul>
          </div>

          {/* Do You Pay Taxes on an IRA? */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-lora mb-6">
              Do You Pay Taxes on an IRA?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-lora mb-4">
              These types of accounts are also given special tax treatment by the IRS. Unlike a savings account at a bank or a regular brokerage account, any growth inside a Traditional IRA is tax deferred.* In a Roth IRA, any growth is distributed tax-free.**
            </p>
          </div>

          {/* Which IRA makes the most sense for you? */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-lora mb-6">
              Which IRA makes the most sense for you?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-lora mb-6">
              IRAs come in two forms and have different approaches to saving:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              <div className="bg-gray-50 rounded-lg p-8 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-lora">
                  Traditional IRA
                </h3>
                <p className="text-gray-600 leading-relaxed font-lora">
                  A Traditional IRA is a tax-deferred retirement account. You save today and are taxed when you withdraw the money.*
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-lora">
                  Roth IRA
                </h3>
                <p className="text-gray-600 leading-relaxed font-lora">
                  In a Roth IRA, you don't get any tax deductions for the contribution today, but can withdraw the assets when you retire without paying taxes.** There's no age limit to contribute.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-lora mt-6">
              IRAs have a few additional differences, but your financial advisor can help you determine which savings vehicle best meets your needs.
            </p>
          </div>

          {/* Difference Between an IRA and 401(k) */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-lora mb-6">
              Difference Between an IRA and 401(k)
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-lora">
              <p>
                401(k)s are pre-tax employer-sponsored retirement plans that are part of an employee's benefits package. Many employers will match your 401(k) contributions up to a certain percentage or dollar amount.
              </p>
              <p>
                Conversely, you can open an IRA at most investment firms. These accounts are not tied to your employer and are transferable between institutions. IRAs may also allow you more flexibility in your investment choices, since you're able to choose the firm you invest with as well as the types of investments you prefer.
              </p>
              <p>
                This isn't an either/or proposition. Opening both an IRA and 401k can be part of your retirement savings strategy. Discuss your options with a financial advisor.
              </p>
            </div>
          </div>

          {/* Important Information */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 font-lora mb-6">
              Important Information:
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <ul className="space-y-3 text-lg text-gray-700 leading-relaxed font-lora">
                <li>
                  <span className="font-bold">*</span> Early withdrawals are subject to ordinary income tax and a 10% penalty if you take a distribution before reaching age 59½.
                </li>
                <li>
                  <span className="font-bold">**</span> Earnings distributions from a Roth IRA may be subject to taxes and a 10% penalty if the account is less than five years old and the owner is under age 59½.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-lora mb-6">
              Plan for Your Future
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-lora">
              Whether you're planning for retirement or saving for your children's education, 
              we offer comprehensive solutions to help you achieve your long-term financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="bg-gray-50 rounded-lg p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-lora">
                Retirement Planning
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-lora">
                Secure your golden years with our comprehensive retirement planning services. 
                From traditional and Roth IRAs to 401(k) rollovers, we help you build a 
                retirement strategy that fits your unique needs and timeline.
              </p>
              <ul className="space-y-2 text-gray-600 font-lora">
                <li>• Traditional IRA</li>
                <li>• Roth IRA</li>
                <li>• 401(k) Rollovers</li>
                <li>• Roth IRA Conversion</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-lora">
                College Education Savings
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-lora">
                Give your children the gift of education with our college savings strategies. 
                The sooner you start saving, the better, because time is on your side. 
                We'll help you choose the right education savings plan for your family.
              </p>
              <ul className="space-y-2 text-gray-600 font-lora">
                <li>• 529 Education Savings Plans</li>
                <li>• Coverdell Education Savings Accounts</li>
                <li>• UGMA/UTMA Accounts</li>
                <li>• Education Tax Benefits</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <button 
              className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-300 font-lora shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{backgroundColor: '#74a4cb'}}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RetirementCollegeSavings
