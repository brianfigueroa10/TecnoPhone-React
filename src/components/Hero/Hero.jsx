import React from 'react'
import { HeroContainer, HeroDescription, HeroImg, HeroLinks, Presentation, TitlePrimary } from './HeroStyles'
import { ButtonLinks } from '../UI/Button/Button'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroDescription>
        <TitlePrimary>Calidad, Estilo y Tecnología</TitlePrimary>
        <Presentation>
          En TecnoPhone, vas a encontrar la mejor variedad de smartphones de última generación, desde gamas básicas hasta las más avanzadas. Además, nuestro amplio stock asegura una entrega rápida. ¡Descubri la excelencia tecnológica en TecnoPhone y eligi el smartphone ideal para vos!.
        </Presentation>
        <HeroLinks>
          <ButtonLinks first='true' to='/products'>PRODUCTOS</ButtonLinks>
          <ButtonLinks to='/contact'>Contactanos</ButtonLinks>
        </HeroLinks>
      </HeroDescription>
      <HeroImg src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="Hero" />
    </HeroContainer>
  )
}

export default Hero
