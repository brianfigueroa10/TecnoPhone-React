import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLinks = styled(Link)`
  font-size: 17px;
  border-radius: 10px;
  padding: 4px 14px;
  border: 2px solid #454545;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ prods }) => (prods ? "black" : "#ffffff")};
  font-weight: ${({ first }) => (first ? "700" : "600")};
  text-decoration: none;
  text-align: center;
  background: ${({ first }) => (first ? "#1cdaff" : "none")};
  background: ${({ prods }) => (prods ? "orange" : "none")};

  &&:hover {
    background-color: #1B9DB6;
    color: white;
    border: 2px solid #1B9DB6;
  }
`;

export const Button = styled.button`
  font-size: 17px;
  border-radius: 10px;
  padding: 4px 14px;
  border: 2px solid #373739;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  background: none;

  &&:first-child {
   background: linear-gradient(130deg, #00fca8, #1cdaff);
    border: 2px solid;
    text-align: center;
  }
  &&:hover {
    background-color: #1b9db6;
    color: white;
    border: 2px solid #1b9db6;
  }
  &:disabled {
    background: #373739;
    cursor: not-allowed;
    color: white;
    &:hover {
      background: #373739;
      border: 2px solid #373739;
      color: white;
    }
  }
`;


