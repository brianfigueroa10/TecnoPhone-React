import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { FieldForm, FormStyled, LoginContainerStyled, LoginEmailStyled } from './RegisterStyles';
import { SectionTitle } from '../../components/UI/SectionTitle/SectionTitle';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import { Button } from '../../components/UI/Button/Button';
import { createUser } from '../../axios/axios-users';
import { currentUser} from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLoading = useSelector((state) => state.user.isLoading);
  const [errors, setErrors] = useState(null);
  const isUser = useSelector((state) => state.user.user);
  const isUserLoggedIn = !!isUser;

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const user = await createUser(values.username, values.email, values.password);
      if (user) {
        dispatch(currentUser({
          ...user,
          token: user.token
        }));
        resetForm();
        setSubmitting(false);

        navigate('/');
        alert("Registro Completo")
      }
    } catch (error) {
      if (error[0].msg === "Email ya registrado") {
        setErrors(`${error[0].msg}`);
      } else if (error[0].msg === "La contraseña debe tener al menos 6 caracteres") {
        setErrors(`${error[0].msg}`);
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
      <SectionTitle>Registro de Usuario</SectionTitle>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormStyled>
            <FieldForm type="text" name="username" placeholder="Nombre" disabled={isUserLoggedIn} />
            <ErrorMessage name="username" component="div" style={{ color: '#F04141' }} />

            <FieldForm type="email" name="email" placeholder="Correo electrónico" disabled={isUserLoggedIn} />
            <ErrorMessage name="email" component="div" style={{ color: '#F04141' }} />

            <FieldForm type="password" name="password" placeholder="Contraseña" disabled={isUserLoggedIn} />
            <ErrorMessage name="password" component="div" style={{ color: '#F04141' }} />

            <Button type="submit" disabled={isSubmitting || isLoading || isUserLoggedIn}>
              {isSubmitting || isLoading ? 'Registrando...' : 'Registrarse'}
            </Button>
            {errors && <div style={{ color: '#F04141' }}>{errors}</div>}
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
