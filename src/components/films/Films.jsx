import "./Films.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Film from "../../assets/film.png"

const Films = () => {
  return (
    <div className="container2">
        <div className="films">
            <div className="kinoSearch2">
                <h2>Кинопоказы</h2>
                <div className="selects">
                    <select>
                        <option>Все</option>
                        <option>Австрийская Республика</option>
                        <option>Азербайджанская Республика</option>
                    </select>
                    <select>
                        <option>Скачать</option>
                        <option>РЕПЕРТУАРНЫЙ ПЛАН КИНОПОКАЗОВ В КИНОТЕАТРАХ ТАШКЕНТА</option>
                    </select>
                </div>
            </div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                10: {
                    slidesPerView:2,
                    spaceBetween:10,
                },
                1000:{
                    slidesPerView:3,
                    spaceBetween:15,
                },
                1280: {
                    slidesPerView:4,
                    spaceBetween:30,
                }
                }}
                className="mySwiper2"
            >
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-09-20_17-22-23.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/%D1%82%D0%BE%D0%BB%D0%B4%D0%B8_%D0%B2%D0%B5%D0%BD%D0%B3%D1%80%D0%B8%D1%8F.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/%D1%85%D0%B0%D0%B4%D0%B8%D0%BA_%D0%B2%D0%B5%D0%BD%D0%B3%D1%80%D0%B8%D1%8F.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/image_2023-09-25_17-00-34.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/image_2023-09-25_16-18-30.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/562_o.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/%D0%9D%D0%B5%D1%81%D0%BB%D0%B8%D0%B6%D0%B0%D0%BD.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/49.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/Poster_VOLVERE_con_Laureles.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/photo_2023-09-25_15-08-45.large.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Films