import { styled } from "styled-components";
import { fade, slideFromBottom } from "../../styles/animations";

export const ProductsWrapper = styled.section`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  color: #a9b1b4;
  justify-content: center;
  padding: 55px 0;
  max-width: 90%;
      animation: ${fade} 1s ease-in, ${slideFromBottom} 1.3s ease-in-out;
`









