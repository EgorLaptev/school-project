import '../css/header.css';
import gerbImage from '../img/gerb.webp';
import barsImage from '../img/bars.svg';
import {useRef} from "react";


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

                    <a href="#" className="page-header__link">
                        <img src={gerbImage} alt="Герб Санкт-Петербурга" className="page-header__logo"/>
                    </a>

                    <button className="page-header__menu-button" id="dropdownButton" onClick={openMenu}>
                        <img src={barsImage} alt='Иконка открытия бокового меню'/>
                    </button>

                    <nav className="page-header__nav main-nav" ref={dropdownMenu} id='dropdownMenu'>
                        <ul className="main-nav__list">
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru" className="main-nav__link"> ГЛАВНАЯ </a>
                            </li>
                            <li className="main-nav__item">

                                <a href="http://school.planeta51.ru/sveden/about.html" className="main-nav__link main-nav__link_dropdown">
                                    СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ
                                </a>

                                <ul className="main-nav__dropdown dropdown">
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Основные сведения </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Структура и органы управления образовательной организацией </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Документы </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="http://school.planeta51.ru/sveden/education.html" className="dropdown__link"> Образование </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Образовательные стандарты и требования </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Материально-техническое обеспечение и оснащенность </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Платные образовательные услуги </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Вакантные места для приема (перевода) обучающихся </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Доступная среда </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Международное сотрудничество </a>
                                    </li>
                                </ul>

                            </li>
                            <li className="main-nav__item">
                                <a href="#" className="main-nav__link main-nav__link_dropdown">
                                    РОДИТЕЛЯМ
                                </a>

                                <ul className="main-nav__dropdown dropdown">
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Прием в первый класс </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Электронный дневник </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="http://school.planeta51.ru/sveden/ostanovi-ogon.html" className="dropdown__link">Безопасность</a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Питание </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> О школе </a>
                                    </li>
                                </ul>

                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/gia.html" className="main-nav__link"> ГИА </a>

                                <ul className="main-nav__dropdown dropdown">
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Основной Государственный Экзамен </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Единый Государственный Экзамен </a>
                                    </li>
                                </ul>


                            </li>
                            <li className="main-nav__item">
                                <a href="#" className="main-nav__link"> ОБУЧЕНИЕ ЛОИ </a>

                                <ul className="main-nav__dropdown dropdown">
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Инновационная деятельность ЛОИ </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Контрольно-оценочные процедуры </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Олимпиада и конкурсы </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Смешанное обучение </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Школьный сайт Дистанционного Обучения </a>
                                    </li>
                                </ul>

                            </li>
                            <li className="main-nav__item">
                                <a href="#" className="main-nav__link main-nav__link_dropdown">
                                    ВОСПИТАНИЕ
                                </a>

                                <ul className="main-nav__dropdown dropdown">
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Программа воспитания </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Программа наставничества </a>
                                    </li>
                                </ul>

                            </li>
                            <li className="main-nav__item">
                                <a href="#" className="main-nav__link main-nav__link_dropdown">
                                    ПОДРАЗДЕЛЕНИЯ
                                </a>

                                <ul className="main-nav__dropdown dropdown">
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Логопед </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Педагог-психолог </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Школьный спортивный клуб </a>
                                    </li>
                                    <li className="dropdown__item">
                                        <a href="#" className="dropdown__link"> Музей </a>
                                    </li>
                                </ul>

                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/top-50-luchshikh-odod-sankt-peterburga.html" className="main-nav__link main-nav__link_active"> ТОП-50 ЛУЧШИХ ОДО САНКТ-ПЕТЕРБУРГА </a>
                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/interesting.html" className="main-nav__link"> ЭТО ИНТЕРЕСНО! </a>
                            </li>
                            <li className="main-nav__item">
                                <a href="http://school.planeta51.ru/sveden/question.html" className="main-nav__link"> ВОПРОСЫ И ОТВЕТЫ </a>
                            </li>
                        </ul>
                    </nav>

                </div>

            </header>

        </>
);

}

export default Header;