
 import { CustomLink } from './CustomLink'

import {NavLink,Outlet } from 'react-router-dom';
 import logoImg from "../img/svg/aquarius-svgrepo-com.svg";
 import {Card} from "react-bootstrap";
 import Promo from "./promo/promo";
 import promoImg from "../img/product/vo-voter.jpeg";
const setActive =  ({isActive})=> isActive ? 'active-link' : '';

const Layout = () => {
    return (
        <>

            <header className='header'>
                <div className='container'>
                    <div className='header_row'>

                        <div className='header_logo'>
                            <img src={logoImg} alt='Logo'/>
                            <span>Чиста вода у кожен дім</span>
                        </div>
                        <nav className='header_nav'>
                            <NavLink to="/"
                                     style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white',textDecoration: 'none',})}>ГОЛОВНА</NavLink>

                            <CustomLink to="/about" className={setActive} >ПРО КОМПАНІЮ</CustomLink>
                            <CustomLink to='/services' className={setActive}>ПОСЛУГИ, ЯКІ МИ НАДАЄМ</CustomLink>
                            <CustomLink to="/contact" className={setActive}>КОНТАКТИ</CustomLink>
                            <CustomLink to="/assistance" className={setActive}>ДОПОМОГА ЗСУ</CustomLink>
                            <CustomLink to="/posts" className={setActive}>БЛОГ</CustomLink>

                    </nav>
                </div>

                </div>

            </header>
            <Outlet/>

            <footer className='footer'>

                <div className='footer_row'>
                    Prog Academy &copy; 2023-2024
                </div>

            </footer>
            {/*<main className="container">*/}

            {/*</main>*/}
            {/*<Promo/>*/}


            {/*<footer className="container">&copy; ReactRouter Tutorials 2022</footer>*/}

        </>
    )
}

 export {Layout}
