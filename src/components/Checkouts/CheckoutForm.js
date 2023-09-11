import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Formik } from 'formik';
import { checkoutInitialValues } from '../../formik/initialValues';
import { checkoutValidationSchema } from '../../formik/validationSchema';
import { FieldForm, FormStyled } from '../../pages/Register/RegisterStyles';
import { Button } from '../UI/Button/Button';
import { createOrder } from '../../axios/axios-orders';

const CheckoutForm = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.user.user);
    const userID = useSelector((state) => state.user.user.user._id);
    const navigate = useNavigate()

    const total = cartItems.reduce(
        (acc, item) => (acc += item.product.price * item.quantity),
        0
    );

    const dispatch = useDispatch();

    const handleSubmit = async (values, { setSubmitting }) => {
        const orderData = {
            userId: userID,
            items: cartItems,
            total: total,
            shippingDetail: {
                name: values.name,
                cellphone: values.cellphone,
                email: values.email,
                address: values.address,
                location: values.location,
                province: values.province,
            },
        }

        try {
            await createOrder(orderData, dispatch, user);
            setSubmitting(false);
        } catch (error) {
            console.log(error);
            
        }

        // Clear cart
        dispatch(clearCart());
        navigate('/congratulation')
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