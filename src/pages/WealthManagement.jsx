import Hero from '../components/Hero'

const WealthManagement = () => {
  return (
    <div>
      <Hero 
        backgroundImage="https://cdn.gobankingrates.com/wp-content/uploads/2023/10/iStock-1141141978-3.jpg?w=1280&quality=75&webp=1"
        title="Wealth Management"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />
      
      <div className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Main Content Section */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Comprehensive Wealth Management Solutions
              </h2>
              <p className="text-lg text-customGray leading-relaxed mb-6">
                We offer a variety of ways to help meet your unique wealth management needs. Whether you're looking to build and preserve wealth, save for retirement or leave something for the people and organizations you care about, we have many account and asset management options as well as professional services designed to help keep you on track to achieve your long-term goals.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Image */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="aspect-w-16 aspect-h-12 mb-6">
                <img 
                  src="https://eligiushomes.com/wp-content/uploads/2024/06/wealth-manager-vs-financial-advisor-1-1300x731.webp" 
                  alt="Wealth Management Planning"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-customGray mb-4">
                Professional Financial Planning
              </h3>
              <p className="text-customGray">
                Our experienced advisors work with you to create personalized strategies that align with your financial goals and risk tolerance.
              </p>
            </div>

            {/* Right Column - Services */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-customGray mb-6">
                Our Wealth Management Services
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-customBlue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-customGray mb-2">Investment Management</h4>
                    <p className="text-customGray text-sm">Diversified portfolio strategies tailored to your risk profile and investment timeline.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-customBlue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-customGray mb-2">Retirement Planning</h4>
                    <p className="text-customGray text-sm">Comprehensive strategies to help you build and preserve wealth for retirement.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-customBlue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-customGray mb-2">Estate Planning</h4>
                    <p className="text-customGray text-sm">Strategies to help you leave a meaningful legacy for your loved ones and causes you care about.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-customBlue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-customGray mb-2">Tax Optimization</h4>
                    <p className="text-customGray text-sm">Advanced tax strategies to help minimize your tax burden and maximize after-tax returns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-customGray mb-6">
                Why Choose Our Wealth Management Services?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">🎯</div>
                  <h3 className="font-semibold text-customGray mb-2 text-center">Personalized Approach</h3>
                  <p className="text-customGray text-sm text-center">Custom strategies designed specifically for your unique financial situation and goals.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">📈</div>
                  <h3 className="font-semibold text-customGray mb-2 text-center">Proven Track Record</h3>
                  <p className="text-customGray text-sm text-center">Years of experience helping clients achieve their long-term financial objectives.</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">🤝</div>
                  <h3 className="font-semibold text-customGray mb-2 text-center">Ongoing Support</h3>
                  <p className="text-customGray text-sm text-center">Continuous monitoring and adjustment to keep you on track toward your goals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button className="bg-customBlue text-white py-4 px-10 rounded-lg font-bold text-lg hover:bg-customBlue2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Wealth Management Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WealthManagement
