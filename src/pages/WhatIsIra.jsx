import React from 'react'
import Hero from '../components/Hero'

const WhatIsIra = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://cdn.pixabay.com/photo/2015/01/07/15/52/family-591581_1280.jpg"
        title="What is an IRA?"
        titleSize="text-3xl md:text-5xl font-semibold"
      />
      
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* What is an IRA? */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-customGray mb-6">
              What is an IRA?
            </h2>
            <p className="text-lg sm:text-xl text-customGray leading-relaxed mb-6">
              Individual retirement accounts, known as IRAs, are designed to help investors save for retirement. 
              Accounts are set up through a financial institution and are given special tax treatment by the IRS. 
              Unlike a 401(k), an IRA is not tied to an investor's employer.
            </p>
          </div>

          {/* Navigate the ins and outs of IRAs */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-customGray mb-6">
              Navigate the ins and outs of IRAs
            </h2>
            <p className="text-lg text-customGray leading-relaxed">
              Many savings vehicles are designed to help you prepare for one of the biggest financial goals you'll ever have – retirement. 
              Whether this time is just around the corner or still a few years away, let's take a closer look at how 
              individual retirement accounts (IRAs) might meet your needs.
            </p>
          </div>

          {/* How does an IRA account work? */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-customGray mb-6">
              How does an IRA account work?
            </h2>
            <ul className="space-y-4 text-lg text-customGray leading-relaxed">
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
            <h2 className="text-xl sm:text-2xl font-bold text-customGray mb-6">
              Do You Pay Taxes on an IRA?
            </h2>
            <p className="text-lg text-customGray leading-relaxed mb-4">
              These types of accounts are also given special tax treatment by the IRS. Unlike a savings account at a bank or a regular brokerage account, any growth inside a Traditional IRA is tax deferred.* In a Roth IRA, any growth is distributed tax-free.**
            </p>
          </div>

          {/* Which IRA makes the most sense for you? */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-customGray mb-6">
              Which IRA makes the most sense for you?
            </h2>
            <p className="text-lg text-customGray leading-relaxed mb-6">
              IRAs come in two forms and have different approaches to saving:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              <div className="bg-gray-50 rounded-lg p-8 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-customGray mb-4">
                  Traditional IRA
                </h3>
                <p className="text-customGray leading-relaxed">
                  A Traditional IRA is a tax-deferred retirement account. You save today and are taxed when you withdraw the money.*
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-customGray mb-4">
                  Roth IRA
                </h3>
                <p className="text-customGray leading-relaxed">
                  In a Roth IRA, you don't get any tax deductions for the contribution today, but can withdraw the assets when you retire without paying taxes.** There's no age limit to contribute.
                </p>
              </div>
            </div>

            <p className="text-lg text-customGray leading-relaxed mt-6">
              IRAs have a few additional differences, but your financial advisor can help you determine which savings vehicle best meets your needs.
            </p>
          </div>

          {/* Difference Between an IRA and 401(k) */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-customGray mb-6">
              Difference Between an IRA and 401(k)
            </h2>
            <div className="space-y-6 text-lg text-customGray leading-relaxed">
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
            <h2 className="text-xl sm:text-2xl font-bold text-customGray mb-6">
              Important Information:
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <li>
                  <span className="font-bold">*</span> Early withdrawals are subject to ordinary income tax and a 10% penalty if you take a distribution before reaching age 59½.
                </li>
                <li>
                  <span className="font-bold">**</span> Earnings distributions from a Roth IRA may be subject to taxes and a 10% penalty if the account is less than five years old and the owner is under age 59½.
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us Today */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
              <h3 className="text-xl sm:text-2xl font-bold text-customGray mb-4">
                Contact Us Today
              </h3>
              <p className="text-lg text-customGray mb-8 max-w-2xl mx-auto">
                To learn more about IRAs in general or discuss holding your IRA.
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

export default WhatIsIra
