import styled from "styled-components";
import { SectionTitle } from "../../components/UI/SectionTitle/SectionTitle";
import { fade, slideFromBottom } from "../../styles/animations";
export const OrderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  animation: ${fade} 1s ease-in, ${slideFromBottom} 1.3s ease-in-out;

  h2 {
    color: white;
  }
`;

export const NoOrders = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-size: 20px;
  }
`;

export const ProductOrderTitle = styled(SectionTitle)`
  font-size: 20px;
  text-align: start;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(95deg, #0a1716, #092429);
  border: 2px solid #74e8ff;
  gap: 10px;
  width: 800px;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  @media screen and (max-width: 990px) {
    width: 80%;
  }
`;

export const DateDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: none;

  p {
    background: none;
  }
      @media screen and (max-width: 450px) {
    flex-direction: column;
    text-align: start;
  }
`;

export const OrderId = styled.p`
  color: white;
  font-weight: 500;
  @media screen and (max-width: 600px) {
  }
`;

export const DateAndTime = styled.p`
  color: #888888;
  @media screen and (max-width: 990px) {
    text-align: end;
          @media screen and (max-width: 450px) {
    text-align: start;
  }
  }
`;

export const ProductOrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: none;
  justify-content: center;
  gap: 7px;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
export const ProductDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const ProductOrderDesc = styled.div`
  h3,
  span,
  p,
  div {
    background: none;
    
  }

  div {
    display: flex;
    gap: 15px;
  }
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
      @media screen and (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const DateDescImg = styled.img`
  width: 12px;
  height: 25px;
  cursor: pointer;
      @media screen and (max-width: 600px) {
    width: 25px;
    height: 45px;
  
  }
`;

export const DateDescTitle = styled.h3`
  width: 200px;
  font-size: 18px;
  color: white;
`;

export const DateDescPrice = styled.p`
  color: white;
`;

export const DateDescQuantity = styled.span`
  font-size: 12px;
  color: #888888;
`;

export const PriceTotal = styled.p`
  background: orange;
  margin-top: 8px;
  padding: 3px;
  border-radius: 10px;
  font-weight: 700;
`;
