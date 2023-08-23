"use client";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
// Slider de productos en la página de detalles de orden usando Slick.js
export default function ProductSlider({products}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
      };

    return (
        <div className="product-slider" style={{ overflowAnchor: "none" }}>
            <div className="slider">
                <Slider {...settings} >
                    {products.map((product, index) => (
                        <span className="px-2" key={product.id}>
                            <Link className="group relative w-fit" href={`?item=${index}`}>
                                <div className="w-fit rounded-lg overflow-hidden group-hover:opacity-75">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="object-center object-cover"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <p className="bg-gradient-to-t from-gray-900 mt-2 text-sm text-white absolute bottom-0 w-full text-center h-20 flex items-end justify-center pb-2">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                                </p>
                            </Link>
                        </span>
                    ))}
                </Slider>
            </div>
        </div>
    )
}