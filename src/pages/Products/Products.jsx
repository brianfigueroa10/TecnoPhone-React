import React from 'react'
import { ProductsWrapper } from './ProductsStyles'



import { SectionTitle } from '../../components/UI/SectionTitle/SectionTitle'

import Categories from '../../components/Categories/Categories'

import ProductsList from '../../components/ProductList/ProductList'

const Products = () => {
  return (
    <ProductsWrapper>
      <SectionTitle>NUESTROS PRODUCTOS</SectionTitle>
      <Categories  />
      <ProductsList />
    </ProductsWrapper>
  )
}

export default Products
