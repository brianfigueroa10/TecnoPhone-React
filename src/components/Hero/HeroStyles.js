import { styled } from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 65px;

  @media screen and (max-width: 920px) {
    display: flex;
    margin-top: 80px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    padding: 5px;
  }
`;

export const TitlePrimary = styled.h1`
  font-weight: 900;
  font-size: 3.7rem;
  width: 70%;
  background: linear-gradient(130deg, #00fca8, #1cdaff);
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
    @media screen and (max-width: 920px) {
      text-align: center;
      font-size: 3rem;
      width: 100%;
          @media screen and (max-width: 450px) {
      text-align: center;
      font-size: 2rem;
      width: 100%;
  }
  }
`;

export const Presentation = styled.p`
  font-weight: 600;
  width: 80%;
  color: #9c9ca0;
    @media screen and (max-width: 920px) {
    width: 100%;
  }
  
`;

export const HeroDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;

`;

export const HeroLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
    @media screen and (max-width: 920px) {
    width: 100%;
    justify-content: center;
  }
`;

export const HeroImg = styled.img`
  width: 430px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  padding: 1px;
  border-radius: 10px;

    @media screen and (max-width: 920px) {
    display: none;
    margin: 0 auto;
  }
`;
