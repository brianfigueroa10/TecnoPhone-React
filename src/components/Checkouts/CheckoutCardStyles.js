import styled from "styled-components";
import { CartContent } from "../Navbar/ModalCart/CartModalStyles";

export const CheckoutContainer = styled(CartContent)`

`;


export const CheckoutFormulario = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const FormButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;



export const CheckoutCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 200px;
  width: 400px;
  border: 1px solid  #b2f2ff;
  border-radius: 10px;
  gap: 15px;
  background: #021e15;
    @media screen and (max-width: 500px) {
      width: 330px;
      height: 170px;
      gap: 2px;
      padding: 5px;
  }
`;


export const CheckoutCardSpecs = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  list-style-type: none;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  background: none;
  color: white;
  li {
    background: none;
  }
`;
