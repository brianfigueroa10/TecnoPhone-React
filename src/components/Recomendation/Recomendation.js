import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecommendedProducts } from '../../redux/RecommendationSlice';
import { Features, ProductCard, ProductImage, ProductInfo, RecomendationContainer, SpecsDescription, SpecsPrice, SpecsTitle, TopContainer } from './RecomendationStyles';
import { Button, ButtonLinks } from '../UI/Button/Button';
import { SectionTitle } from '../UI/SectionTitle/SectionTitle';
import { addToCart } from '../../redux/cartSlice';


const Recomendation = () => {
  const dispatch = useDispatch();
  const recommendedProducts = useSelector(
    (state) => state.recommended.recommendedProducts
  );


  useEffect(() => {
    dispatch(setRecommendedProducts());
  }, [dispatch]);

  return (
    <RecomendationContainer>
      <TopContainer>
        <SectionTitle>PRODUCTOS RECOMENDADOS</SectionTitle>
        <ButtonLinks prods="true" to='/products'>Todos los Productos</ButtonLinks>
      </TopContainer>

      <ProductCard>
        {recommendedProducts.map(({id, img, name, marca, specs, price}) => (
          <ProductInfo key={id} >
            <ProductImage src={img} alt={name} />
            <Features>
              <SpecsDescription style={{gap:'0'}}>
                <p style={{ fontSize: '14px', textAlign: 'start', color: 'white' }}>{marca}</p>
                <SpecsTitle>{name}</SpecsTitle>
              </SpecsDescription>
              <SpecsDescription>
                {specs.map((desc, ids) => (
                  <li key={ids}>{desc}</li>
                ))}

              </SpecsDescription>
              <SpecsDescription>
                <SpecsPrice>Precio: <span>${price}</span></SpecsPrice>
                <Button onClick={() => dispatch(addToCart({ id, img, name, marca, specs, price }))}>Agregar</Button>
              </SpecsDescription>


            </Features>

          </ProductInfo>
        ))}
      </ProductCard>
    </RecomendationContainer>
  );
};


export default Recomendation
