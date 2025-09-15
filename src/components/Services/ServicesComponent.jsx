import { useState } from 'react'

const ServicesComponent = () => {
  const [pageReactions, setPageReactions] = useState({})

  const handlePageReaction = (emoji, count) => {
    setPageReactions(prev => ({
      ...prev,
      [emoji]: count
    }))
  }

  const services = [
    {
      id: 1,
      title: "Wealth Management",
      description: "From our Advisory Solutions, to our Trust Company you can find solutions to help build and protect your family's wealth.",
      image: "https://picsum.photos/400/300?random=1"
    },
    {
      id: 2,
      title: "Tax - Free Retirement",
      description: "Saving for retirement is important financial goals to many investors. We offer a variety of investment options that can help.",
      image: "https://picsum.photos/400/300?random=2"
    },
    {
      id: 3,
      title: "College Education Savings",
      description: "The sooner you start saving for education, the better, because time is on your side.",
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      id: 4,
      title: "Life Insurance",
      description: "Help protect your family's financial future and work toward your long-term goals.",
      image: "https://picsum.photos/400/300?random=4"
    },
    {
      id: 5,
      title: "Annuities",
      description: "Annuities provide income during retirement and tax-deferred growth as you save.",
      image: "https://picsum.photos/400/300?random=5"
    },
    {
      id: 6,
      title: "Will and Trust",
      description: "While a will determines how your assets will be distributed after you die, a trust becomes the legal owner of your assets the moment the trust is created.",
      image: "https://picsum.photos/400/300?random=6"
    },
    {
      id: 7,
      title: "401k Rollover and IRA",
      description: "A Rollover IRA is an account that allows you to move funds from your old employer-sponsored retirement plan into an IRA. With an IRA rollover, you can preserve the tax-deferred status of your retirement assets, without paying current taxes or early withdrawal penalties at the time of transfer.",
      image: "https://picsum.photos/400/300?random=7"
    },
    {
      id: 8,
      title: "Mortgage Protection",
      description: "Mortgage Insurance is an insurance policy which compensates lenders or investors for losses due to the default of a mortgage loan.",
      image: "https://picsum.photos/400/300?random=8"
    },
    {
      id: 9,
      title: "Investment Planning",
      description: "Strategic investment planning to help you achieve your financial goals with diversified portfolio management.",
      image: "https://picsum.photos/400/300?random=9"
    },
    {
      id: 10,
      title: "Estate Planning",
      description: "Comprehensive estate planning services to ensure your assets are protected and transferred according to your wishes.",
      image: "https://picsum.photos/400/300?random=10"
    },
    {
      id: 11,
      title: "Business Insurance",
      description: "Protect your business with comprehensive insurance solutions tailored to your specific industry needs.",
      image: "https://picsum.photos/400/300?random=11"
    },
    {
      id: 12,
      title: "Financial Advisory",
      description: "Expert financial advisory services to guide you through complex financial decisions and market opportunities.",
      image: "https://picsum.photos/400/300?random=12"
    }
  ]

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Introduction Text */}
        <div className="mb-16">
          {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h2> */}
          <p className="text-lg sm:text-xl text-customGray leading-relaxed">
            You have specific financial objectives in mind – planning for retirement, creating a college savings strategy, perhaps opening your own business. We have the comprehensive suite of investment products and services you need to turn your goals into reality. Partnering with your financial advisor, you can build a diversified portfolio from a broad universe of quality investments, including insurance and annuity products can help to protect your financial future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col">
              {/* Service Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-customBlack bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-customBlue2 mb-4 group-hover:text-customBlue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-customGray leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <button 
                  className="w-full bg-customBlue2 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-customBlue transition-all duration-300 mt-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ServicesComponent
