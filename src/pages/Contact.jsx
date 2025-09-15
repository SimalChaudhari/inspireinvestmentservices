import { useState } from 'react'
import Hero from '../components/Hero'
import AdvancedReactions from '../components/AdvancedReactions'

const Contact = () => {
  const [contactReactions, setContactReactions] = useState({})

  const handleContactReaction = (emoji, count) => {
    setContactReactions(prev => ({
      ...prev,
      [emoji]: count
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Header */}
      <Hero
        backgroundImage="https://png.pngtree.com/background/20250417/original/pngtree-serene-japanese-garden-with-cascading-waterfalls-picture-image_16415070.jpg"
        title="Contact Us"
        titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      />

      {/* Main Content Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Contact Page Reactions */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8">
              <AdvancedReactions
                onReaction={handleContactReaction}
                initialReactions={contactReactions}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Send us a Message</h2>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Your First Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Your Last Name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y"
                      placeholder="Tell us more about your investment needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-600 text-white p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Our Contact Details</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 mt-1">📍</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-blue-100">123 Investment Street, Finance City, FC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 mt-1">📞</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-blue-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 mt-1">📧</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-blue-100">info@inspireinvestments.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 mt-1">⏰</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-blue-100">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact