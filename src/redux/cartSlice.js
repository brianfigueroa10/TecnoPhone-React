const { createSlice } = require('@reduxjs/toolkit');
const {
    removeItemFromCart,
    addItemToCart,
} = require('./cartUtils');

const initialState = {
    cartItems: [],
    isCartOpen: false,
    isMenuOpen: false,

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        },
        removeToCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        },
        clearCart: state => {
            return {
                ...state,
                cartItems: [],
            };
        },
        closeCart: state => {
            state.isCartOpen = false;
        },
        toggleCart: state => {
            if (state.isMenuOpen) {
                state.isMenuOpen = false;
            }
            state.isCartOpen = !state.isCartOpen;

        },
        closeMenu: state => {
            state.isMenuOpen = false;
        },
        toggleMenu: (state) => {
            if (state.isCartOpen) {
                state.isCartOpen = false;
            }
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const { addToCart, removeToCart, clearCart, closeCart, toggleCart, closeMenu, toggleMenu } =
    cartSlice.actions;

export default cartSlice.reducer;
