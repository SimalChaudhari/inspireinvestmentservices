import Hero from '../components/Hero'

const LifeInsuranceGuide = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
        title="Finding the right life insurance match for you"
        titleSize="text-2xl md:text-[2.8rem]"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Finding the Right Life Insurance for You
              </h2>
              <p className="text-lg text-customGray leading-relaxed">
                If it's your first time shopping for life insurance, there's a good chance you may not know which option is the right one for you. Finding the best match may require some homework before you make your choice. Here's a breakdown of the various life insurance options to help you figure out which one fits best.
              </p>
            </div>
          </div>

          {/* Term Life Insurance Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Term Life Insurance
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Term life insurance has level premiums that last for a set number of years (the term). This life insurance includes a death benefit in the form of a lump sum of cash that's paid out to a beneficiary by the life insurance company if you die while this coverage is active. This lump sum can be used for a variety of things, such as burial expenses, mortgage, and debt payments, living expenses for your family, or donations, generally tax-free.
              </p>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Additionally, you may have the option to convert your policy to permanent coverage before the term ends. After the term expires the policy may either terminate or automatically renew annually. If your policy is at the end of the of the term period, then you may be able to renew it for another term or convert it to a permanent policy.
              </p>

              {/* Policy Highlights */}
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Policy Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span className="text-blue-700">It provides a generally tax-free death benefit for your loved ones.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span className="text-blue-700">Easy-to-understand.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span className="text-blue-700">Typically low-cost life insurance.</span>
                  </li>
                </ul>
              </div>

              {/* Is it right for me */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Is a term life insurance policy right for me?</h3>
                <p className="text-green-700 mb-4">
                  Term life insurance is a great choice for many people because it's simple and cost-effective. If you're on a tight budget, or you're a young person age 20-30 who is just starting to build your financial future, term life insurance can be a good match for you.
                </p>
                <p className="text-green-700">
                  Still not sure? Check out the video below to learn more about term life insurance.
                </p>
              </div>
            </div>
          </div>

          {/* Guaranteed Universal Life Insurance Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Guaranteed Universal Life Insurance
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Guaranteed universal life insurance is permanent coverage that provides the ability to guarantee a death benefit to any age up to a maximum age as stated in the policy, as long as the premiums are paid and the policy remains in force. Guaranteed universal life is not designed to generate cash value.
              </p>

              {/* Policy Highlights */}
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Policy Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <span className="text-purple-700">Can provide a guaranteed death benefit for your whole life.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <span className="text-purple-700">Death benefit passes to beneficiaries generally tax-free.</span>
                  </li>
                </ul>
              </div>

              {/* Is it right for me */}
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Is a guaranteed universal life insurance policy right for me?</h3>
                <p className="text-orange-700">
                  Anyone with a need for death benefit coverage who desires to buy a policy that can cover their entire life with less costly premiums compared to other permanent products.
                </p>
              </div>
            </div>
          </div>

          {/* Indexed Universal Life Insurance Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Indexed Universal Life Insurance (IUL)
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                Indexed universal life is insurance that offers death benefit protection, and the opportunity to earn tax-deferred interest on the interest credits linked to the performance of one or more stock market indices chosen. This feature gives you the potential for cash value accumulation plus, it offers downside protection in a poorly performing market because you do not participate directly in the stock market and the credited interest rate is never less than the minimum interest rate or zero percent (floor).
              </p>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                The upside is limited by either an index cap rate or an index participation rate. The index cap rate is the maximum interest rate that could be credited to the policy. The index participation rate is applied to the index change in order to calculate the index credit. The premium paid in the policy is not directly invested in any index or the stock market.
              </p>

              {/* Policy Highlights */}
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Policy Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span className="text-indigo-700">The death benefit is not generally subject to income taxes for the beneficiary.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span className="text-indigo-700">It offers the potential to grow cash value.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span className="text-indigo-700">The amount credited to the cash value grows tax-deferred without directly investing in the market.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span className="text-indigo-700">Flexible, adjustable premium, and death benefit amounts as needs change.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span className="text-indigo-700">It can be an expensive product depending on your goals.</span>
                  </li>
                </ul>
              </div>

              {/* Is it right for me */}
              <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Is an indexed universal life insurance policy right for me?</h3>
                <p className="text-teal-700 mb-4">
                  If interested in providing a death benefit for your beneficiaries with additional benefits, an indexed universal life insurance policy might be attractive to you for its upside growth potential and downside protection.
                </p>
                <p className="text-teal-700">
                  Watch the video below if you want to learn more about indexed universal life insurance.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Life Insurance Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeInsuranceGuide
