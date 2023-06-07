import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../firebase/firebaseOrders';
import { clearCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Formik } from 'formik';
import { checkoutInitialValues } from '../../formik/initialValues';
import { checkoutValidationSchema } from '../../formik/validationSchema';
import { FieldForm, FormStyled } from '../../pages/Register/RegisterStyles';
import { Button } from '../UI/Button/Button';

const CheckoutForm = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate()

    const total = cartItems.reduce(
        (acc, item) => (acc += item.product.price * item.quantity),
        0
    );

    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
        const orderData = {
            cartItems: cartItems,
            total: total,
            details: {
                name: values.name,
                cellphone: values.cellphone,
                email: values.email,
                address: values.address,
                location: values.location,
                province: values.province,
            }
        }
        // Create order and save to Firebase
        createOrder(orderData, user);

        // Clear cart
        dispatch(clearCart());
        navigate('/congratulation')
        setSubmitting(false);
    };

    return (
        <div>
            <Formik initialValues={checkoutInitialValues}
                validationSchema={checkoutValidationSchema}
                onSubmit={handleSubmit}
            >
                <FormStyled>
                    <label style={{padding:'5px'}}>Datos Personales:</label>
                    <FieldForm type="text" name="name" placeholder="Nombre" />
                    <ErrorMessage name="name" component="div" style={{ color: '#F04141' }} />

                    <FieldForm type="text" name="cellphone" placeholder="Celular" />
                    <ErrorMessage name="cellphone" component="div" style={{ color: '#F04141' }} />

                    <FieldForm type="email" name="email" placeholder="Correo Electronico" />
                    <ErrorMessage name="email" component="div" style={{ color: '#F04141' }} />
                    <label style={{ padding: '5px' }}>Domicilio:</label>
                    <FieldForm type="text" name="address" placeholder="Calle y Número" />
                    <ErrorMessage name="address" component="div" style={{ color: '#F04141' }} />

                    <FieldForm type="text" name="location" placeholder="Localidad" />
                    <ErrorMessage name="location" component="div" style={{ color: '#F04141' }} />

                    <FieldForm type="text" name="province" placeholder="Provincia" />
                    <ErrorMessage name="province" component="div" style={{ color: '#F04141' }} />

                    <Button style={{marginTop:'15px'}} type="submit">Realizar Pedido!</Button>
                </FormStyled>


            </Formik>
        </div>
    );
};

export default CheckoutForm;