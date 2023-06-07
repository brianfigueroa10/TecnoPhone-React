import React, { useState } from "react";
import { ContactFormStyled, ContactSectionStyled, FormContainer, Textarea } from "./ContactStyles";
import { ButtonLinks } from "../../components/UI/Button/Button";
import { SectionTitle } from "../../components/UI/SectionTitle/SectionTitle";


function Contact() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNombre('');
    setEmail('');
    setMensaje('');
    setEnviado(true);
  };

  return (
    <>
      {enviado ? (
        <ContactSectionStyled style={{ gap: '50px' }}>
          <SectionTitle>Formulario enviado con éxito!</SectionTitle>
          <ButtonLinks to="/"> Ir a Home </ButtonLinks>
        </ContactSectionStyled>

      ) : (
          
          <ContactSectionStyled>
            <SectionTitle>Formulario</SectionTitle>
          <FormContainer onSubmit={handleSubmit}>
            <ContactFormStyled>
              <label>Nombre:</label>
              <input
                type="text"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
            </ContactFormStyled>
            <ContactFormStyled>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </ContactFormStyled>
            <ContactFormStyled>
              <label>Mensaje:</label>
              <Textarea
                value={mensaje}
                onChange={handleMensajeChange}
                required
              />
            </ContactFormStyled>
            <button type="submit" disabled={!nombre || !email || !mensaje}>
              Enviar
            </button>
          </FormContainer>
        </ContactSectionStyled>
      )}
    </>
  );
}

export default Contact;
