import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import sertificat from "../img/product/лоял-1.jpg";
import opt from "../img/product/опт-1.webp";
import tochka from "../img/точка-3.jpg";
import price from "../img/лоял-3.jpg";
import sings from "../img/доп-1.jpg";
import zsy from "../img/svg/zsy.jpeg";





    const Services = () => {
        const location = useLocation();

        useEffect(() => {
            window.scrollTo({
                top: 450,
                behavior: 'smooth'
            });
        }, []);



    return (
        <div className='container py-2'>
            <h1>Послуги, які ми надаєм</h1>
            <div className="container bg-white p-2 rounded products">
                <div className='grid-container'>
                    <div className='grid-item'>
                        <Link to='/sertif'>
                            <img src={sertificat} alt='sertificat' className='img-fluid product-image' />
                            <div className='overlay'>
                                <h4>Готуємо високоякісну та корисну питну воду</h4>
                            </div>
                        </Link>
                    </div>

                    <div className='grid-item'>
                        <Link to='/signUp'>
                        <img src={opt} alt='opt' className='img-fluid product-image' />
                        <div className='overlay'>
                            <h4>Співпрацюємо з оптовими клієнтами та організовуємо доставку води до офісу та дому</h4>
                        </div>
                        </Link>
                    </div>

                    <div className='grid-item'>
                        <Link to='/contact'>
                            <img src={tochka} alt='tochka' className='img-fluid product-image' />
                            <div className='overlay'>
                                <h4>Пропонуємо питну воду споживачам у точці видачі</h4>
                            </div>
                        </Link>
                    </div>

                    <div className='grid-item'>
                        <Link to='/program1'>
                            <img src={price} alt='price' className='img-fluid product-image' />
                            <div className='overlay'>
                                <h4>Пропонуємо вигідну цінову політику</h4>
                            </div>
                        </Link>
                    </div>

                    <div className='grid-item'>
                        <img src={sings} alt='sings' className='img-fluid product-image' />
                        <div className='overlay'>
                            <h4>Пропонуємо супутні товари</h4>
                        </div>
                    </div>

                    <div className='grid-item'>
                        <Link to='/Assistance'>
                            <img src={zsy} alt='zsy' className='img-fluid product-image' />
                            <div className='overlay'>
                                <h4>Підтримуємо ЗСУ</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export { Services };