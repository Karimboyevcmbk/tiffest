import "./Delegatsi.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Films = () => {
  return (
    <div className="container2">
        <div className="films">
            <div className="kinoSearch">
                <h2>Делегации</h2>
                <div className="selects">
                    <select>
                        <option>Все</option>
                        <option>Австрийская Республика</option>
                        <option>Азербайджанская Республика</option>
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
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/IMG_9368_1.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/2_1.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/%D0%B0%D1%84%D0%B0.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/image_2023-09-25_15-20-47.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/%D0%B2%D0%BC%D0%B8%D0%B2.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/image_2023-09-25_15-12-29.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/image_2023-09-25_15-06-27.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/%D0%BF%D0%B5%D0%B0%D1%80.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/fsdzfvsdf.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/gallery/sd.large.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Films