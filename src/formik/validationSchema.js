import * as Yup from 'yup';

export const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Nombre es requerido'),
  cellphone: Yup.string().required('Celular es requerido').matches(/^[0-9]{10}$/, 'El número de celular debe tener 10 dígitos válidos'),
  email: Yup.string().email('Correo electrónico no válido').required('El correo electrónico es requerido'),
  address: Yup.string().required('Dirección es requerido'),
  location: Yup.string().required('Localidad  requerido'),
  province: Yup.string().required('Provincia es requerido'),


});

export const registerValidationSchema = Yup.object({
  username: Yup.string().required('Nombre es requerido'),
  email: Yup.string().email('Correo electrónico no válido').required('El correo electrónico es requerido'),
  password: Yup.string().required('Contraseña es requerida'),
})

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Correo electrónico no válido').required('El correo electrónico es requerido'),
  password: Yup.string().required('Contraseña es requerida'),
});


