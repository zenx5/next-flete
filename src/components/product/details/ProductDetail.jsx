"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { onSnap } from '@/tools/firebase/actions';
import moment from "moment";
import ImageSelector from "./ImageSelector"
import AuctionUp from '../AuctionUp'
import ShareButton from '../ShareButton';
import ShareModal from './ShareModal';
import { ChevronDownIcon, ChevronUpIcon } from "@/components/icons";
import { USER_TYPE, timeFormats } from '@/tools/constants';
import MapAuction from '@/components/modals/MapAuction';

const opacities = [
	"opacity-80",
	"opacity-50",
	"opacity-30"
]

export default function ProductDetail({ productId, user }) {
	const [product, setProduct] = useState(null)
	const [open, setOpen] = useState(false)

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

	const orderAutions = (auction1, auction2) => auction1.date<auction2.date ? 1 : -1

	const getLeft = ( currentDate, index = 0 ) => {
		const diff = moment(Date.now()).diff(currentDate, timeFormats[index].format )
		if( diff === 0 ) return 'justo ahora'
		else if( diff >= timeFormats[index].limit && timeFormats[index].limit!==0 ) {
			return getLeft(currentDate, index + 1)
		}
		return diff>1 ? `hace ${diff} ${timeFormats[index].label[1]}` : `hace ${diff} ${timeFormats[index].label[0]}`
	}

	return product && <main className="mx-auto max-w-7xl bg-white sm:px-12 sm:pt-20 lg:px-16">
		<div className="mx-auto max-w-2xl lg:max-w-none">
			{/* Product */}
			<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 border-b-2 border-gray-400 pb-3">
				{/* Image gallery */}
				<ImageSelector images={product?.images} />

				{/* Product info */}
				<div className="mt-4 md:mt-0 px-5 pt-0 bg-white">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
					<div className="mt-6">
						<h3 className="sr-only">Description</h3>
						<div
							className="space-y-6 text-base text-gray-700"
							dangerouslySetInnerHTML={{ __html: product.description }}
						/>
						<div className="flex flex-col gap-1">
							<span className="flex flex-col">
								<span><label className="font-semibold">Desde:</label> { product.from.name }</span>
								<span className="italic ml-2 opacity-40">{product.from.position.lat}, {product.from.position.lng}</span>
							</span>
							<span className="flex flex-col">
								<span><label className="font-semibold">Hasta:</label> { product.to.name }</span>
								<span className="italic ml-2 opacity-40">{product.to.position.lat}, {product.to.position.lng}</span>
							</span>
						</div>
					</div>

					<form className="mt-6">
						<div className="mt-10 flex gap-2">
							<AuctionUp
								id={product.id}
								auctions={ product?.auctions ?? [] }
								initialValue={5000}
								user={user}
								disabled={ user.type===USER_TYPE.ADMIN || product?.createdBy?.id===user.id || product.status==='closed' || product.status==='accept' }
								step={50}
							/>
							{/* <Link href={`?modal=map-auction&params=id&id=${product.id}`} className="p-3 text-orange-400 border-2 border-orange-400 rounded-md hover:text-orange-500 hover:bg-orange-100">
								<MapPinIcon />
							</Link> */}
							<ShareButton
								id={product.id}
								className="p-3 text-orange-400 border-2 border-orange-400 rounded-md hover:text-orange-500 hover:bg-orange-100"/>
						</div>
						{ ( product?.auctions && product.auctions?.length!==0) && <div className="mt-5 flex gap-2 flex-col">
							<h3 className="font-bold">Ultimas ofertas:</h3>
							<div className="bg-gradient-to-b from-orange-500">
								<div className="bg-white ml-1 pl-4 py-1 flex flex-col gap-3">
									{ product.auctions?.sort( orderAutions ).slice(0, open ? product.auctions.length : 3).map( (auction, index) => <span key={`auction-${index}`} className={"flex flex-row w-full overflow-hidden gap-2 cursor-pointer hover:opacity-100 " + (!open ? opacities[index] : "opacity-60") }>
										<span className="flex flex-row gap-1 w-full items-center">
											<span className={"text-orange-500 " + (auction?.user?.id===user?.id ? "font-bold" : "font-semibold")}>{ auction?.user?.id===user?.id ? auction?.user?.email : hideEmail( auction?.user?.email ) }</span>
											ofertó <span className="font-semibold text-orange-500">{auction.mount}$</span>
											<span className="italic flex flex-nowrap w-full">{getLeft(auction.date)}</span>
										</span>
									</span>) }
								</div>
							</div>
						</div>}
						<span className="flex flex-row justify-center mt-4">
							<button type="button" onClick={()=>setOpen(prev => !prev)}>
								{ open ? <ChevronUpIcon /> : <ChevronDownIcon /> }
							</button>
						</span>
					</form>
				</div>
			</div>
			<MapAuction auctionId={product.id} />
		</div>
		<ShareModal url={"https://heroicons.com/"+product.id} />
	</main>
}