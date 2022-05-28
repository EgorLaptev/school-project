import '../css/header.css';
import logo from '../img/logo.svg';
import barsImage from '../img/bars.svg';
import {useRef} from "react";
import {Link} from "react-router-dom";


function Header() {

    const dropdownMenu = useRef();
    const backdrop     = useRef();

    function openMenu() {
        dropdownMenu.current.classList.toggle('menu-open');
        backdrop.current.classList.toggle('show');
    }

    function closeMenu() {
        dropdownMenu.current.classList.remove('menu-open');
        backdrop.current.classList.remove('show');
    }

    return (
        <>


            <header className="page-header">

                <div className="container page-header__container">

                    <div id='backdrop' ref={backdrop} onClick={closeMenu}/>


                    <Link to='/' className="page-header__link">
                        <img src={logo} alt="Герб Санкт-Петербурга" className="page-header__logo"/>
                    </Link>


                    <button className="page-header__menu-button" id="dropdownButton" onClick={openMenu}>
                        <img src={barsImage} alt='Иконка открытия бокового меню'/>
                    </button>

                    <nav className="page-header__nav main-nav" ref={dropdownMenu} id='dropdownMenu'>
                        <ul className="main-nav__list">
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru" className="main-nav__link"> ГЛАВНАЯ </a>
                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/about.html" className="main-nav__link main-nav__link_dropdown">СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ</a>
                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/gia.html" className="main-nav__link"> ГИА </a>
                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/interesting.html" className="main-nav__link"> ЭТО ИНТЕРЕСНО </a>
                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/question.html" className="main-nav__link"> ВОПРОСЫ И ОТВЕТЫ </a>
                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/top-50-luchshikh-odod-sankt-peterburga.html" className="main-nav__link"> ТОП-50 ЛУЧШИХ ОДО САНКТ-ПЕТЕРБУРГА </a>
                            </li>
                        </ul>
                    </nav>

                </div>

            </header>

        </>
);

}

export default Header;