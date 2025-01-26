
// import BookComponent from '@/components/component/frontend/bookComponent'
import CaruselUsage from '@/components/component/frontend/CaruselUsage'
import Footer from '@/components/component/frontend/footer/page'
// import Footer from '@/components/component/frontend/footer'
import Hero from '@/components/component/frontend/Hero'
import ImgeSlider from '@/components/component/frontend/ImgeSlider'
import Navbar2 from '@/components/component/frontend/navbar/navbar2'
import Navbar from '@/components/component/frontend/page'
import Section4 from '@/components/component/frontend/section4'
import Section5 from '@/components/component/frontend/section5'
// import Section6 from '@/components/component/frontend/section6'
import React from 'react'

export default function page() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <CaruselUsage />
      <ImgeSlider />
      <Section4/>
      <Footer/> 
     
    </div>
  )
}
