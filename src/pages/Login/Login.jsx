import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { loginUser } from '../../firebase/firebaseLogin';
import { FieldForm, FormStyled, LoginContainerStyled, LoginEmailStyled } from '../Register/RegisterStyles';
import { SectionTitle } from '../../components/UI/SectionTitle/SectionTitle';
import { Button } from '../../components/UI/Button/Button';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    loginUser(values.email, values.password, dispatch);
    setSubmitting(false);
    resetForm();
    navigate('/')
    
  };

  return (
    <LoginContainerStyled>
      <SectionTitle>Inicia Sesión</SectionTitle>
      <Formik initialValues={loginInitialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit
      }>
        {({ isSubmitting }) => (
        <FormStyled>
          <FieldForm type="email" id="email" name="email" placeholder="Correo electrónico" />
          <ErrorMessage name="email" component="div" style={{ color: '#F04141' }} />

          <FieldForm type="password" id="password" name="password" placeholder="Contraseña" />
          <ErrorMessage name="password" component="div" style={{ color: '#F04141' }} />

          <Button type="submit" disabled={isSubmitting || isLoading}>
            {isSubmitting || isLoading ? 'Ingresando...' : 'Inciar Sesion'}
          </Button>
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




