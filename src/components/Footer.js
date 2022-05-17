import '../css/footer.css';
import QRImage from '../img/qr.png';


function Footer() {

    return (
        <>
            <footer className="page-footer">

                <div className="page-footer__container container">

                    <div className="page-footer__contacts contacts">

                        <h3 className="contacts__title"> Контакты </h3>

                        <ul className="contacts__list">
                            <li className="contacts__item"> АДРЕС Крестовский просп., 7, Санкт-Петербург, Россия </li>
                            <li className="contacts__item"> ТЕЛЕФОН
                                <a href="tel:88124176212" className="contacts__link"> +7(812)417-62-12 </a>
                            </li>
                            <li className="contacts__item"> EMAIL
                                 <a href="mailto:info.sch51petr@obr.gov.spb.ru" className="contacts__link"> info.sch51petr@obr.gov.spb.ru </a>
                            </li>
                            <li className="contacts__item"> VKONTAKTE
                                <a href="https://vk.com/public199260089" className="contacts__link"> https://vk.com/public199260089 </a>
                            </li>
                        </ul>

                    </div>

                    <img className="page-footer__qr" src={QRImage} alt="QR код страницы"/>

                </div>

            </footer>
        </>
    );

}

export default Footer;