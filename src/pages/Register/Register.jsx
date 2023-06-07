import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { register } from '../../firebase/firebaseRegister';
import { FieldForm, FormStyled, LoginContainerStyled, LoginEmailStyled } from './RegisterStyles';
import { SectionTitle } from '../../components/UI/SectionTitle/SectionTitle';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import { Button } from '../../components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);

  const handleSubmit = async (values, {resetForm}) => {
    dispatch(register(values));
    resetForm();
    navigate("/")

  };

  return (
    <LoginContainerStyled>
      <SectionTitle>Registro de Usuario</SectionTitle>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormStyled>
            <FieldForm type="text" name="name" placeholder="Nombre" />
            <ErrorMessage name="name" component="div" style={{ color: '#F04141' }} />

            <FieldForm type="email" name="email" placeholder="Correo electrónico" />
            <ErrorMessage name="email" component="div" style={{ color: '#F04141' }} />

            <FieldForm type="password" name="password" placeholder="Contraseña" />
            <ErrorMessage name="password" component="div" style={{ color: '#F04141' }} />

            <Button type="submit" disabled={isSubmitting || isLoading}>
              {isSubmitting || isLoading ? 'Registrando...' : 'Registrarse'}
            </Button>
            {error && <p>{error}</p>}
          </FormStyled>
        )}
      </Formik>
      <LoginEmailStyled to="/login">
        Ya tienes una cuenta? ¡Inicia Sesión!
      </LoginEmailStyled>
    </LoginContainerStyled>
  );
};

export default Register;
