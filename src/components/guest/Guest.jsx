import "./Guest.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Films = () => {
  return (
    <div style={{background:"#0A0A0A"}} className="container2">
        <div className="films">
            <div className="kinoSearch">
                <h2>Гости</h2>
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
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/343922_5ed5fe8f3e2705ed5fe8f3e2ab.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/d6ac1fffc37f8319e9c06a83158d3fcd.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/1526099234_230_0_1755_1525_1920x0_80_0_0_4553e96d7fcf72ee36c7ffe740f4c509.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/photo_2023-09-29_11-56-25.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/172396zazz.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/image_2023-09-19_11-14-17.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/6effe48c068cdc66f21ea622b21c8069.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/C662468D-32A7-4B10-BDF0-C8888C45C85A_w408_r1_s.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/Lutfullo_DAVLATZODA_vnutr.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/449450.large.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Films