"use client";
import Slider from 'react-slick'
import Image from 'next/image';

export default function SliderMain() {
    const image = "/images/imagenes-para-paginas-web.png"
    const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
	}

    return <Slider {...settings}>
        <div className="text-center"> <span className="h-[30vh] justify-center items-center flex  bg-white"><Image src={image} alt="" width={500} height={100} /></span> </div>
        <div className="text-center"> <span className="h-[30vh] justify-center items-center flex  bg-white"><Image src={image} alt="" width={500} height={100} /></span> </div>
        <div className="text-center"> <span className="h-[30vh] justify-center items-center flex  bg-white"><Image src={image} alt="" width={500} height={100} /></span> </div>
        <div className="text-center"> <span className="h-[30vh] justify-center items-center flex  bg-white"><Image src={image} alt="" width={500} height={100} /></span> </div>
    </Slider>
}