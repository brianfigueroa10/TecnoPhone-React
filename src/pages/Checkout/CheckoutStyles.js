import { styled } from "styled-components";
import { fade, slideFromBottom } from "../../styles/animations";

export const CheckoutWrapper = styled.section`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 50px;
  animation: ${fade} 1s ease-in, ${slideFromBottom} 1.3s ease-in-out;
      @media screen and (max-width: 920px) {
        flex-direction: column;
  }

`;
