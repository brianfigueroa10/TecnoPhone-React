import React from "react";
import styled from "styled-components";
import ContactData from "./ContactData";
import { SiFacebook, SiInstagram, SiTwitter} from "react-icons/si"
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { HeroImg } from "../Hero/HeroStyles";



const ContactUsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 25px 25px 30px;
    color: white;
`;

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 150px;
  @media screen and (max-width: 920px) {
flex-direction: column;
  }
`;


const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  && h3 {
    font-size: 28px;
      @media screen and (max-width: 920px) {
        text-align: center;
  }
  }
`;

const SocialNetwork = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  && h4 {
    color: #22c2c3;
    font-size: 21px;
  }
  && svg {
    font-size: 24px;
    cursor: pointer;
    transition: all .3s ease;

  }

  && svg:hover {
    color: #22c2c3
  }


`;

const ContactUs = () => {
  
  return (
    <ContactUsWrapper>
      <SectionTitle>CONTACTO</SectionTitle>
      <ContactContainer>
        <ContactInfo >
          <h3>SAN MIGUEL</h3>
          <ContactData />

          <SocialNetwork>
            <h4>Seguinos!</h4>
            <SiFacebook />
            <SiInstagram />
            <SiTwitter/>
          </SocialNetwork>

        </ContactInfo>
        <HeroImg src="https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero" />
        </ContactContainer>
      </ContactUsWrapper>
  );
};

export default ContactUs;
