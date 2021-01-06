import React, { useEffect, useState } from 'react';

import './styles.css';
import StepsHeader from './StepsHeader';
import ProductList from './ProductList';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <StepsHeader />
      <ProductList products={products}/>
    </div>
  )
}

export default Orders;