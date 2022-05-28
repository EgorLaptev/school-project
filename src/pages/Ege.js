import '../css/gia.css';
import {useEffect} from "react";

function Ege() {

    useEffect(() => {
        document.title = 'Информация о ЕГЭ';
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

                    <div className="resources__group">

                        <h2 className='resources__label'> Тесты </h2>

                        <article className="resources__card">
                            <a href="https://kpolyakov.spb.ru/school/ege/generate.htm" className='resources__link'> К. Поляков </a>
                        </article>
                        <article className="resources__card">
                            <a href="https://ege.sdamgia.ru/" className='resources__link'> Решу ЕГЭ </a>
                        </article>
                        <article className="resources__card">
                            <a href="https://kompege.ru/" className='resources__link'> КЕГЭ </a>
                        </article>
                    </div>

                    <div className="resources__group">

                        <h2 className='resources__label'> Youtube - каналы </h2>

                        <article className="resources__card">
                            <a href="https://www.youtube.com/c/GTai_Talos" className='resources__link'>GTai </a>
                        </article>
                        <article className="resources__card">
                            <a href="https://www.youtube.com/c/IoanPlugar_inf" className='resources__link'>Иван Викторович </a>
                        </article>
                        <article className="resources__card">
                            <a href="https://www.youtube.com/channel/UCSdmht0kbvfnItRMNcr4qZA/videos" className='resources__link'> Математик МГУ </a>
                        </article>
                        <article className="resources__card">
                            <a href="https://www.youtube.com/c/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%91%D0%A3" className='resources__link'> Информатик БУ </a>
                        </article>
                        <article className="resources__card">
                            <a href="https://www.youtube.com/user/axelofan2010" className='resources__link'> Алексей Кабанов </a>
                        </article>
                        <article className="resources__card">
                            <a href="https://www.youtube.com/c/pvictor54/videos" className='resources__link'> Павел ВИКТОР </a>
                        </article>
                    </div>

                    <div className="resources__group">

                        <h2 className='resources__label'> Другое </h2>

                        <article className="resources__card">
                            <a href="https://fipi.ru/" className='resources__link'> Фипи </a>
                        </article>
                        <article className="resources__card">
                            <a href="https://4ege.ru/" className='resources__link'> 4ЕГЭ </a>
                        </article>

                    </div>

                </div>

            </section>
        </>
    );

}

export default Ege;