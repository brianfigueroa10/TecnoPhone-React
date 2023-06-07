import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, closeCart} from '../../../redux/cartSlice';
import { CartContent, CloseCart, Cost, CostInfo, ModalContainer, ModalOverlayStyled, NoProducts, TopCartContainer, } from './CartModalStyles';
import CartProduct from './CartProduct';
import { motion } from 'framer-motion'
import { SectionTitle } from '../../UI/SectionTitle/SectionTitle';
import { Button } from '../../UI/Button/Button';
import { formatPrice } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';


const CartModal = () => {
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClose = () => {
        dispatch(closeCart());
    };
    const totalPrice = cartItems.reduce(
        (acc, item) => (acc += item.product.price * item.quantity),
        0
    );


    return (
        <>
            {isCartOpen && (
                <>
                    <ModalOverlayStyled onClick={handleClose} />
                    <ModalContainer>
                        <div style={{ textAlign: 'center', height: '800px' }}>
                            <TopCartContainer>
                                <SectionTitle>Carrito de Compras</SectionTitle>
                                <motion.div style={{ textAlign: 'end', background: 'none', justifyContent: 'flex-end' }} whileTap={{ scale: 1.2 }}>
                                    <CloseCart onClick={handleClose}>Cerrar</CloseCart>
                                </motion.div>
                            </TopCartContainer>
                            <Button disabled={cartItems.length === 0} onClick={() => dispatch(clearCart())}>Vaciar Carrito</Button>
                            <CartContent>
                                {cartItems.length ? cartItems.map((item) => (
                                    <CartProduct key={item.product.id} item={item} />
                                )) : (
                                    <NoProducts>No hay productos todavía</NoProducts>
                                )}
                            </CartContent>
                        </div>
                        <Cost>
                            <CostInfo>
                                <p>Total: </p>
                                <span style={{ color: 'orange', fontWeight: '600', fontSize: '20px' }}>{formatPrice(totalPrice)}</span>
                            </CostInfo>
                            <Button disabled={cartItems.length === 0} onClick={() => {
                                navigate("/checkout");
                                handleClose();

                            }
                            }>Iniciar Compra!</Button>
                        </Cost>
                    </ModalContainer>
                </>

            )}
        </>
    );
};

export default CartModal;

