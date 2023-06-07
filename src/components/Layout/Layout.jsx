import { ContentContainerStyled, LayoutContainerStyled } from "./LayoutStyles";

function Layout({ children }) {
  return (
    <LayoutContainerStyled>
      <ContentContainerStyled>{children}</ContentContainerStyled>
    </LayoutContainerStyled>
  );
}

export default Layout;

