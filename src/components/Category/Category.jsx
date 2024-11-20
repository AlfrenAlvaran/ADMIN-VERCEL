import React, { useRef } from 'react';
import './Category.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { categories, categoryList } from '../../assets/assets';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const Category = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="categories container section">
            <h1 className="section__title"><span>Popular</span> Categories</h1>
            <div className="categories__container swiper">
                <Link to='/:category' className='category__item'>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={24}
                        slidesPerView={7}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        loop={true}
                    >
                        {categoryList.map((item, i) => {
                            return <SwiperSlide key={i} >

                                <img src={item.img} alt="" className="category__img" />
                                <h3 className="category__title">{item.title}</h3>
                            </SwiperSlide>
                            
                        })}

{/* <button ref={prevRef} className="custom-swiper-button-prev prev"><FaAngleLeft /></button>
<button ref={nextRef} className="custom-swiper-button-next next"><FaAngleRight /></button> */}
                    </Swiper>
                    
                </Link>
                        

            </div>



        </section>
    );
}

export default Category;
