import '../css/home.css';
import egeImage from '../img/gia.webp';
import scheduleImage from '../img/schedule.webp';
import universitiesImage from '../img/universities.webp';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import React from "react";

class Home extends React.Component {

    componentDidMount() {
        document.title = 'Главная';
    }

    render() {

        return (

            <>
                <section className="intro">

                    <div className="container intro__container">
                        <h2 className="intro__subtitle"> ГБОУ СОШ № 51 Петроградского района <wbr/> Санкт-Петербурга </h2>
                        <h1 className="intro__title"> ФИЗМАТ </h1>
                    </div>

                </section>

                <section className="navigation">

                    <div className="container navigation__container">

                        <ul className="navigation__list">

                            <Link to='/ege'>
                                <li className="navigation__item card">
                                    <img className="card__img" src={egeImage} alt=""/>
                                    <h3 className="card__title"> подготовка к егэ </h3>
                                </li>
                            </Link>

                            <Link to='/universities'>
                                <li className="navigation__item card">
                                    <img className="card__img" src={ universitiesImage } alt=""/>
                                    <h3 className="card__title"> ИНФОРМАЦИЯ О ВУЗах </h3>
                                </li>
                            </Link>


                            <Link to='/schedule'>
                                <li className="navigation__item card">
                                    <img className="card__img" src={scheduleImage} alt=""/>
                                    <h3 className="card__title"> Расписание </h3>
                                </li>
                            </Link>

                        </ul>

                    </div>

                </section>
            </>


        );
    }

}

export default Home;