import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { icons, others } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="footer container">
        <div className="footer__container grid">

            <div className="footer__content">
                <Link to={'/'} className='footer__logo' >
                    <img src={others.logo} alt="" className="footer__logo-img" />
                </Link>

                <h4 className="footer__subtitle">Contact</h4>

                <p className="footer__description">
                    <span>Address:</span> NO Address 
                </p>

                <p className="footer__description">
                    <span>Phone:</span> NO Phone 
                </p>

                <p className="footer__description">
                    <span>Hours</span> 24 Hours 
                </p>

                <div className="footer--social">
                    <h4 className="footer__subtitle">Folle me</h4>
                    <div className="footer__social-links">
                        <a href="https://www.facebook.com/alma.alvaran.779/">
                            <img src={icons.iconFacebook} alt="" className="footer__social-icon" />
                        </a>

                        <a href="https://www.facebook.com/alma.alvaran.779/">
                            <img src={icons.iconYoutube} alt="" className="footer__social-icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">My Account</h3>

                <ul className='footer__links'>
                <li><Link to={'/login'} className='footer__link'>Login</Link></li>
                <li><Link to={'/cart'} className='footer__link'>View Cart</Link></li>
                <li><Link to={'/wishlist'} className='footer__link'>My WishList</Link></li>
                <li><Link to={'/login'} className='footer__link'>Track Order</Link></li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">My Account</h3>

                <ul className='footer__links'>
                <li><Link to={'/login'} className='footer__link'>Login</Link></li>
                <li><Link to={'/cart'} className='footer__link'>View Cart</Link></li>
                <li><Link to={'/wishlist'} className='footer__link'>My WishList</Link></li>
                <li><Link to={'/login'} className='footer__link'>Track Order</Link></li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Secured Payment Gateways</h3>
                <img src={others.paymentMethod} alt="" />

            </div>
        </div>
    </footer>
  )
}

export default Footer