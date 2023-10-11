import "./NewFilms.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NewFilms = () => {
  return (
    <div className="container7">
        <div className="guest">
            <div className="guestTitles">
                <h2>Премьеры</h2>
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
                400: {
                    slidesPerView:1,
                    spaceBetween:10,
                },
                500: {
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
                className="mySwiper3"
            >
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/images/167984.large.webp" alt="" />
                </SwiperSlide>  
            </Swiper>
        </div>
    </div>
  )
}

export default NewFilms