import React from 'react'
import { CartInfo, MinusIcon, PlusIcon, QuantityContainer } from './CartModalStyles';
import { CartImage, CartMarcaItem, CartNameItem, CartPrice, CartSpecs, CartSpecsInfo } from './CartModalStyles'
import { formatPrice } from '../../../utils/utils'
import { useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../../../redux/cartSlice'
import { motion } from 'framer-motion';


const CartProduct = ({ item }) => {
    const dispatch = useDispatch();
    const { id, img, name, marca, specs, price } = item.product;
    const { quantity } = item

    return (
        <CartInfo>
            <CartImage src={img} alt={name} />
            <CartSpecs>
                <CartSpecsInfo>
                    <CartMarcaItem>{marca}</CartMarcaItem>
                    <CartNameItem>{name}</CartNameItem>
                </CartSpecsInfo>
                <CartPrice>Precio: <span>{formatPrice(price)}</span></CartPrice>
            </CartSpecs>
            <QuantityContainer>
                <motion.div whileTap={{ scale: 1.2 }}>
                    <MinusIcon onClick={() => dispatch(removeToCart(id))}>-</MinusIcon>
                </motion.div>
                <span style={{ color: 'white', fontSize: '25px', background:'none'}}>{quantity}</span>
                <motion.div whileTap={{ scale: 1.2 }}>
                    <PlusIcon onClick={() => dispatch(addToCart({ id, img, name, marca, specs, price, quantity }))}>+</PlusIcon>
                </motion.div>
            </QuantityContainer>

        </CartInfo>
    )
}

export default CartProduct;
