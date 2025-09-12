import React from 'react'
import Hero from '../components/Hero'

const Rollovers401k = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1603201667230-bd139210db18?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="401(k) Rollover Options"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-lora mb-6">
              Understanding Your 401(k) Rollover Options
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-lora mb-6">
              It's important to understand your retirement plan options when you leave your employer. 
              If you have retired or changed jobs, you may have questions about whether to roll over 
              your employer's 401(k) retirement plan.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-lora">
              You typically have four options for your retirement plan assets:
            </p>
          </div>

          {/* Four Options Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Option #1</h3>
              <p className="text-blue-800 font-medium">Leave It</p>
              <p className="text-blue-700 text-sm mt-2">Leave the money in your former employer's 401(k) plan</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Option #2</h3>
              <p className="text-green-800 font-medium">Move It</p>
              <p className="text-green-700 text-sm mt-2">Move the money to your new employer's 401(k) plan</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Option #3</h3>
              <p className="text-purple-800 font-medium">Roll It</p>
              <p className="text-purple-700 text-sm mt-2">Roll over the money to a Traditional or Roth IRA</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Option #4</h3>
              <p className="text-red-800 font-medium">Take It</p>
              <p className="text-red-700 text-sm mt-2">Cash out the 401(k) account (subject to tax consequences)</p>
            </div>
          </div>

          {/* Option 1: Leave It */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-lora">
                Option #1: Leaving money in your former employer's 401(k) plan (Leave It)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Leaving money in your current 401(k) may be an option, depending on the terms of your plan. 
                Many factors – including the option to add money and your investment choices – depend on 
                the terms of your plan, but typically:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Ability to Add Money</h3>
                    <p className="text-gray-700 text-sm">Once you leave your employer, you generally won't be able to add money to your plan.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Investment Choices</h3>
                    <p className="text-gray-700 text-sm">401(k) plans typically have a more limited number of investment options compared to an IRA but may include investments you can't get through an IRA.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Available Services</h3>
                    <p className="text-gray-700 text-sm">Some plans may offer educational materials, planning tools, telephone help lines and workshops. Your plan may or may not provide access to a financial advisor.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Fees and Expenses</h3>
                    <p className="text-gray-700 text-sm">401(k) fees and expenses often include administrative fees, investment-related expenses, and distribution fees. These fees and expenses may be lower than the fees and expenses of an IRA.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Penalty-free Distributions</h3>
                    <p className="text-gray-700 text-sm">Generally, you can take money from your plan without tax penalties at age 55, if you leave your employer in the calendar year you turn 55 or older.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Required Minimum Distributions</h3>
                    <p className="text-gray-700 text-sm">Generally, you must take minimum distributions from your former employer's plan beginning at age 72.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Option 2: Move It */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-lora">
                Option #2: Move the money to your new employer's 401(k) plan (Move It)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Moving money to your new employer's 401(k) may be an option, depending on whether your 
                current employer has a 401(k) plan and the terms of the plan. Like your former employer's 
                plan, many factors ultimately depend on the terms of your plan, but typically:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Ability to Add Money</h3>
                    <p className="text-gray-700 text-sm">You'll generally be able to add money to your new employer's plan, as long as you meet the plan's requirements. This option also allows you to consolidate your retirement accounts, which may make it easier to monitor your investments and simplify account information at tax time.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Investment Choices</h3>
                    <p className="text-gray-700 text-sm">401(k) plans typically have a more limited number of investment options compared to an IRA but may include investments you can't get through an IRA.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Available Services</h3>
                    <p className="text-gray-700 text-sm">Some plans may offer educational materials, planning tools, telephone help lines and workshops. Your plan may or may not provide access to a financial advisor.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Fees and Expenses</h3>
                    <p className="text-gray-700 text-sm">401(k) fees and expenses often include administrative fees, investment-related expenses, and distribution fees. These fees and expenses may be lower than the fees and expenses of an IRA.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Penalty-free Distributions</h3>
                    <p className="text-gray-700 text-sm">Generally, you can take money from your plan without tax penalties at age 55, if you leave your employer in the calendar year you turn 55 or older.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Required Minimum Distributions</h3>
                    <p className="text-gray-700 text-sm">Generally, you must take minimum distributions from your plan beginning at age 72, unless you are still working at the company.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-6">
                <p className="text-blue-800">
                  <strong>Important:</strong> Contact your plan administrator to learn more about the terms of your plan, including your plan's fees.
                </p>
              </div>
            </div>
          </div>

          {/* Option 3: Roll It */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-lora">
                Option #3: Roll over the 401(k) to a Traditional or Roth IRA (Roll It)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Rolling your 401(k) into an IRA is another option. With an IRA:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Ability to Add Money</h3>
                    <p className="text-gray-700 text-sm">You should be able to add money to your IRA, as long as you meet certain income requirements. This allows you to consolidate your retirement and other accounts, which may make it easier to monitor your investments and simplify account information at tax time.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Investment Choices</h3>
                    <p className="text-gray-700 text-sm">Traditional and Roth IRAs typically have a broader range of investment options than employer plans, but you may not have access to the same investments that are in your plan.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Available Services</h3>
                    <p className="text-gray-700 text-sm">Through our face-to-face approach to serving clients, your financial advisor can help you identify and implement strategies to help you reach your financial goals.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Fees and Expenses</h3>
                    <p className="text-gray-700 text-sm">IRA fees generally include an annual account fee, investment-related expenses, and termination fees. For the current fee schedule, contact your financial advisor.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Penalty-free Distributions</h3>
                    <p className="text-gray-700 text-sm">Generally, you can take money from IRA without tax penalties at age 59 ½.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Required Minimum Distributions</h3>
                    <p className="text-gray-700 text-sm">Generally, you must take minimum distributions from a traditional IRA beginning at age 72.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Option 4: Take It */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-lora">
                Option #4: Cashing out your 401(k) (Take It)
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <p className="text-red-800 leading-relaxed">
                  While withdrawing your money is an option, in most circumstances, it means those funds 
                  will not be there when you need them in retirement. In addition, cashing out your 401(k) 
                  generally means you'll have to pay taxes on the withdrawal, and there is typically an 
                  additional 10% tax penalty if you are under age 59½, unless you left your employer in 
                  the calendar year you turned age 55 or older.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-lora">
              Need Help Deciding?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Our financial advisors can help you evaluate your 401(k) rollover options and choose 
              the strategy that best fits your retirement goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Learn More About IRAs
              </button>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-lora">
                Related Services
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="/roth-ira" className="text-blue-600 hover:text-blue-800">Roth IRA</a></li>
                <li>• <a href="/traditional-ira" className="text-blue-600 hover:text-blue-800">Traditional IRA</a></li>
                <li>• <a href="/roth-ira-conversion" className="text-blue-600 hover:text-blue-800">Roth IRA Conversion</a></li>
                <li>• <a href="/what-is-ira" className="text-blue-600 hover:text-blue-800">What is an IRA?</a></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-lora">
                Key Considerations
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tax implications of each option</li>
                <li>• Investment flexibility and choices</li>
                <li>• Fees and expenses comparison</li>
                <li>• Required minimum distributions</li>
                <li>• Penalty-free withdrawal ages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rollovers401k
