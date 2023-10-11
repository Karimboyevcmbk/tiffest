import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./History.scss"

const History = () => {
  return (
    <div className="container5">
        <div className="guest">
            <div className="guestTitles">
                <h2>История</h2>
            </div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                400: {
                    slidesPerView:1,
                    spaceBetween:10,
                },
                650: {
                    slidesPerView:2,
                    spaceBetween:10,
                },
                1180: {
                    slidesPerView:3,
                    spaceBetween:30,
                }
                }}
                className="mySwiper4"
            >
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/history/tiffest2023_1.png" alt="" />
                </SwiperSlide> 
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/history/tiffest2023_1.png" alt="" />
                </SwiperSlide> 
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/history/tiffest2023_1.png" alt="" />
                </SwiperSlide> 
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://api.tiffest.uz/media/history/tiffest2023_1.png" alt="" />
                </SwiperSlide> 
            </Swiper>
        </div>
    </div>
  )
}

export default History