import { createSlice } from '@reduxjs/toolkit';
import { productsData } from '../data/ProductsData';

const initialState = {
    recommendedProducts: [],
};

const RecommendedProductsSlice = createSlice({
    name: 'recommended',
    initialState,
    reducers: {
        setRecommendedProducts: (state) => {
            // Obtén 6 productos aleatorios de productsData
            const randomProducts = getRandomProducts(productsData.slice(), 6);;
            state.recommendedProducts = randomProducts;
        },
    },
});

// Función para obtener productos aleatorios
export const getRandomProducts = (products, count) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export const { setRecommendedProducts } = RecommendedProductsSlice.actions;

export default RecommendedProductsSlice.reducer;