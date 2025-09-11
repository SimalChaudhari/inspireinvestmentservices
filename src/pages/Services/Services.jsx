import { useState } from 'react'
import Hero from '../../components/Hero'
import ServicesComponent from '../../components/Services/ServicesComponent'

const Services = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section with Header */}
      <Hero
        backgroundImage="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg"
        title='"Everyone has unique financial goals and Inspire Investment Service offers many different ways to help you achieve them."'
        titleSize="text-2xl"
      />

      <ServicesComponent />

    </div>
  )
}

export default Services