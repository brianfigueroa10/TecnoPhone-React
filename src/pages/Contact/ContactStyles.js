import styled from "styled-components";

export const ContactSectionStyled = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 130px;
  align-items: center;
  padding: 50px;

  @media screen and (max-width: 920px) {
    display: flex;
    width: 100%;
    padding: 0;
    justify-content: center;
    margin-bottom: 80px;
    @media screen and (max-width: 500px) {
      width: auto;
    }
  }
`;

export const ContactTitleStyled = styled.h2`
  color: white;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
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
    &&:hover {
      background-color: #1cdaff;
      color: white;
      border: 2px solid #1cdaff;
    }
    &:disabled {
      background: #373739;
      color: gray;
      cursor: not-allowed;
    }
  }


  @media screen and (max-width: 920px) {
    justify-content: center;
    align-items: center;
    margin: auto;
            @media screen and (max-width: 400px) {
        gap: 30px;
  }
    
  }
  
`;

export const ContactFormStyled = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  color: white;
  width: 800px;
  align-items: center;
  justify-content: center;


  && input {
    color: white;
    border: none;
    width: 500px;
    height: 45px;
    background: #454545;
    padding: 15px;
    border-radius: 10px;
  }
  @media screen and (max-width: 920px) {
    width: 500px;
    && input {
      width: 400px;
      @media screen and (max-width: 500px) {
        width: 300px;
        padding: 0;
        margin-bottom: 20px;
      }
    }
  }
    @media screen and (max-width: 500px) {
    width: 200px;
    padding: 0;
    
  }
`;
export const Textarea = styled.textarea`
  color: white;
  border: none;
  width: 500px;
  height: 230px;
  background: #454545;
  padding: 15px;
  border-radius: 10px;
  vertical-align: top;
  @media screen and (max-width: 920px) {
    width: 400px;
    @media screen and (max-width: 500px) {
      width: 300px;
      margin-bottom: 20px;
    }
  }
`;

export const ContactButton = styled.button`
  font-size: 17px;
  border-radius: 10px;
  padding: 4px 14px;
  border: 2px solid #454545;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  background: none;
  &&:hover {
    background-color: #1cdaff;
    color: white;
    border: 2px solid #1cdaff;
  }
  &&:disabled {
    background: black;
    color: gray;
    cursor: not-allowed;
    border: 2px solid #454545;
  }
          @media screen and (max-width: 450px) {
            margin-top: 17px;
  }
`;
