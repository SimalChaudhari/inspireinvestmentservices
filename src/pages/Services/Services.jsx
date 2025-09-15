import { useState } from 'react'
import Hero from '../../components/Hero'
import ServicesComponent from '../../components/Services/ServicesComponent'

const Services = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section with Header */}
      <Hero
        backgroundImage="https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg"
        title='"Everyone has unique financial goals and Inspire Investment Service offers many different ways to help you achieve them."'
        titleSize="text-2xl md:leading-[3] leading-[1.8] font-lora"
      />

      <ServicesComponent />

    </div>
  )
}

export default Services