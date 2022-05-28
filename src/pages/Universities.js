import '../css/universities.css';
import letImage from  '../img/leti.png';
import gerImage from  '../img/gerz.png';
import polyImage from  '../img/poly.png';
import itmoImage from  '../img/itmo.png';
import voenImage from  '../img/voen.png';
import guapImage from  '../img/guap.png';
import gornImage from  '../img/gorn.png';
import hseImage from  '../img/hse.png';
import {useEffect, useRef} from "react";
import {useSpring, animated} from "react-spring";


function Universities() {

    useEffect(() => {
        document.title = 'Университеты';
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const effect = useSpring({ from: { opacity: 1 }, to: { opacity: 1 } });

    return (
        <animated.div style={effect}>
            <section className="intro_universities">

                <div className="container intro__container">
                    <h1 className="intro__title"> Университеты </h1>
                </div>

            </section>
            <section className='universities'>

                <div className="universities__container container">
                    <article className="universities__card">
                        <a href="https://etu.ru/ru/abiturientam" className='universities__link'>
                            <img className='universities__image' src={letImage} alt="Логотип ЛЭТИ"/>
                            <h2 className='universities__title'> ЛЭТИ </h2>
                        </a>
                    </article>
                    <article className="universities__card">
                        <a href="https://www.herzen.spb.ru/abitur/" className='universities__link'>
                            <img className='universities__image' src={gerImage} alt="Логотип Герцена    "/>
                            <h2 className='universities__title'> Герцена </h2>
                        </a>
                    </article>
                    <article className="universities__card">
                        <a href="https://www.spbstu.ru/applicants/admissions/" className='universities__link'>
                            <img className='universities__image' src={polyImage} alt="Логотип Политеха"/>
                            <h2 className='universities__title'> Политех </h2>
                        </a>
                    </article>
                    <article className="universities__card">
                        <a href="https://abit.itmo.ru/bachelor" className='universities__link'>
                            <img className='universities__image' src={itmoImage} alt="Логотип ИТМО"/>
                            <h2 className='universities__title'> ИТМО </h2>
                        </a>
                    </article>
                    <article className="universities__card">
                        <a href="https://priem.voenmeh.ru/" className='universities__link'>
                            <img className='universities__image' src={voenImage} alt="Логотип Военмеха"/>
                            <h2 className='universities__title'> Военмех </h2>
                        </a>
                    </article>
                    <article className="universities__card">
                        <a href="https://priem.guap.ru/" className='universities__link'>
                            <img className='universities__image' src={guapImage} alt="Логотип ГУАП"/>
                            <h2 className='universities__title'> ГУАП </h2>
                        </a>
                    </article>
                    <article className="universities__card">
                        <a href="https://priem.spmi.ru/" className='universities__link'>
                            <img className='universities__image' src={gornImage} alt="Логотип Горного"/>
                            <h2 className='universities__title'> Горный </h2>
                        </a>
                    </article>
                    <article className="universities__card">
                        <a href="https://spb.hse.ru/abiturient/" className='universities__link'>
                            <img className='universities__image' src={hseImage} alt="Логотип ВШЭ"/>
                            <h2 className='universities__title'> ВШЭ </h2>
                        </a>
                    </article>
                </div>

            </section>
        </animated.div>
    );

}

export default Universities;