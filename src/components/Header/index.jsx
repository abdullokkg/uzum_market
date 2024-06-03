import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const Header = () => {
    return (
        <>
            <div className='mySwiper2'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='slide' data-swiper-slide-index="1">
                        <div  className="swiper1">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide' data-swiper-slide-index="2">
                        <div className="swiper2">

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide' data-swiper-slide-index="3">
                        <div className="swiper3">
                            
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Header
