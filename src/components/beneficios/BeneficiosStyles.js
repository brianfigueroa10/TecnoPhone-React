import { styled } from "styled-components";
import { fade, slideFromBottom } from "../../styles/animations";

export const BeneficiosContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  color: #a9b1b4;
  justify-content: center;
      animation: ${fade} 1s ease-in, ${slideFromBottom} 1.3s ease-in-out;
    p {
    text-align: center;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 0;
  gap: 40px;

`;

export const CardsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  width: 300px;
  height: 280px;
  padding: 10px 10px 10px 30px;
  padding-top: 3px;
  border: 2px solid #1cdaff;
  border-radius: 10px;
  box-shadow: 8px 10px 8px 8px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
  gap: 20px;
    @media screen and (max-width: 600px) {
      align-items: center;
      padding: 10px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  gap: 5px;
  h3 {
    background: none;
    color: #98e5f5;
  }
  p {
    background: none;
    font-size: 15px;
  }
`;
