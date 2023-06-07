import { styled } from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
      @media screen and (max-width: 920px) {
        flex-wrap: wrap;
  }
`;

export const CardCategory = styled.div`
  font-size: 17px;
  border-radius: 10px;
  padding: 4px 14px;
  border: ${({ selected }) => (selected ? "2px solid orange" : "2px solid #373739")};
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ selected }) => (selected ? "black" : "white")};
  font-weight: 600;
  text-decoration: none;
  background: ${({ selected }) => (selected ? "orange" : "none")};
  &&:hover {
    background-color: #1cdaff;
    color: white;
    border: 2px solid #1cdaff;
  }
`;

export const CardsCategory = styled.div`
  display: flex;
  gap: 15px;
        @media screen and (max-width: 920px) {
        flex-wrap: wrap;
        justify-content: center;
  }
`;
