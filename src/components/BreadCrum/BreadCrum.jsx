import React from 'react';

const BreadCrum = ({ product }) => {
  return (
    <div className="breadcrumb">
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.new_price.toFixed(2)}</p>
      {/* Add more breadcrumb details here if needed */}
    </div>
  );
}

export default BreadCrum;
