import React from 'react';
import Product from './Product'
import productsData from './productsData'


function App() {

  const productsComponent = productsData.map(item=> <Product key={item.id} product={item} />) 

  return (
    <div>
      {productsComponent}
    </div>
  );
}

export default App
