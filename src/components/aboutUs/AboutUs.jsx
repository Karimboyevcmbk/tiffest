import "./AboutUs.scss"
import saytLogo from "../../assets/sayLogo.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const AboutUs = () => {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <div data-aos="fade-up" data-aos-duration="3000"  className='aboutUs'>
        <div className="bilmadms">
            <h2>TIFFEST-2022</h2>
            <p>TIFFEST-2022</p>
            <div className="line"></div>
            <img className="gooo" src={saytLogo} alt="" />
            <div className="aboutus">
                <div className="abotUsTitle">XV Ташкентский международный кинофестиваль (далее - Фестиваль) проводится в целях сохранения и развития вековых традиций национального киноискусства, дальнейшего развития культурно-просветительской деятельности в Республике Узбекистан и укрепления культурных связей на международном уровне, воспитания патриотизма, дружбы и братства между народами, расширения масштабов творческого сотрудничества различных стран, возрождения прославленного Ташкентского международного кинофестиваля, а также обеспечения исполнения Указа Президента Республики Узбекистан от 7 апреля 2021 года № УП-6202 «О мерах по поднятию киноискусства и киноиндустрии на качественно новый уровень и дальнейшему совершенствованию системы государственной поддержки отрасли».</div>
                <img src={saytLogo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs