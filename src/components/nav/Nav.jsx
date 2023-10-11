import "./Nav.scss"
import saytLogo from "../../assets/sayLogo.png"
import { AiOutlineInstagram,AiFillYoutube,AiOutlineClose } from "react-icons/ai"
import { BiLogoFacebook,BiLogoTelegram } from "react-icons/bi"
import { RiArrowDownSLine } from "react-icons/ri" 
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

const Nav = () => {
    const [closeOrOpen,setCloseOrOpen]= useState(false)
    return (
        <nav>
            <div className="nav-wrapper">
                <img className="saytLogo" src={saytLogo} alt="" />
                <div className="saytPages">
                    <ul>
                        <li className="withOutArrow">
                            <a href="#">Новости</a>
                            <div className="hoverLine"></div>
                        </li>
                        <li className="withArrow">
                            <a href="#">Кинопоказы</a>
                            <div className="hoverDiv">
                                <p>Кинопоказы</p>
                                <p>Премьеры</p>
                                <p>Кино за 5 дней</p>
                            </div>
                            <RiArrowDownSLine/>
                        </li>
                        <li className="withArrow">
                            <a href="#">Лица</a>
                            <div className="hoverDiv">
                                <p>Гости</p>
                                <p>Делегации</p>
                                <p>Жюри</p>
                            </div>
                            <RiArrowDownSLine/>
                        </li>
                        <li className="withArrow">
                            <a href="#">Программа</a>
                            <div className="hoverDiv">
                                <p>Программа</p>
                                <p>Мастер-классы</p>
                            </div>
                            <RiArrowDownSLine/>
                        </li>
                        <li className="withOutArrow">
                            <a href="#">Медиа</a>
                            <div className="hoverLine"></div>
                        </li>
                        <li className="withOutArrow">
                            <a href="#">История</a>
                            <div className="hoverLine"></div>
                        </li>
                    </ul>
                </div>
                <div className="seeUs">
                    <a href="https://www.instagram.com/"><AiOutlineInstagram/></a>
                    <a href="https://www.facebook.com/"><BiLogoFacebook/></a>
                    <a href="https://web.telegram.org/a/"><BiLogoTelegram/></a>
                    <a href="https://www.youtube.com/"><AiFillYoutube/></a>
                </div>
                <div className="navLanguages">
                    <div className="lang ru">
                        <strong>Ru</strong>
                        <RiArrowDownSLine/>
                    </div>
                    <div className="langHover">
                        <div className="lang uz">
                            <strong>Uz</strong>
                        </div>
                        <div className="lang eng">
                            <strong>Eng</strong>
                        </div>
                    </div>
                </div>
                <div className="hamburger">
                    <RxHamburgerMenu style={closeOrOpen === true ? {display:"none"}:{display:"block"}} onClick={()=>setCloseOrOpen(true)}/>
                    <AiOutlineClose style={closeOrOpen === false ? {display:"none"}:{display:"block"}}  onClick={()=>setCloseOrOpen(false)}/>
                </div>
                <div style={closeOrOpen === true ? {marginLeft:"0"}:{marginLeft:"-400px"}} className="mediaNav">
                    <img src={saytLogo} alt=""/>
                        <div className="navWithOutArrow">
                            <p>Новости</p>
                        </div>
                        <div className="navWithArrow">
                            <p>Кинопоказы <RiArrowDownSLine/><br /><div><span>Кинопоказы</span><br /><span>Премьеры</span><br /><span>Кино за 5 дней</span></div></p>
                        </div>
                        <div className="navWithArrow">
                            <p>Лица <RiArrowDownSLine/><div className="boshqaa"><br /><span>Гости</span><br /><span>Делегации</span><br /><span>Жюри</span></div></p>
                        </div>
                        <div className="navWithArrow">
                            <p>Программа <RiArrowDownSLine/><br /><div className="boshqa"><span>Программа</span><br /><span>Мастер-классы</span></div></p>
                        </div>
                        <div className="navWithOutArrow">
                            <p>Медиа</p>
                        </div>
                        <div className="navWithOutArrow">
                            <p>История</p>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav