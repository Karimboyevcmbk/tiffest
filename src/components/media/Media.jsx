import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Media.scss"
export default function Media() {
  return (
    <div className='container15'>
        <div className='media'>
        <div className='mediaTitles'>
            <h2>Медиа</h2>
            <select>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
            </select>
        </div>
        <div className='fotogrofi'><p>Фотографии</p><span>Смотреть</span></div>
        <div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper11"
        breakpoints={{
            0:{
                slidesPerView:1,
                spaceBetween:10,
            },
            500: {
                slidesPerView:2,
                spaceBetween:10,
            },
            650:{
                slidesPerView:3,
                spaceBetween:10,  
            },
            900: {
                slidesPerView:4,
                spaceBetween:10,
            },
            1200:{
                slidesPerView:5,
                spaceBetween:15,
            },
            1480: {
                slidesPerView:6,
                spaceBetween:30,
            }
            }}
        >
            <SwiperSlide className='swiperItem1 swiperItem'>
                <img src="http://api.tiffest.uz/media/history-photo/photo_2023-09-23_14-39-37.small.webp" alt="" />
                <img src="http://api.tiffest.uz/media/history-photo/photo_2023-09-23_14-39-37.small.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className='swiperItem swiperItem2'>
                <img src="http://api.tiffest.uz/media/history-photo/_M__9521.small.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className='swiperItem1 swiperItem'>
                <img src="http://api.tiffest.uz/media/history-photo/photo_2023-09-23_14-39-37.small.webp" alt="" />
                <img src="http://api.tiffest.uz/media/history-photo/photo_2023-09-23_14-39-37.small.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className='swiperItem swiperItem2'>
                <img src="http://api.tiffest.uz/media/history-photo/_M__9521.small.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className='swiperItem1 swiperItem'>
                <img src="http://api.tiffest.uz/media/history-photo/photo_2023-09-23_14-39-37.small.webp" alt="" />
                <img src="http://api.tiffest.uz/media/history-photo/photo_2023-09-23_14-39-37.small.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className='swiperItem swiperItem2'>
                <img src="http://api.tiffest.uz/media/history-photo/_M__9521.small.webp" alt="" />
            </SwiperSlide>
        </Swiper>
        </div>        
    </div>
    </div>
  );
}