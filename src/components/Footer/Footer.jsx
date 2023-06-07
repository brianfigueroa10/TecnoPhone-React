import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: #222;
  gap: 25px;
`;

const FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 40px;
  list-style-type: none;
  @media(max-width: 768px){
    flex-direction: column;
    gap: 15px;
  }

`;

const FooterLinks = styled.li`
  && a {
    font-weight: 300;
    font-size: 18px;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    transition: all .3s ease;

  }
    && :hover {
    color: orange;
    text-decoration: underline;
  }
`;

const Footerp = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: rgb(255, 255, 255);
  text-align: center;

  && span {
        font-size: 18px;
    font-weight: 700;
    font-style: italic;
    
  }
  @media screen and (max-width: 920px) {
    text-align: center;
  }
`;

const Footer = () => {
  return (
      <FooterContainer>
        <FooterUl>
          <FooterLinks>
            <a href="/#">Términos y Condiciones</a>
          </FooterLinks>
          <FooterLinks>
            <a href="/#">Preguntas Frecuentes</a>
          </FooterLinks>
          <FooterLinks>
            <a href="/#">Trabajá con Nosotros</a>
          </FooterLinks>
        </FooterUl>
        <Footerp>
          Copyright © 2023 <span> TecnoPhone </span> Todos los derechos
          reservados.
        </Footerp>
      </FooterContainer>
  );
};

export default Footer;
