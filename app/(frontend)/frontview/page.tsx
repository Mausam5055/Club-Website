

import CaruselUsage from '@/components/component/frontend/CaruselUsage'
import Footer from '@/components/component/frontend/footer/page'
// import Footer from '@/components/component/frontend/footer'
import Hero from '@/components/component/frontend/Hero'
import ImgeSlider from '@/components/component/frontend/ImgeSlider'
import Navbar from '@/components/component/frontend/page'
import Section4 from '@/components/component/frontend/section4'
import Section5 from '@/components/component/frontend/section5'
import Section6 from '@/components/component/frontend/section6'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      <Navbar />
      <Hero/>
      <CaruselUsage />
      <ImgeSlider />
      <Section5 />
      <Section6 />
      <Section4/>
      <Footer/> 
    </div>
  )
}
