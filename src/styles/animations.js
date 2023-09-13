import { keyframes } from "styled-components";

export const fade = keyframes` 
  from {
        opacity: 0;
    }
  to {
        opacity: 1;
    }
`;

export const slideFromBottom = keyframes`
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideFromRight = keyframes`
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateY(0);
  }
`;
export const slideFromLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateY(100px);
  }
`;