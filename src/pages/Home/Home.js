import React from 'react'
import { HomeWrapper } from './HomeStyles'
import Hero from '../../components/Hero/Hero'
import Recomendation from '../../components/Recomendation/Recomendation'
import ContactUs from '../../components/ContactUs/ContactUs'
import Beneficios from '../../components/beneficios/Beneficios'


const Home= () => {
  return (
    <HomeWrapper>
      <Hero />
      <Recomendation />
      <Beneficios />
      <ContactUs />
    </HomeWrapper>

  )
}

export default Home
