import React from 'react'
import Hero from '../components/Hero'

const HealthInsurance = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://img.freepik.com/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224140.jpg?t=st=1757674696~exp=1757678296~hmac=dc9b7098120cd97e052956ab25a605a18b5cd9a642c155bdba74d874f866bebd&w=1480"
        title="Health Insurance"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* What is Health Insurance */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customBlue2 mb-6">
                Health Insurance
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Health insurance is an insurance that covers the whole or a part of the risk of a person 
                incurring medical expenses, spreading the risk over numerous persons. By estimating the 
                overall risk of health risk and health system expenses over the risk pool, an insurer can 
                develop a routine finance structure, such as a monthly premium or payroll tax, to provide 
                the money to pay for the health care benefits specified in the insurance agreement.
              </p>
              <p className="text-lg text-customGray leading-relaxed">
                The benefit is administered by a central organization such as a government agency, private 
                business, or not-for-profit entity.
              </p>
            </div>
          </div>

          {/* Health Insurance Definition */}
          <div className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-lg text-blue-800 leading-relaxed">
                According to the Health Insurance Association of America, health insurance is defined as 
                "coverage that provides for the payments of benefits as a result of sickness or injury. 
                It includes insurance for losses from accident, medical expense, disability, or accidental 
                death and dismemberment"
              </p>
            </div>
          </div>

          {/* How Health Insurance Works */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                How Health Insurance Works
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-customGray mb-4">Network Coverage</h3>
                  <p className="text-customGray leading-relaxed">
                    Health insurance can be tricky to navigate. Managed care insurance plans require policyholders 
                    to receive care from a network of designated healthcare providers for the highest level of 
                    coverage. If patients seek care outside the network, they must pay a higher percentage of 
                    the cost. In some cases, the insurance company may even refuse payment outright for services 
                    obtained out of network.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">HMOs & POS Plans</h3>
                    <p className="text-green-700 text-sm">
                      Require patients to choose a primary care physician who oversees care, makes treatment 
                      recommendations, and provides referrals for medical specialists.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">PPOs</h3>
                    <p className="text-blue-700 text-sm">
                      Don't require referrals, but have lower rates for using in-network practitioners and services.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Considerations</h3>
                  <p className="text-yellow-700">
                    Insurance companies may deny coverage for services without preauthorization and refuse payment 
                    for name-brand drugs if generic versions are available. Always review your plan materials carefully.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Co-pays</h3>
                    <p className="text-purple-700 text-sm">Set fees for doctor visits and prescription drugs</p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-2">Deductibles</h3>
                    <p className="text-indigo-700 text-sm">Amount you pay before insurance covers claims</p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-pink-800 mb-2">Coinsurance</h3>
                    <p className="text-pink-700 text-sm">Percentage of costs you pay after meeting deductible</p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">High-Deductible Health Plans (HDHP)</h3>
                  <p className="text-red-700">
                    In 2020, HDHPs must have deductibles of at least $1,400 for individuals or $2,800 for families, 
                    with out-of-pocket maximums of $6,900/$13,800 respectively. These plans offer lower premiums 
                    and allow you to open a Health Savings Account (HSA) for qualified medical expenses.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-customGray mb-3">Auxiliary Products</h3>
                  <p className="text-customGray">
                    In addition to health insurance, qualified individuals can access disability insurance, 
                    critical illness insurance, and long-term care (LTC) insurance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Group Health Insurance */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                What Is a Group Health Insurance Plan?
              </h2>
              <p className="text-lg text-customGray leading-relaxed">
                Group Insurance health plans provide coverage to a group of members, usually comprised of company 
                employees or members of an organization. Group health members usually receive insurance at a reduced 
                cost because the insurer's risk is spread across a group of policyholders.
              </p>
            </div>
          </div>

          {/* How Group Health Insurance Works */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                How Group Health Insurance Works
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Plan Structure</h3>
                  <p className="text-green-700 leading-relaxed">
                    Group health insurance plans are purchased by companies and organizations, and then offered to its 
                    members or employees. Plans can only be purchased by groups, which means individuals cannot purchase 
                    coverage through these plans. Plans usually require at least 70% participation in the plan to be valid.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Plan Selection</h3>
                    <p className="text-blue-700 text-sm">
                      Once the organization chooses a plan, group members are given the option to accept or decline coverage. 
                      Plans may come in tiers with basic or advanced coverage options.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">Family Coverage</h3>
                    <p className="text-purple-700 text-sm">
                      Health insurance coverage may be extended to immediate family and dependents of group members for an extra cost.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Cost Benefits</h3>
                  <p className="text-yellow-700">
                    The cost of group health insurance is usually much lower than individual plans because the risk is 
                    spread across a higher number of people. This type of insurance is cheaper and more affordable 
                    than individual plans available on the market.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HealthInsurance
