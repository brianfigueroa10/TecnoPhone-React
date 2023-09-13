import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartImage, CartMarcaItem, CartNameItem, CartPrice, CartSpecs, CartSpecsInfo, MinusIcon, NoProducts, PlusIcon, QuantityContainer } from '../Navbar/ModalCart/CartModalStyles';
import { formatPrice } from '../../utils/utils';
import { motion } from 'framer-motion';
import { addToCart, removeToCart } from '../../redux/cartSlice';
import { CheckoutCardInfo, CheckoutCardSpecs, CheckoutContainer } from './CheckoutCardStyles';
import { PriceTotal } from '../../pages/Orders/OrdersStyles';


const CheckoutCard = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
        const totalPrice = cartItems.reduce(
        (acc, item) => (acc += item.product.price * item.quantity),
        0
    );
    return (
            <CheckoutContainer>
                {cartItems.length ? cartItems.map((item) => (
                    <CheckoutCardInfo key={item.product.id}>
                        <CartImage src={item.product.img} alt={item.product.name} />
                        <CartSpecs style={{gap:'10px'}}>
                            <CartSpecsInfo>
                                <CartMarcaItem>{item.product.marca}</CartMarcaItem>
                                <CartNameItem>{item.product.name}</CartNameItem>
                            </CartSpecsInfo>
                            <CartPrice>Precio: <span>{formatPrice(item.product.price)}</span></CartPrice>
                        </CartSpecs>
                        <QuantityContainer>
                            <motion.div whileTap={{ scale: 1.2 }}>
                                <MinusIcon onClick={() => dispatch(removeToCart(item.product.id))}>-</MinusIcon>
                            </motion.div>
                            <span style={{ color: 'white', fontSize: '25px', background: 'none' }}>{item.quantity}</span>
                            <motion.div whileTap={{ scale: 1.2 }}>
                                <PlusIcon onClick={() => dispatch(addToCart({ ...item.product, quantity: item.quantity }))}>+</PlusIcon>
                            </motion.div>
                        </QuantityContainer>
                       
                    </CheckoutCardInfo>
                )) : (
                    <NoProducts>No hay productos todavía</NoProducts>
            )}
            {cartItems.length>0  && <PriceTotal> Total: {formatPrice(totalPrice)}</PriceTotal> }
            
            </CheckoutContainer>
    )
}

export default CheckoutCard
