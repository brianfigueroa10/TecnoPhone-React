import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialProducts, loadMoreProducts } from '../../redux/productsSlice';
import { Features, ProductImage, ProductInfo, SpecsDescription, SpecsPrice, SpecsTitle } from '../Recomendation/RecomendationStyles';
import { Button } from '../UI/Button/Button';
import { ContainerProducts, ProductsDiv } from './ProductListStyles';
import { formatPrice } from '../../utils/utils';
import { addToCart } from '../../redux/cartSlice';

const ProductsList = () => {
    const dispatch = useDispatch();
    const visibleProducts = useSelector(state => state.products.visibleProducts);
    const isMoreVisible = useSelector(state => state.products.isMoreVisible);
    const selectedCategory = useSelector(state => state.categories.selectedCategory);


    useEffect(() => {
        dispatch(setInitialProducts(selectedCategory));
    }, [dispatch, selectedCategory]);

    return (
        <ContainerProducts>
            <ProductsDiv>
                {visibleProducts.map(({ id, img, name, marca, specs, price }) => (
                    <ProductInfo key={id}>
                        <ProductImage src={img} alt={name} />
                        <Features>
                            <SpecsDescription style={{ gap: '0' }}>
                                <p>{marca}</p>
                                <SpecsTitle>{name}</SpecsTitle>
                            </SpecsDescription>
                            <SpecsDescription>
                                {specs.map((desc, ids) => (
                                    <li key={ids}>{desc}</li>
                                ))}

                            </SpecsDescription>
                            <SpecsDescription>
                                <SpecsPrice>Precio: <span>{formatPrice(price) }</span></SpecsPrice>
                                <Button onClick={() => dispatch(addToCart({ id, img, name, marca, specs, price }))}>Agregar</Button>
                            </SpecsDescription>

                        </Features>
                        
                    </ProductInfo>
                ))}
            </ProductsDiv>
            {isMoreVisible && (
                <Button onClick={() => dispatch(loadMoreProducts())}>Ver más</Button>
            )}
        </ContainerProducts>
    );
};

export default ProductsList;