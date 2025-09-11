const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Inspire Investment Services</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Your trusted partner for financial growth and investment solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2 text-sm sm:text-base">
              <p className="flex items-center"><span className="mr-2">📧</span> info@inspireinvestments.com</p>
              <p className="flex items-center"><span className="mr-2">📞</span> +1 (555) 123-4567</p>
              <p className="flex items-start"><span className="mr-2 mt-1">📍</span> 123 Investment Street, Finance City</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 Inspire Investment Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
