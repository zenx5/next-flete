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
import ProductsModel from "@/tools/models/ProductsModel"

const opacities = [
	"opacity-80",
	"opacity-50",
	"opacity-30"
]

export default function ProductDetail({ productId, user }) {
	const [product, setProduct] = useState(null)
	const [open, setOpen] = useState(false)
	const [leftTime, setLeftTime] = useState([])

	useEffect(()=>{
		ProductsModel.onChange( data => setProduct(data), productId)
	},[productId])

	useEffect(()=>{
		if( product && leftTime.length===0 ) {
			setInterval( () => {
				const diff = moment( Date.parse(product?.endTime) ).diff( Date.now() )
				setLeftTime( prev => [
					{
						label: 'Dias',
						value: Math.floor(diff / (1000 * 60 * 60 * 24))
					},
					{
						label: 'Horas',
						value: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
					},
					{
						label: 'Minutos',
						value: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
					},
					{
						label: 'Segundos',
						value: Math.floor((diff % (1000 * 60)) / 1000)
					}
				])
			},1000)
		}

	},[leftTime, product])

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

	const isClosed = () => {
		return leftTime.find( element => element.value < 0 )
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


	return product && <>
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
						<div className="flex flex-col gap-1 text-sm mt-4">
							<span className="flex flex-col">
								<span><label className="font-semibold">Desde:</label> { product.from.name }</span>
								<span className="italic ml-3 opacity-40">{product.from.position.lat}, {product.from.position.lng}</span>
							</span>
							<span className="flex flex-col">
								<span><label className="font-semibold">Hasta:</label> { product.to.name }</span>
								<span className="italic ml-3 opacity-40">{product.to.position.lat}, {product.to.position.lng}</span>
							</span>
							<span className="flex flex-col">
								<span className="font-semibold">Cierra en:</span>
								<span className="italic ml-3 opacity-40">
									<span className="flex flex-row gap-2 px-2">
										{ !isClosed() && leftTime.map( item => <span key={item.label}  className="py-2 px-4 flex flex-col gap-1 items-center">
											<span>{ item.value }</span>
											<span>{ item.label }</span>
										</span>)}
										{/* muestra el contenido de cerrado que no tenga cursiva */}
										{ isClosed() && <span className="py-2 px-4 flex flex-col gap-1 items-center text-red-500 font-bold not-italic">CERRADO</span>}
									</span>
								</span>
							</span>
						</div>
					</div>

					<form className="mt-6">
						<div className="mt-10 flex gap-2">
							<AuctionUp
								id={product.id}
								auctions={ product?.auctions ?? [] }
								initialValue={product?.price}
								user={user}
								disabled={ user.type===USER_TYPE.ADMIN || product?.createdBy?.id===user.id || product.status==='closed' || product.status==='accept' }
								step={50}
							/>
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
			<MapAuction auctionId={product.id} className="w-full h-1/2 mx-auto mt-5" />
		</div>
		<ShareModal url={"https://heroicons.com/"+product.id} />
	</>
}