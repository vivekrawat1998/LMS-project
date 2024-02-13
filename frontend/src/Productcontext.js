// Productcontext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';  // Corrected import statement

const ProductContext = createContext({
    products: [],
    setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ setProducts, products, error }}>
      {children}
    </ProductContext.Provider>
  );
};
