import React, { Component } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

//Images
import Cloth from '../public/images/clothe.jpg'
import Food from '../public/images/food.jpg'
import Devices from '../public/images/devices.jpg'
import Watch from '../public/images/watch.jpg'

class Slider extends Component {
    render() {
        return (
            <header>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <img src={Cloth} />
                        <div className='swiper-content'>
                        </div>
                        <div className='swiper-text'>
                            <p>Obten hasta un <span className='discount'>50%</span> de descuento en tu ropa favorita</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Food} />
                        <div className='swiper-content'>
                        </div>
                        <div className='swiper-text'>
                            <p>Visita nuestra categor&iacute;a de <span className='food'>comida</span> y encontraras todo lo que necesitas</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Devices} />
                        <div className='swiper-content'>
                        </div>
                        <div className='swiper-text'>
                            <p>Todos los dispositivos que necesitas para hacer tu vida <span className='fast'>m&aacute;s f&aacute;cil</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Watch} />
                        <div className='swiper-content'>
                        </div>
                        <div className='swiper-text'>
                            <p>Todo tipo de <span className='premium'>relojes premium </span>a tu disposici&oacute;n</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </header>
        )
    }
}

export default Slider