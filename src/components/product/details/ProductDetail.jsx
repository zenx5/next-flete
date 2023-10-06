"use client";
import ImageSelector from './ImageSelector';
import AddToCart from '../AddToCart'
import AuctionUp from '../AuctionUp'
import Price from '../Price';
import Details from './Details';
import CardRelatedProduct from '../../CardRelatedProduct';
import HeartButton from '../HeartButton';
import ShareButton from '../ShareButton';
import ShareModal from './ShareModal';
import { useState, useEffect } from 'react';
import { onSnap } from '@/tools/firebase/actions';

const opacities = [
	"opacity-80",
	"opacity-50",
	"opacity-30"
]


export default function ProductDetail({ productId }) {
	const [product, setProduct] = useState({})

	useEffect(()=>{
		onSnap(process.env.NEXT_PUBLIC_ENTITY_PRODUCT_NAME, (result)=>{
			setProduct( prev => result )
		}, productId)
	},[productId])

	const hideEmail = (email) => {
		if( !email ) return ""
		return email.split("@")
			.map(
				(part, position) =>
					position ?
						part :
						part.split("").map(
							(letter, iletter) =>
								iletter > 1 ?
								"*" :
								letter
						)
						.join("")
			)
			.join("@")
	}

	return <main className="mx-auto max-w-7xl bg-white sm:px-12 sm:pt-20 lg:px-16">
		<div className="mx-auto max-w-2xl lg:max-w-none">
			{/* Product */}
			<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 border-b-2 border-gray-400 pb-3">
				{/* Image gallery */}
				<ImageSelector images={product?.images} />

				{/* Product info */}
				<div className="mt-4 md:mt-0 px-5 pt-8 bg-white">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

					<div className="mt-3">
						<h2 className="sr-only">Product information</h2>
						{/* <Price price={product.price} regularPrice={product.regularPrice} /> */}
					</div>

					<div className="mt-6">
						<h3 className="sr-only">Description</h3>
						<div
							className="space-y-6 text-base text-gray-700"
							dangerouslySetInnerHTML={{ __html: product.description }}
						/>
					</div>

					<form className="mt-6">
						<div className="mt-10 flex gap-2">
							<AuctionUp
								id={product.id}
								defaultValue={product?.auctions?.at(0)?.mount}
								step={50}
							/>
							<HeartButton
								id={product.id}
								className="p-3 text-blue-400 border-2 border-blue-400 rounded-md hover:text-blue-500 hover:bg-blue-100"/>
							<ShareButton
								id={product.id}
								className="p-3 text-blue-400 border-2 border-blue-400 rounded-md hover:text-blue-500 hover:bg-blue-100"/>
						</div>
						{ ( product?.auctions && product.auctions?.length!==0) && <div className="mt-5 flex gap-2 flex-col">
							<h3 className="font-bold">Ultimas ofertas:</h3>
							<div className="bg-gradient-to-b from-indigo-500">
								<div className="bg-white ml-1 pl-4 py-1 flex flex-col gap-3">
									{ product.auctions?.map( (auction, index) => <span key={`auction-${index}`} className={"flex flex-row cursor-pointer gap-2 hover:opacity-100 " + opacities[index] }>
										<span className="flex flex-row gap-1">
											<UserIcon />
											<span className="text-indigo-500 font-semibold">{ hideEmail( auction?.user?.email ) }</span>
										</span>
										<span>ofertó <span className="font-semibold text-indigo-500">{auction.mount}$</span></span>
										<span className="flex flex-row italic flex-nowrap">hace {auction.left}</span>
									</span>) }
								</div>
							</div>
						</div>}
					</form>

					<section aria-labelledby="details-heading" className="mt-12">
						<h2 id="details-heading" className="sr-only">
							Detalles Adicionales
						</h2>

						<div className="divide-y divide-gray-200 border-t">
							{/* {product?.details?.map((detail) => <Details key={detail.name} name={detail.name} items={detail.items}/> )} */}
						</div>
					</section>
				</div>
			</div>

			{ (product?.relatedProducts && product?.relatedProducts?.length>0) && <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
				<h2 id="related-heading" className="text-xl font-bold text-gray-900">
					Productos Relacionados
				</h2>

				<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
					{/* {product.relatedProducts?.map((product) => <CardRelatedProduct key={product.id} product={product} /> )} */}
				</div>
			</section>}
		</div>
		<ShareModal url={"https://heroicons.com/"+product.id} />
	</main>
}


const UserIcon = () => <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-indigo-500">
	<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
