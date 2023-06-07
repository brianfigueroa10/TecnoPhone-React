import { createSlice } from '@reduxjs/toolkit';
import { CategoriesData } from '../data/CategoriesData';

const initialState = {
  categories: CategoriesData,
  selectedCategory: 'todos',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;