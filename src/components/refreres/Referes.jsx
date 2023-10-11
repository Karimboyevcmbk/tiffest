import "./Refertes.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Films = () => {
  return (
    <div className="container2">
        <div className="films">
            <div className="kinoSearch">
                <h2>Жюри</h2>
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
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/anne-demy-geroe-600x450.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/1050748710_0_0_3073_1930_1920x0_80_0_0_2063abbc1a3a29773389b5731cb54e63.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/%D0%B6%D1%8E%D1%80%D0%B81.large.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="http://api.tiffest.uz/media/images/02.large.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Films