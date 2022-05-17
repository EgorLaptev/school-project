import '../css/universities.css';
import letImage from  '../img/leti.png';
import gerImage from  '../img/gerz.png';
import polyImage from  '../img/poly.png';
import itmoImage from  '../img/itmo.png';
import {useEffect} from "react";


function Universities() {

    useEffect(() => {
        document.title = 'Университеты';
    });

    return (
        <>
            <section className="intro_universities">

                <div className="container intro__container">
                    <h1 className="intro__title"> Университеты </h1>
                </div>

            </section>
            <section className='universities'>

                <div className="universities__container container">
                    <article className="universities__card">
                        <img className='universities__image' src={letImage} alt="Логотип ЛЭТИ"/>
                        <h3 className='universities__title'> ЛЭТИ </h3>
                    </article>
                    <article className="universities__card">
                        <img className='universities__image' src={gerImage} alt="Логотип Герцена    "/>
                        <h3 className='universities__title'> Герцена </h3>
                    </article>
                    <article className="universities__card">
                        <img className='universities__image' src={polyImage} alt="Логотип Политеха"/>
                        <h3 className='universities__title'> Политех </h3>
                    </article>
                    <article className="universities__card">
                        <img className='universities__image' src={itmoImage} alt="Логотип ИТМО"/>
                        <h3 className='universities__title'> ИТМО </h3>
                    </article>
                </div>

            </section>
        </>
    );

}

export default Universities;