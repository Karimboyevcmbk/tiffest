import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./News.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsArrowRightShort } from "react-icons/bs"
import Aos from "aos"
import "aos/dist/aos.css"

export function News() {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='container3'>
        <div className='news'>
        <div className='newsTitle'>
            <h2>Новости</h2>
        </div>
        <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
            400: {
                slidesPerView:1,
                spaceBetween:10,
            },
            550: {
                slidesPerView:2,
                spaceBetween:10,
            },
            900:{
                slidesPerView:3,
                spaceBetween:10,
            },
            1280: {
                slidesPerView:4,
                spaceBetween:30,
            }
            }}
            className="mySwiper1"
            >
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/.JPG.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>УЧАСТНИКИ XV ТАШКЕНТСКОГО КИНОФЕСТИВАЛЯ «ЖЕМЧУЖИНА ШЕЛКОВОГО ПУТИ» ПРИНЯЛИ...</p>
                        <strong>06.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/089A0507.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>Кевин Спейси призвал всех гордиться Ташкентским кинофестивалем</p>
                        <strong>05.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-10-04_10-37-57.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>Церемония закрытия Ташкентского международного кинофестиваля впервые прошла в «Вечном городе»</p>
                        <strong>03.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-10-02_23-56-37.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>Самарканд выбрали для закрытия XV Ташкентского международного кинофестиваля</p>
                        <strong>02.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-10-02_15-33-16.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>Наталья Варлей вдохновила студентов на XV Ташкентском кинофестивале</p>
                        <strong>02.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-10-02_14-27-22.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>Журналист издания Celluloid Junkie Марк Лоу поделился своим мнением о проведении Ташкентского кинофестиваля</p>
                        <strong>02.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-10-01_23-35-52.jpg" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>Определены победители конкурса "Кино за 5 дней"</p>
                        <strong>01.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="https://api.tiffest.uz/media/images/photo_2023-10-01_19-59-16.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>«Если сценарий будет хорошим, я обязательно снимусь в шестой части фильма «Такси»» — Сами Насери.</p>
                        <strong>01.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-10-01_21-15-26.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>Волшебство киноискусства: мастер-класс от Елизаветы Боярской на XV Ташкентском международном кинофестивале</p>
                        <strong>01.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-10-01_16-55-18.small.webp" alt="" />
                    <div className='divTitles'>
                        <p style={{height:"110px"}}>О чем спрашивали Кевина Спейси на кинофестивале в Ташкенте?</p>
                        <strong>01.10.2023</strong>
                        <div className='newsBilmadm'>
                            <p>Перейти</p>
                            <BsArrowRightShort style={{fontSize:"40px"}}/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
}
export default News

