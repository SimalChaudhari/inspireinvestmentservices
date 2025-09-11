import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)        // Parent dropdown
  const [activeSubDropdown, setActiveSubDropdown] = useState(null)  // Sub dropdown

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
    setActiveSubDropdown(null) // Reset sub dropdown jab parent switch ho
  }

  const toggleSubDropdown = (subDropdownName) => {
    setActiveSubDropdown(activeSubDropdown === subDropdownName ? null : subDropdownName)
  }

  // Check if a link is active
  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Investments & Services', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Services', href: '/services' },
        { 
          name: 'Retirement & College Savings', 
          href: '/retirement',
          hasSubDropdown: true,
          subDropdownItems: [
            { name: 'What is IRA', href: '/what-is-ira' },
            { name: 'Traditional IRA', href: '/traditional-ira' },
            { name: 'Roth IRA', href: '/roth-ira' },
            { name: 'Roth IRA Conversion', href: '/roth-ira-conversion' },
            { name: '401(k) Rollovers', href: '/401k-rollovers' }
          ]
        },
        { name: 'Life Insurance', href: '/life-insurance' },
        { name: 'Health Insurance', href: '/health-insurance' },
        { name: 'Long-term Care', href: '/longterm-care' },
        { 
          name: 'Annuity', 
          href: '/annuity',
          hasSubDropdown: true,
          subDropdownItems: [
            { name: 'Fixed Annuities', href: '/fixed-annuities' },
            { name: 'Variable Annuities', href: '/variable-annuities' },
            { name: 'Income Annuities', href: '/income-annuities' }
          ]
        },
        { name: 'Will And Trust', href: '/will-trust' },
        { name: 'Wealth Management', href: '/wealth-management' },
        { name: 'Mortgage Protection', href: '/mortgage-protection' },
        { name: 'Buy-Sell Agreement', href: '/buy-sell' },
        { name: 'Finding the right life insurance', href: '/life-insurance-guide' }
      ]
    },
    { name: 'STEPS TO FINANCIAL SECURITY', href: '/financial-security' },
    { name: 'Contact Us', href: '/contact' }
  ]

  // Dynamic classes
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white text-gray-800 shadow-lg' 
      : 'bg-transparent text-white'
  }`

  const navLinkClasses = (isMobile = false) => {
    const baseClasses = isMobile 
      ? 'transition-colors px-2 py-2 rounded-md font-lora'
      : 'transition-colors px-2 py-1 font-lora'
    
    const hoverClasses = isScrolled
      ? isMobile 
        ? 'hover:text-blue-600 hover:bg-gray-100'
        : 'hover:text-blue-600'
      : isMobile
        ? 'hover:text-blue-200 hover:bg-blue-700'
        : 'hover:text-blue-200'
    
    return `${baseClasses} ${hoverClasses}`
  }

  const buttonClasses = `lg:hidden p-2 rounded-md transition-colors ${
    isScrolled 
      ? 'text-gray-800 hover:bg-gray-100' 
      : 'text-white hover:bg-blue-700'
  }`

  const mobileMenuClasses = `lg:hidden mt-4 pb-4 border-t ${
    isScrolled ? 'border-gray-200' : 'border-blue-500'
  }`

  return (
    <header className={headerClasses}>
      <div className="w-full px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate('/')} 
            className="text-lg sm:text-xl md:text-2xl font-bold truncate font-lora hover:opacity-80 transition-opacity text-left"
          >
            Inspire Investment Services
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <button 
                  className={`${navLinkClasses()} flex items-center ${
                    isActive(item.href) ? 'text-customBlue font-semibold' : ''
                  }`}
                  onClick={item.hasDropdown ? (e) => {
                    e.preventDefault()
                    toggleDropdown(item.name)
                  } : () => navigate(item.href)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <div 
                        key={dropdownItem.name} 
                        className="relative"
                        onMouseEnter={() => dropdownItem.hasSubDropdown && setActiveSubDropdown(dropdownItem.name)}
                        onMouseLeave={() => dropdownItem.hasSubDropdown && setActiveSubDropdown(null)}
                      >
                        <button
                          className={`w-full text-left px-4 py-2 text-sm flex justify-between ${
                            isActive(dropdownItem.href) 
                              ? 'text-customBlue font-semibold bg-blue-50' 
                              : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                          }`}
                          onClick={(e) => {
                            if (dropdownItem.hasSubDropdown) {
                              e.preventDefault()
                              toggleSubDropdown(dropdownItem.name)
                              // Also navigate to the main page
                              navigate(dropdownItem.href)
                            } else {
                              setActiveDropdown(null)
                              navigate(dropdownItem.href)
                            }
                          }}
                        >
                          {dropdownItem.name}
                          {dropdownItem.hasSubDropdown && <span>▶</span>}
                        </button>

                        {/* Sub Dropdown */}
                        {dropdownItem.hasSubDropdown && activeSubDropdown === dropdownItem.name && (
                          <div className="absolute left-full top-0 ml-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-[60]">
                            {dropdownItem.subDropdownItems.map((subItem) => (
                              <button
                                key={subItem.name}
                                className={`w-full text-left px-4 py-2 text-sm ${
                                  isActive(subItem.href)
                                    ? 'text-customBlue font-semibold bg-blue-50'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                                }`}
                                onClick={() => {
                                  setActiveDropdown(null)
                                  setActiveSubDropdown(null)
                                  navigate(subItem.href)
                                }}
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className={buttonClasses}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div 
              className="bg-white h-full w-80 max-w-sm shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors bg-white shadow-sm border border-gray-200"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="overflow-y-auto h-full pb-20">
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100">
                      <button
                        className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                          isActive(item.href)
                            ? 'text-customBlue font-semibold bg-blue-50'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={item.hasDropdown ? (e) => {
                          e.preventDefault()
                          toggleDropdown(item.name)
                        } : () => {
                          setIsMobileMenuOpen(false)
                          navigate(item.href)
                        }}
                      >
                        <span className="font-medium">{item.name}</span>
                        {item.hasDropdown && (
                          <svg 
                            className={`w-5 h-5 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </button>

                      {/* Mobile Dropdown */}
                      {item.hasDropdown && activeDropdown === item.name && (
                        <div className="bg-gray-50">
                          {item.dropdownItems.map((dropdownItem) => (
                            <div 
                              key={dropdownItem.name} 
                              className="border-b border-gray-100 last:border-b-0 relative"
                              onMouseEnter={() => dropdownItem.hasSubDropdown && setActiveSubDropdown(dropdownItem.name)}
                              onMouseLeave={() => dropdownItem.hasSubDropdown && setActiveSubDropdown(null)}
                            >
                              <div className="flex items-center justify-between px-6 py-3 text-sm">
                                <button
                                  className={`flex-1 text-left transition-colors ${
                                    isActive(dropdownItem.href)
                                      ? 'text-customBlue font-semibold'
                                      : 'text-gray-600'
                                  }`}
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setIsMobileMenuOpen(false)
                                    navigate(dropdownItem.href)
                                  }}
                                >
                                  {dropdownItem.name}
                                </button>
                                {dropdownItem.hasSubDropdown && (
                                  <div className="p-2 flex items-center">
                                    <svg 
                                      className={`w-5 h-5 transition-transform text-gray-500 ${
                                        activeSubDropdown === dropdownItem.name ? 'rotate-90' : ''
                                      }`} 
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                )}
                              </div>

                              {/* Mobile Sub Dropdown */}
                              {dropdownItem.hasSubDropdown && activeSubDropdown === dropdownItem.name && (
                                <div className="bg-gray-100">
                                  {dropdownItem.subDropdownItems.map((subItem) => (
                                    <button
                                      key={subItem.name}
                                      className={`w-full text-left px-8 py-2 text-xs transition-colors ${
                                        isActive(subItem.href)
                                          ? 'text-customBlue font-semibold bg-blue-200'
                                          : 'text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                                      }`}
                                      onClick={() => {
                                        setActiveDropdown(null)
                                        setActiveSubDropdown(null)
                                        setIsMobileMenuOpen(false)
                                        navigate(subItem.href)
                                      }}
                                    >
                                      {subItem.name}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
