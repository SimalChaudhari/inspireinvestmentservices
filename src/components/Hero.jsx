import { useEffect, useState } from "react"
import Header from "./Header"
import { FaChevronDown } from "react-icons/fa"

const Hero = ({
  backgroundImage,
  title,
  titleSize = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  title2,
  titleSize2 = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
}) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `center ${offset * 0.4}px`, // 👈 slow scroll effect
      }}
    >
      {/* Header inside Hero */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4">
        {title && (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`${titleSize} text-white drop-shadow-2xl`}>
              {title}
            </h1>
            <div className="w-24 h-2 bg-customBlue mx-auto mt-6"></div>
          </div>
        )}
        {title2 && (
          <div className="text-center max-w-4xl mx-auto mt-4">
            <h1 className={`${titleSize2} text-white drop-shadow-2xl`}>
              {title2}
            </h1>
            <div className="w-24 h-2 bg-customBlue mx-auto mt-6"></div>
          </div>
        )}
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="bg-black/30 backdrop-blur-sm rounded-full p-3 hover:bg-black/50 transition-all duration-300 cursor-pointer"
          onClick={() => {
            const targetPosition = window.innerHeight
            const startPosition = window.pageYOffset
            const distance = targetPosition - startPosition
            const duration = 1000 // 1 second
            let start = null

            function animation(currentTime) {
              if (start === null) start = currentTime
              const timeElapsed = currentTime - start
              const run = easeInOutQuad(
                timeElapsed,
                startPosition,
                distance,
                duration
              )
              window.scrollTo(0, run)
              if (timeElapsed < duration) requestAnimationFrame(animation)
            }

            function easeInOutQuad(t, b, c, d) {
              t /= d / 2
              if (t < 1) return (c / 2) * t * t + b
              t--
              return (-c / 2) * (t * (t - 2) - 1) + b
            }

            requestAnimationFrame(animation)
          }}
        >
          <FaChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  )
}

export default Hero
