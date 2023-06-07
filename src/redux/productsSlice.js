import { createSlice } from '@reduxjs/toolkit';
import { productsData } from '../data/ProductsData';
import { getRandomProducts } from './RecommendationSlice';

const initialState = {
    products: productsData,
    visibleProducts: [],
    isMoreVisible: false,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setInitialProducts: (state, action) => {
            const selectedCategory = action.payload;
            let products = [];

            if (selectedCategory === 'todos') {
                products = state.products; // Mostrar todos los productos si la categoría seleccionada es 'todos'
            }

            else {
                products = state.products.filter(product => product.category === selectedCategory);
            }

            state.visibleProducts = getRandomProducts(products.slice(0, 8)); // Mostrar los primeros 8 productos
            state.isMoreVisible = products.length > 8; // Comprobar si hay más productos para mostrar
        },
        loadMoreProducts: (state) => {
            const visibleCount = state.visibleProducts.length;
            const allCount = state.products.length;

            const startIndex = visibleCount; // Índice de inicio para cargar más productos
            const endIndex = Math.min(visibleCount + 6, allCount); // Índice de fin para cargar más productos

            state.visibleProducts = [...state.visibleProducts, ...state.products.slice(startIndex, endIndex)]; // Agregar más productos al estado visible
            state.isMoreVisible = endIndex < allCount; // Comprobar si hay más productos para mostrar
        },
    },
});


export const { setInitialProducts, loadMoreProducts } = productsSlice.actions;

export default productsSlice.reducer;
