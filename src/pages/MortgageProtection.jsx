import Hero from '../components/Hero'

const MortgageProtection = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
        title="Mortgage Protection Insurance"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                What is Mortgage Protection Insurance?
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Mortgage protection insurance (MPI) is a type of life insurance designed to pay off your mortgage if you were to pass away — and some policies also cover mortgage payments (usually for a limited period of time) if you become disabled.
              </p>
            </div>
          </div>

          {/* Why Do I Need It Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Why Do I Need Mortgage Protection Insurance?
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Mortgage protection insurance helps your family avoid foreclosure if you die while you owe money on your mortgage loan. Some MPI policies may also compensate you for a limited time if you become disabled or lose your job. MPI works in the same basic way as a term life insurance policy.
              </p>
            </div>
          </div>

          {/* How Does It Work Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                How Does It Work?
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Coverage Details</h3>
                  <p className="text-blue-700">
                    MPPI can cover your monthly repayments in full so long as they don't exceed 65% of your gross annual salary and is available for both repayment (capital and interest) mortgages and interest-only mortgages.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Payment Duration</h3>
                  <p className="text-green-700">
                    Most plans that cover your mortgage will pay out for up to 12 months or until you return to work – whichever is sooner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Key Benefits of Mortgage Protection Insurance
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">🏠</div>
                  <h3 className="font-semibold text-customGray mb-2 text-center">Prevents Foreclosure</h3>
                  <p className="text-customGray text-sm text-center">Protects your family from losing their home if you pass away unexpectedly.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">💼</div>
                  <h3 className="font-semibold text-customGray mb-2 text-center">Disability Coverage</h3>
                  <p className="text-customGray text-sm text-center">Covers mortgage payments if you become disabled and cannot work.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">💰</div>
                  <h3 className="font-semibold text-customGray mb-2 text-center">Job Loss Protection</h3>
                  <p className="text-customGray text-sm text-center">Provides temporary relief if you lose your job and cannot make payments.</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">⚡</div>
                  <h3 className="font-semibold text-customGray mb-2 text-center">Quick Payout</h3>
                  <p className="text-customGray text-sm text-center">Fast processing and payment to ensure your family's financial security.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Types */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Types of Mortgage Protection Coverage
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Life Insurance Coverage</h3>
                  <p className="text-blue-700 text-sm">
                    Pays off the entire mortgage balance if you pass away, ensuring your family keeps their home.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Disability Coverage</h3>
                  <p className="text-green-700 text-sm">
                    Covers monthly mortgage payments if you become disabled and cannot work.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Job Loss Coverage</h3>
                  <p className="text-purple-700 text-sm">
                    Provides temporary payment assistance if you lose your job involuntarily.
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
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Coverage Limits</h3>
                  <p className="text-yellow-700">
                    Most policies cover up to 65% of your gross annual salary, so ensure this amount covers your mortgage payments.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Time Limitations</h3>
                  <p className="text-red-700">
                    Disability and job loss coverage typically lasts for 12 months or until you return to work, whichever comes first.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Policy Requirements</h3>
                  <p className="text-blue-700">
                    Available for both repayment (capital and interest) mortgages and interest-only mortgages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Mortgage Protection Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MortgageProtection
