import React from 'react'
import {CongratsDiv, CongratsWrapper} from './CongratulationStyles'
import { ButtonLinks } from '../../components/UI/Button/Button'
import { TitlePrimary } from '../../components/Hero/HeroStyles'

const Congratulation = () => {
 

  return (
    <>
      <CongratsWrapper>
        <CongratsDiv >

          <img src="https://cdn-icons-png.flaticon.com/512/1293/1293029.png" alt="" />
          <TitlePrimary>Felicitaciones!</TitlePrimary>
          <p>Tu compra ya fue realizada</p>

        </CongratsDiv>

        <ButtonLinks to='/'>Ir a Home</ButtonLinks>


      </CongratsWrapper>
      
    </>
    
  )

}

export default Congratulation
