import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { FieldForm, FormStyled, LoginContainerStyled, LoginEmailStyled } from '../Register/RegisterStyles';
import { SectionTitle } from '../../components/UI/SectionTitle/SectionTitle';
import { Button } from '../../components/UI/Button/Button';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { loginUser } from '../../axios/axios-users';
import { currentUser } from '../../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLoading = useSelector((state) => state.user.isLoading);
  const [errors, setErrors] = useState(null);
  const isUser = useSelector((state) => state.user.user);
  const isUserLoggedIn = !!isUser;

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const user = await loginUser(values.email, values.password);
      if (user) {
        dispatch(currentUser({
          ...user,
          token: user.token
        }));
        resetForm();
        setSubmitting(false);

        navigate('/');
        alert("Inicio Correcto")
      }
    } catch (error) {
      if (error.message === "Usuario no encontrado") {
        setErrors(`${error.message}`);
      } else if (error.message === "Contraseña incorrecta") {
        setErrors(`${error.message}`);
      } else {
        setErrors("Ha ocurrido un error inesperado");
      }
    }
    finally {
      setSubmitting(false);
    }
  }

  return (
    <LoginContainerStyled>
      <SectionTitle>Inicia Sesión</SectionTitle>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
        <FormStyled>
            <FieldForm type="email" id="email" name="email" placeholder="Correo electrónico" disabled={isUserLoggedIn} />
          <ErrorMessage name="email" component="div" style={{ color: '#F04141' }} />

            <FieldForm type="password" id="password" name="password" placeholder="Contraseña" disabled={isUserLoggedIn} />
          <ErrorMessage name="password" component="div" style={{ color: '#F04141' }} />

          <Button type="submit" disabled={isSubmitting || isLoading || isUserLoggedIn}>
            {isSubmitting || isLoading ? 'Ingresando...' : 'Inciar Sesion'}
            </Button>
            {errors && <div style={{ color: '#F04141' }}>{errors}</div>}
          </FormStyled>
        )}
      </Formik>

      <LoginEmailStyled to='/register'> 
        No tenes una cuenta? Registrate!
      </LoginEmailStyled>
    </LoginContainerStyled>
  );
};

export default Login;




