import Header from './Header'

const Hero = ({
    backgroundImage,
    title,
    titleSize = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
}) => {
    return (
        <div
            className="relative h-screen flex flex-col bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            {/* Header inside Hero */}
            <div className="relative z-30">
                <Header />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Hero Content */}
            <div className="relative z-20 flex-1 flex items-center justify-center text-center px-4">
                {title && (
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className={`${titleSize} text-white leading-tight drop-shadow-2xl font-lora`}>
                            {title}
                        </h1>
                        <div className="w-16 h-1 bg-customBlue mx-auto mt-4 rounded"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hero
