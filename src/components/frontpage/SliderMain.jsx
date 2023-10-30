"use client";
import Slider from 'react-slick'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { onSnap } from "@/tools/firebase/actions"

export default function SliderMain() {
	const [sliders, setSliders] = useState([])
	const [speed, setSpeed] = useState(1000)
	useEffect(()=>{
		onSnap( process.env.NEXT_PUBLIC_ENTITY_SLIDER_NAME , data => {
            setSliders( prev => data )
        }, null)
	},[])

    const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500
	}

	const handlerChangeSlick = (index) => {
		const duration = parseInt( sliders.filter( slider => slider.isVisible )[ index ]?.duration ?? 2000 )
		setSpeed( prev => duration )
	}

    return sliders.length>0 && <Slider {...{...settings, autoplaySpeed: speed }} afterChange={handlerChangeSlick}>
        { sliders.filter( slider => slider.isVisible ).map( slider => <div key={slider.id} className="text-center"> <span className="h-[30vh] justify-center items-center flex  bg-white"><Image src={slider.src} alt="" width={500} height={100} /></span> </div> )}
    </Slider>
}