import Hero from '../components/Hero'

const WillAndTrust = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://silblawfirm.com/wp-content/uploads/2020/05/last-will.jpg"
        title="Will And Trust"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                What Is a Will and Why Do I Need One Now?
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                A will is a legal document that sets forth your wishes regarding the distribution of your property and the care of any minor children. If you die without a will, those wishes may not be carried out.
              </p>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Further, your heirs may be forced to spend additional time, money, and emotional energy to settle your affairs after you're gone.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-lg text-blue-800 leading-relaxed">
                  Wills can vary in their effectiveness, depending on the type, though no document will likely resolve every issue that arises after your death. Here's what you need to know about these vital documents.
                </p>
              </div>
            </div>
          </div>

          {/* Why You Should Have a Will Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Why You Should Have a Will
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Some people think that only the very wealthy or those with complicated assets need wills. However, there are many good reasons to have a will.
              </p>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">1. Asset Distribution</h3>
                  <p className="text-green-700">
                    You can be clear about who gets your assets. You can decide who gets what and how much.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">2. Asset Protection</h3>
                  <p className="text-yellow-700">
                    You can keep your assets out of the hands of people you don't want to have them (like an estranged relative).
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">3. Child Care Planning</h3>
                  <p className="text-purple-700">
                    You can identify who should care for your children. Without a will, the courts will decide.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">4. Easier Access</h3>
                  <p className="text-blue-700">
                    Your heirs will have a faster and easier time getting access to your assets.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">5. Tax Planning</h3>
                  <p className="text-red-700">
                    You can plan to save your estate money on taxes. You can also give gifts and charitable donations, which can help offset the estate tax.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What is a Trust Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                What is a Trust?
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                A trust is a fiduciary relationship in which one party, known as a trustor, gives another party, the trustee, the right to hold title to property or assets for the benefit of a third party, the beneficiary. Trusts are established to provide legal protection for the trustor's assets, to make sure those assets are distributed according to the wishes of the trustor, and to save time, reduce paperwork and, in some cases, avoid or reduce inheritance or estate taxes.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-lg text-green-800 leading-relaxed">
                  In finance, a trust can also be a type of closed-end fund built as a public limited company.
                </p>
              </div>

              {/* Trust Benefits */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Legal Protection</h3>
                  <p className="text-green-700 text-sm">
                    Provides legal protection for your assets
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Asset Distribution</h3>
                  <p className="text-blue-700 text-sm">
                    Ensures assets are distributed according to your wishes
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Efficiency</h3>
                  <p className="text-purple-700 text-sm">
                    Saves time and reduces paperwork
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ready to Plan Your Estate?
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WillAndTrust
