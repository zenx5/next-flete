"use client";
import Slider from 'react-slick'
import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function HeroSection() {

    const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
        autoplaySpeed:2000
	}



    return <Slider {...settings}>
        <div>

        </div>
    </Slider>
}