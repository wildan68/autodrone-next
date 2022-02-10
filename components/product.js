import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

import 'swiper/css';

class Product extends React.Component {
    constructor() {
        super();
    }

    render() {
        const style = {
            swiper: 'border-[1px] border-gray md:border-none rounded-[10px] p-[45px] flex flex-col text-center items-center md:h-[800px]',
            swiperButton: 'mt-[30px] w-[50%] bg-blue py-[10px] text-white text-[18px] rounded-full hover:dark-blue'
        }
        return (
            <div className="flex flex-col items-center gap-[50px] py-[50px]" id="product">
                <div className="flex flex-col gap-[15px] text-center">
                    <span className="text-[36px] font-[600]">
                        New Products
                    </span>
                    <span className="text-gray font-[300] text-[16px]">
                        New innovation, best quality than before.<br />
                        Make every moment flyin operation become unforgettable.
                    </span>
                </div>
                <div className='translate-x-[15%] md:translate-x-0 w-[90%] overflow-hidden'>
                    <Swiper slidesPerView={3}
                        spaceBetween={50}
                        direction='vertical'
                        breakpoints={{
                            1000: {
                                direction: 'horizontal',
                                spaceBetween: 50,
                                slidesPerView: 3,
                            }
                        }}
                        className='h-[648px] md:h-[2348px]'>
                        <SwiperSlide className={style.swiper}>
                            <div className='w-full h-[240px] rounded-[10px] overflow-hidden bg-blue'>
                                <img src={'img/mini_drone.jpg'} className='object-cover w-full h-full' />
                            </div>
                            <span className='font-[600] text-[36px] pt-[30px]'>Mini Drone</span>
                            <span className='mt-[10px] text-[20px] font-[300]'>
                                Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically
                            </span>
                            <button className={style.swiperButton}>
                                GET NOW
                            </button>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className='w-full h-[240px] rounded-[10px] overflow-hidden bg-blue'>
                                <img src={'img/drone_light.jpg'} className='object-cover w-full h-full' />
                            </div>
                            <span className='font-[600] text-[36px] pt-[30px]'>Drone Light</span>
                            <span className='mt-[10px] text-[20px] font-[300]'>
                                Drone light is every creators dream. Setting apperture manually and high battery. performance Drone light is everything you need.
                            </span>
                            <button className={style.swiperButton}>
                                GET NOW
                            </button>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className='w-full h-[240px] rounded-[10px] overflow-hidden bg-blue'>
                                <img src={'img/phantom_drone.jpg'} className='object-cover w-full h-full' />
                            </div>
                            <span className='font-[600] text-[36px] pt-[30px]'>Phantom Drone</span>
                            <span className='mt-[10px] text-[20px] font-[300]'>
                                Inspired by phantom, drone can move faster and quickly like a ghost. Focus on speed so you can investigate environtment quickly.
                            </span>
                            <button className={style.swiperButton}>
                                GET NOW
                            </button>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper}>
                            <div className='w-full h-[240px] rounded-[10px] overflow-hidden bg-blue'>
                                <img src={'img/skeleton_drone.jpg'} className='object-cover w-full h-full' />
                            </div>
                            <span className='font-[600] text-[36px] pt-[30px]'>Skeleton Drone</span>
                            <span className='mt-[10px] text-[20px] font-[300]'>
                                Skeleton Items
                            </span>
                            <button className={style.swiperButton}>
                                GET NOW
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default Product