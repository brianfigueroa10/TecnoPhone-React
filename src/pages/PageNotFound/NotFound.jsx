import React from 'react'
import { NotFoundDiv, NotFoundWrapper } from './NotFoundStyles'
import { ButtonLinks } from '../../components/UI/Button/Button'
import { TitlePrimary } from '../../components/Hero/HeroStyles'

const NotFound = () => {


  return (
    <>
      <NotFoundWrapper>
        <NotFoundDiv >

          <img src="https://cdn-icons-png.flaticon.com/512/7465/7465751.png" alt="ERROR 404" />
          <TitlePrimary>ERROR 404 | Página no encontrada.</TitlePrimary>
          <p>La página a la que estas queriendo acceder no existe o fue removida.</p>

        </NotFoundDiv>

        <ButtonLinks to='/'>Ir a Home</ButtonLinks>


      </NotFoundWrapper>

    </>

  )

}

export default NotFound;
