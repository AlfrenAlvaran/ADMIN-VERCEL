import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { others } from '../../assets/assets';

const Home = () => {
    return (
        <>
            <section className="home section-lg">
                <div className="home__container container grid">
                    <div className="home__content">
                        <span className="home__subtitle">Hot promotions</span>
                        <h1 className="home__title">Fashion Trending <span>Great Collection</span></h1>
                        <p className="home__description">Save more with coupons & up to 20% off</p>
                        <Link to='/shop' className='btn'>Shop Now</Link>
                    </div>
                    <img src={others.homeImg} alt="" className='home__img' />
                </div>
            </section>
        </>
    )
}

export default Home