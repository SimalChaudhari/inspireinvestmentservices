import Hero from '../components/Hero'

const BuySellAgreement = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://www.vmcdn.ca/f/files/sooleader/spotlight-images/century-21-advantage-plus/adobestock_432232017.jpeg;w=960"
        title="Business insurance"
        title2="Buy-Sell Agreement"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#00604b]"
        titleSize2="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#38761d]"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Business Insurance: Buy-Sell Agreement
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Buy-sell agreement funded with life insurance Protect and extend the life of your business. From modest family operations to multi-billion dollar corporations, the death of an owner can seriously cripple a business. A buy-sell agreement allows for a smoother transition in ownership to the surviving owners.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Heirs Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-customGray mb-6">
                Heirs
              </h3>
              <p className="text-customGray leading-relaxed mb-4">
                Without a buy-sell agreement, the heirs of a deceased owner will inherit that owner's shares of the company, yet they may not want to be a part of the business. A buy-sell agreement provides a buyer for their inherited business interest, freeing them from the burden of taking on a role as an owner.
              </p>
              <p className="text-customGray leading-relaxed">
                This also protects the business from shares being sold to someone outside the current ownership.
              </p>
            </div>

            {/* Surviving Business Owners Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-customGray mb-6">
                Surviving Business Owners
              </h3>
              <p className="text-customGray leading-relaxed">
                The surviving owners need to have funds available to buy shares from the heirs. Borrowing funds at expensive interest rates, liquidating business assets or using personal property as collateral to fund the purchase all have risk and negative impacts.
              </p>
            </div>
          </div>

          {/* Life Insurance Solution */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                A Life Insurance Solution
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Life insurance is a cost-efficient and relatively simple way to fund a buy-sell agreement. Funding through life insurance is potentially guaranteed and is also generally tax free.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg text-blue-800 leading-relaxed">
                  Also useful in retirement - If a properly-funded cash value life insurance policy is used to fund the buy-sell agreement, the policy's potential cash value could be used to help buy out a retiring owner.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                How It Works
              </h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Case Study - Problem</h3>
                  <p className="text-green-700">
                    You are partners in a dental practice and have recently started working on succession planning. There is concern about where the funds will come from to buy-out the other partner's shares if one of them were to pass away.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">A Solution</h3>
                  <p className="text-blue-700">
                    A buy-sell agreement funded with life insurance can help one owner buy the other owner's share should either partner pass away. Their attorney drafts a buy-sell agreement. Your clients agree to purchase the other's interest in the business, purchase life insurance policies on one another, and make themselves the beneficiary on the other owner's life. The total amount of coverage on each owner is the value of each individual's ownership in the business. In order to provide maximum flexibility, each partner names the other partner as the contingent owner of the policies they've purchased.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Benefits for Business Owners
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-customBlue font-bold mr-3">•</span>
                    <span className="text-customGray">Establishes an agreed-upon method for determining business valuation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-customBlue font-bold mr-3">•</span>
                    <span className="text-customGray">Helps avoid unintended or unwelcome transfers of ownership</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-customBlue font-bold mr-3">•</span>
                    <span className="text-customGray">Prevent heirs being stuck with an inheritance they can't use</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-customBlue font-bold mr-3">•</span>
                    <span className="text-customGray">Have funds to transfer ownership of the business without probate</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-customBlue font-bold mr-3">•</span>
                    <span className="text-customGray">Protects the business from shares being sold to someone outside current ownership</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-customBlue font-bold mr-3">•</span>
                    <span className="text-customGray">Funding through life insurance is potentially guaranteed and offers a generally tax-free death benefit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hypothetical Case Study */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Hypothetical Case Study
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-customGray mb-4">Dental Practice Value: $1M</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Client A: Age 50</h3>
                  <p className="text-blue-700 mb-2">Owns a $500,000 15-year Term policy on partner (Male, Age 32, Preferred Non-Tobacco)</p>
                  <p className="text-blue-700 font-semibold">Annual premium: $250</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Client B: Age 32</h3>
                  <p className="text-green-700 mb-4">Owns two policies on partner (Male, Age 50, Preferred Non-Tobacco)</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Policies</th>
                          <th className="text-left py-2">Death Benefit</th>
                          <th className="text-left py-2">Annual Premium</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">15-year term</td>
                          <td className="py-2">$250,000</td>
                          <td className="py-2">$460</td>
                        </tr>
                        <tr>
                          <td className="py-2">IUL</td>
                          <td className="py-2">$250,000</td>
                          <td className="py-2">$20,795.46</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Buy-Sell Agreement Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuySellAgreement
