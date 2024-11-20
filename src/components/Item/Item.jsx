import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Context';
import './Item.css';
import { Link } from 'react-router-dom';
import { FaStar, FaEye, FaHeart } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const ItemDisplay = ({ tab }) => {
  const { all_product } = useContext(ShopContext);

  // Filter products based on selected tab
  const filteredProducts = tab === 'All' ? all_product : all_product.filter(product => product.badge.toLowerCase() === tab.toLowerCase());

  return (
    <div className='tab__items'>
      <div className="tab__item">
        <div className="product__container grid">
          {filteredProducts.map((item, id) => (
           <div className="product__item" key={id}> 
             <div  className="product__banner">
              <Link to={`/shop/product/${item._id}`} className='product__images'>
                <img src={item.img1} alt="" className="product__img default" />
                <img src={item.img2} alt="" className="product__img hover" />
              </Link>

              <div className='product__actions'>
                <Link to={`/shop/product/${item._id}`} aria-label='Quick-View' className='action__btn'>
                  <FaEye />
                </Link>
                <Link to='/wishlist' aria-label='Add to Wishlist' className='action__btn'>
                  <FaHeart />
                </Link>
                <Link to='/compare' aria-label='Compare' className='action__btn'>
                  <IoShuffle />
                </Link>
              </div>

              {item.badge && <div className="product__badge">{item.badge}</div>}

              <div className="product__content ">
                <span className="product__category">{item.category}</span>
                <Link to={`/shop/product/${item._id}`}>
                  <h3 className="product__title">{item.title}</h3>
                </Link>

                <div className="product__rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="product__price flex">
                  <span className="new__price">${item.new_price.toFixed(2)}</span>
                  <span className="old__price">${item.old_price.toFixed(2)}</span>
                </div>

                <Link to={'/cart'} className='action__btn cart__btn' aria-label='Cart View' >
                  <IoCartOutline />
                </Link>
              </div>
            </div>
           </div>
          ))}
        </div>
      </div>


      
    </div>
  );
}

export default ItemDisplay;
