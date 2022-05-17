import '../css/gia.css';
import egeImage from  '../img/ege.png';
import {useEffect} from "react";


function Ege() {

    useEffect(() => {
        document.title = 'Информация о ЕГЭ';
    });

    return (
        <>
            <section className="intro_ege">
                <div className="container intro__container">
                    <h1 className="intro__title"> ЕГЭ </h1>
                </div>
            </section>
            <section className='resources'>

                <div className="resources__container container">
                    <article className="resources__card">
                        <a href="https://kpolyakov.spb.ru/school/ege/generate.htm" className='resources__link'/>
                        {/*<img className='resources__image' src={letImage} alt="Логотип ЛЭТИ"/>*/}
                        <h3 className='resources__title'> К. Поляков </h3>
                    </article>
                    <article className="resources__card">
                        <a href="https://ege.sdamgia.ru/" className='resources__link'/>
                        {/*<img className='resources__image' src={egeImage} alt="Логотип Решу ЕГЭ    "/>*/}
                        <h3 className='resources__title'> Решу ЕГЭ </h3>
                    </article>
                    <article className="resources__card">
                        <a href="https://fipi.ru/" className='resources__link'/>
                        {/*<img className='resources__image' src={egeImage} alt="Логотип Решу ЕГЭ    "/>*/}
                        <h3 className='resources__title'> Фипи </h3>
                    </article>
                </div>

            </section>
        </>
    );

}

export default Ege;