import styled from "styled-components";
import { fade, slideFromBottom } from "../../styles/animations";

export const RecomendationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  color: #a9b1b4;
  justify-content: center;
  padding: 55px 0;
  animation: ${fade} 1s ease-in, ${slideFromBottom} 1.3s ease-in-out;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10%;
  align-items: center;
  
  @media (max-width: 998px) {
    flex-direction: column;
    align-items: center;
    width: auto;
    gap: 20px;

        && h3 {
        text-align: center;
    }
  }
`;

export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 0;
  gap: 45px;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 420px;
  height: 260px;
  padding: 10px 10px 10px 30px;
  padding-top: 3px;
  border: 2px solid #74E8FF;
  border-radius: 10px;
  box-shadow: 8px 10px 8px 8px rgba(0, 0, 0, .3);
    @media screen and (max-width: 450px) {
      width: 330px;
      height: 280px;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;
  }
`;

export const Features = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;
  width: 65%;
  height: 93%;
  flex-direction:column;
  align-items: flex-start;
        @media screen and (max-width: 450px) {
        gap: 0px;
        justify-content: space-evenly;
  }
`;

export const ProductImage = styled.img`
  width: 90px;
  height: 183px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SpecsDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  list-style-type: none;
  align-items: flex-start;
  justify-content: center;

  && li {
    text-decoration: none;
  }
  p {
    font-size: 14px;
    text-align: start;
    color: white;
  }
  
`;

export const SpecsPrice = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  gap: 15px;
  color: #ffff;

  && span {
    color: #00FCA8;
    font-size: 22px;
    text-align: center;
          @media screen and (max-width: 450px) {
        font-size: 19px;
        margin-bottom: 5px;
        
  }
  }

`;

export const SpecsTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: #B2F2FF;
    @media screen and (max-width: 500px) {
      font-size: 22px;
          @media screen and (max-width: 450px) {
            font-size: 17px
  }
  }
  
`;
