export const addItemToCart = (cartItems, product) => {
    const existingCartItem = cartItems.find(item => item.product.id === product.id);

    if (existingCartItem) {
        return cartItems.map(item =>
            item.product.id === existingCartItem.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }
    return [...cartItems, { product, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, id) => {
    const productToRemove = cartItems.find(item => item.product.id === id);

    if (productToRemove?.quantity > 1) {
        return cartItems.map(item =>
            item.product.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
    } else if (productToRemove?.quantity === 1) {
        const confirmation = window.confirm("¿Desea eliminar el producto del carrito?");
        if (confirmation) {
            return cartItems.filter(item => item.product.id !== id);
        }
    }
    return cartItems;
};



