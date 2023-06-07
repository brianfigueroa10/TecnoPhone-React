import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #222;
  padding: 10px 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavegationNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const LinkContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  && a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  && a:hover {
    color: orange;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.3s ease-in-out;
    background-color: #333;
    z-index: 10;
    padding: 100px 0;

    a {
      background: none;
      font-size: 21px;
    }
  }
`;

//LOGO
export const LogoStyled = styled.div`
  display: flex;
  cursor: pointer;

  & img {
    width: 120px;
    color: skyblue;
    border-radius: 5px;
  }
`;

//MENU HAMBURGUESA
export const NavIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid black;
  margin-top: 5px;
  background: #454545;
  border-radius: 10px;
  min-width: 130px;
  justify-content: end;
  a {
    display: flex;
    background: none;
    padding: 2px;
    text-align: end;
    justify-content: center;
  }
`;

export const ModalContent = styled.div`
  background: none;
  padding: 10px;
  a {
    text-align: center;
  }
`;

export const Menu = styled.div`
position: relative;
background: none;
`;
export const CartContainer = styled.div`
cursor: pointer;
  font-size: 1.2rem;
  color: orange;
  @media (max-width: 768px) {
  right: 75px ;
  position: absolute;
  font-size: 1.3rem;
  }
`;