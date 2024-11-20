import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/Context';
import BreadCrum from '../../components/BreadCrum/BreadCrum';

const Product = () => {
  const { _id } = useParams();
  const { all_product } = useContext(ShopContext);
  const product = all_product.find(e => e._id === Number(_id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <BreadCrum product={product} />
      {/* Add more product details here if needed */}
    </div>
  );
}

export default Product;
