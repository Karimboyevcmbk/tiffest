import "./Footer.scss"
import { AiOutlineInstagram,AiFillYoutube, } from "react-icons/ai"
import { BiLogoFacebook,BiLogoTelegram } from "react-icons/bi"

const Footer = () => {
  return (
    <div className="footerContainer">
    <footer>
        <h2>Контакты</h2>
        <div className="footerTitles">
            <div className="title1">
                <p>Телефон:</p>
                <div className="hoverSpan">
                    <span>+998 71 209 20 02</span>
                    <div className="Lien boshqa2"></div>
                </div>
            </div>
            <div className="title1">
                <p>Эл.почта:</p>
                <div className="hoverSpan">
                    <span>ft@gmail.com</span>
                    <div className="Lien boshqacha boshqa2"></div>
                </div>
            </div>
            <div className="title1 title2">
                <p>Соц.сети:</p>
                <div className="hoverSpan">
                    <span><AiOutlineInstagram/>Instagram </span>
                    <div className="Lien boshqa2"></div>
                </div>
                <div className="hoverSpan">
                    <span><BiLogoTelegram/>Telegram</span>
                    <div className="Lien boshqa2"></div>
                </div>
                <div className="hoverSpan ">
                    <span><BiLogoFacebook/>Facebook</span>
                    <div className="Lien boshqa2"></div>
                </div>
                <div className="hoverSpan ">
                    <span><AiFillYoutube/>Youtube</span>
                    <div className="Lien boshqa2"></div>
                </div>
            </div>
            <div className="title1">
                <p>Адрес:</p>
                <div className="hoverSpan">
                    <span>г. Ташкент ул. Чиланзар 2, 100027</span>
                    <div className="Lien boshqa2"></div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer