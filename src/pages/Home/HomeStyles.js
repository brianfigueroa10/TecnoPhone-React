import { styled } from "styled-components";

export const HomeWrapper = styled.div`
  width: 95vw;
  max-width: 1600px;
  padding: 1rem;
  margin: 0 auto;
  h2 {
    font-weight: 400;
  }
    @media screen and (max-width: 920px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;