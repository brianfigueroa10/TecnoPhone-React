import React from 'react';
import { CardCategory, CardsCategory, CategoriesContainer } from './CategoriesStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categoriesSlice';
import { setInitialProducts } from '../../redux/productsSlice';

const Categories = () => {
    const allCategories = useSelector(state => state.categories.categories);
    const selectedCategory = useSelector(state => state.categories.selectedCategory);
    const dispatch = useDispatch();

    const handleCategorySelect = (category) => {
        dispatch(selectCategory(category));
        dispatch(setInitialProducts(category));
    };

    return (
        <CategoriesContainer>
            <h3>Categorias:</h3>
            <CardsCategory>
                {allCategories.map(category => (
                    <CardCategory
                        key={category.id}
                        selected={category.category === selectedCategory}
                        onClick={() => handleCategorySelect(category.category)}>
                        {category.title}
                    </CardCategory>
                ))}
            </CardsCategory>
        </CategoriesContainer>
    );
};

export default Categories;
