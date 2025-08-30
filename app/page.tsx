import MagazineResearchSection from '@/components/research/MagazineResearchSection'
import ChatComp from '@/components/chat/chatComp'
import MagazineContactSection from '@/components/footer/MagazineContactSection'
import Hero from '@/components/hero/Hero'
import ImgeSlider from '@/components/carousel/ImgeSlider'
import Section4 from '@/components/section/section4'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero/>
      <ImgeSlider />
      <Section4/>
      <MagazineResearchSection />
      <ChatComp/>
      <MagazineContactSection/> 
    </div>
  )
}