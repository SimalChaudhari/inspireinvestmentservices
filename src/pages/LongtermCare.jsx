import React from 'react'
import Hero from '../components/Hero'

const LongtermCare = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://img.freepik.com/free-photo/realistic-scene-with-elderly-care-senior-people_23-2151231527.jpg?semt=ais_incoming&w=740&q=80"
        title="Long-term Care"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Protecting Your Loved Ones
              </h2>
              <p className="text-lg text-customGray leading-relaxed">
                It's important to help protect your loved ones from financial, physical and emotional burdens 
                if you should require long-term care.
              </p>
            </div>
          </div>

          {/* What is Long-term Care */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                What is Long-term Care?
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-lg text-blue-800 leading-relaxed">
                    Long-term care is the assistance or supervision you may need when you are not able to do 
                    some of the basic activities of daily living like bathing, dressing, or moving from a bed 
                    to a chair. You may need assistance if you suffer from an injury like a broken hip, an 
                    illness or a stroke.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Mental Health Considerations</h3>
                  <p className="text-yellow-700">
                    Others may need help because of mental deterioration called severe cognitive impairment 
                    that can be caused by Alzheimer's disease, other mental illness or brain disorders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Funding Long-term Care */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Funding Long-term Care
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Some options for funding long-term care include self-funding, government programs and 
                long-term care insurance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Self-funding</h3>
                  <p className="text-green-700 text-sm">Using personal savings and assets to pay for care</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Government Programs</h3>
                  <p className="text-blue-700 text-sm">Medicaid and other government assistance programs</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Long-term Care Insurance</h3>
                  <p className="text-purple-700 text-sm">Specialized insurance coverage for long-term care needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Long-term Care Insurance Benefits */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Long-term Care Insurance Benefits
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Knowing what the benefits of long-term care insurance might be can help you determine 
                whether it's right for you and your family. These benefits include:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-customGray mb-3">Flexibility in Care Decisions</h3>
                  <p className="text-customGray">
                    Giving you the flexibility to participate in deciding where to get care and who provides it
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Protect Retirement Savings</h3>
                  <p className="text-green-700">
                    Helping protect your retirement savings by letting you use them for what it was originally 
                    intended – enjoying retirement
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Family Protection</h3>
                  <p className="text-blue-700">
                    Helping protect the family from providing all the care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Components */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Basic Components of Long-term Care Insurance
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Benefit Amount</h3>
                  <p className="text-red-700">
                    This is the maximum amount of expenses covered in any single month or day. Benefit amounts vary by plan.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Benefit Period</h3>
                  <p className="text-yellow-700">
                    This is the minimum number of months the coverage will pay benefits for covered expenses.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Total Benefit Amount</h3>
                  <p className="text-green-700 mb-3">
                    The total benefit amount is determined by multiplying the monthly benefit amount by the benefit period. 
                    These are the funds that are available for covered care.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-green-800 text-sm font-medium mb-2">Example Calculation:</p>
                    <p className="text-green-700 text-sm">
                      Monthly benefit amount of $5,000 with a four-year benefit period:<br />
                      $5,000 (benefit amount) × 48 months (4 × 12 months) = $240,000 total benefit dollars available
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">Inflation Protection</h3>
                    <p className="text-purple-700 text-sm">
                      This is an optional feature available on some plans. Generally it increases the monthly 
                      maximum to help ensure the policy keeps pace with the increasing costs of care.
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Elimination Period</h3>
                    <p className="text-indigo-700 text-sm">
                      This is the amount of time that must pass before the benefits will become available. 
                      Just like a deductible, this is the out-of-pocket expense. The shorter the elimination 
                      period, the higher the premium will be.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Finding the right long-term care match for you
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LongtermCare
