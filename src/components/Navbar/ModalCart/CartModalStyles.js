import styled, { css } from "styled-components";
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import { fade, slideFromRight } from "../../../styles/animations";

export const ModalContainer = styled.div`
  background: linear-gradient(95deg, #0a1716, #092429);
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  padding: 35px 10px 15px 25px;
  border-left: 1px solid #222;
  border-top: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  width: 450px;
  z-index: 999;
  animation: ${fade} .5s ease-in, ${slideFromRight} .5s ease-in-out;

  div {
    background: none;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const TopCartContainer = styled.div`
  display: flex;
  background: none;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0px 0px 0px 10px;
  margin-bottom: 10px;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 0 auto;
  padding-left: 0;
  overflow: scroll;
  background: none;
  height: calc(57vh);
  padding: 15px;
  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 130px;
  border: 1px solid #b2f2ff;
  border-radius: 10px;
  gap: 5px;
  background: #021e15;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const NoProducts = styled.p`
  color: white;
  background: none;
`;

export const CartImage = styled.img`
  width: 60px;
  height: 110px;
  background: none;
    @media screen and (max-width: 380px) {
      display:none;
  }
`;
export const CartSpecs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 160px;
  height: 120px;
  padding: 5px;
  background: none;
  align-items: flex-start;
`;

export const CartSpecsInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
`;

export const CartNameItem = styled.h3`
  color: #b2f2ff;
  font-weight: 600;
  font-size: 18px;
  background: none;
  @media screen and (max-width: 400px) {
    font-size: 15px;
    text-align: start;
  }
`;

export const CartMarcaItem = styled.p`
  font-size: 13px;
  text-align: start;
  color: white;
  background: none;
`;

export const CartPrice = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  font-size: 13px;
  color: white;
  width: auto;
  text-align: start;

  && span {
    color: #b2f2ff;
    font-size: 20px;
    background: none;
    font-weight: 600;
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  background: none;
  div {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
  }
`;

export const MinusIcon = styled(CiCircleMinus)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  color: orange;
  background: none;
`;

export const PlusIcon = styled(CiCirclePlus)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  color: orange;
  background: none;
`;

export const CloseCart = styled(CiCircleRemove)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  color: orange;
  background: none;
`;

export const Cost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  padding: 15px;
  padding-bottom: 25px;
  border-top: 2px solid white;
  justify-content: space-between;
`;

export const CostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  width: 100%;

  p {
    color: white;
    background: none;
  }
  span {
    color: white;
    background: none;
    font-weight: 500;
  }
`;

export const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;
