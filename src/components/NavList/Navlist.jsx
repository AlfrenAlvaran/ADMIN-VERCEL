import React, { useState } from 'react'
import './Navlist.css'
import { Link } from 'react-router-dom'
import { icons, others } from '../../assets/assets'
const Navlist = () => {
    const [menu, setMenu] = useState('home')
    return (
        <div className='nav container'>
            <Link to='/'>
                <img src={others.logo} alt="" className="nav__logo-img" />
            </Link>

            <div className="nav__menu" id="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className={menu === 'home' ? 'nav__link active-link' : 'nav__link'}>Home</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/shop" className={`nav__link ${menu === 'shop' ? 'active-link' : ''}`}>Shop</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/accounts" className={`nav__link ${menu === 'accounts' ? 'active-link' : ''}`}>My Accounts</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/compare" className={`nav__link ${menu === 'compare' ? 'active-link' : ''}`}>Compare</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/login" className={`nav__link ${menu === 'login' ? 'active-link' : ''}`}>Login</Link>
                    </li>
                </ul>


                <div className="header__search">
                    <input type="text" placeholder='search' className='form__input' />
                    <button className='search__btn'>
                        <img src={icons.search} alt="" />
                    </button>
                </div>
            </div>

            <div className="header__user-actions">
                <Link to='./wishlist' className='header__action-btn'>
                    <img src={icons.iconHeart} alt="" />
                    <span className="count">3</span>
                </Link>

                <Link to='./cart' className='header__action-btn'>
                    <img src={icons.iconCart} alt="" />
                    <span className="count">3</span>
                </Link>
            </div>

        </div>
    )
}

export default Navlist