import React from 'react'
import { SiGooglemaps, SiGmail, SiWhatsapp } from "react-icons/si"
import { styled } from 'styled-components'
import {  ButtonLinks } from '../UI/Button/Button';



const WrapperDataContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 18px;
    justify-content: center;

        @media screen and (max-width: 920px) {
    width: 100%;
    align-items: center;
    
  }

`;
const DivDataContact = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
            @media screen and (max-width: 400px) {
        gap: 17px;
        text-align: center;
  }
`



const ContactData = () => {
    return (
        <WrapperDataContact>
            <DivDataContact><SiGooglemaps/> Av. Dr. Ricardo Balbín 486</DivDataContact>
            <DivDataContact><SiGmail />pixeldesk@gmail.com</DivDataContact>
            <DivDataContact><SiWhatsapp />1530369708</DivDataContact>
            <ButtonLinks to='/contact' style={{width:'120px'}}>Escribinos</ButtonLinks>
        </WrapperDataContact>
  )
}

export default ContactData
