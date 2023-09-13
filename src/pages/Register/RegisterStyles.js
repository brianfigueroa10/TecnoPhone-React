import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form as FormikForm, Field as FielFors } from "formik";
import { fade, slideFromBottom } from "../../styles/animations";

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 50px;
  margin-top: 88px;
  animation: ${fade} 1s ease-in, ${slideFromBottom} 0.5s ease-in-out;

  h1 {
    color: white;
  }
`;

export const FormStyled = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 10px;

  label {
    color: white;
  }
`;

export const FormDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;
  width: 800px;
  align-items: center;
  justify-content: center;
`;

export const LoginEmailStyled = styled(Link)`
  color: orange;
  line-break: none;
  text-align: center;
  a {
    text-decoration: none;
  }
  & p {
    color: orange;
  }
`;

export const FieldForm = styled(FielFors)`
  color: white;
  border: none;
  width: 300px;
  height: 45px;
  background: #454545;
  padding: 15px;
  border-radius: 10px;
    @media screen and (max-width: 600px) {
    width: 300px;
  }
`;
