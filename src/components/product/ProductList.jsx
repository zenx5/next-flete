// "use client";
// import { useRouter } from 'next/navigation';

import AddToCart from './AddToCart'
import BuyNow from './BuyNow'



export default function ProductList({products}) {


	const classRounded = "rounded-tl-xl rounded-bl-xl md:rounded-tr-xl md:rounded-bl-none"
	const isActive = "border-b-2 border-b-blue-500"

	return (
		<div className="bg-[#ededed]-900">
			<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
				<form className="flex flex-row justify-between mb-4 bg-white p-3 gap-3">
					<ul className="flex flex-row justify-between w-1/3">
						<li><a className={`text-blue-500 hover:bg-blue-100 p-2 ${isActive}`} href="#">Promocion 1</a></li>
						<li><a className="text-blue-500 hover:bg-blue-100 p-2" href="#">Promocion 2</a></li>
						<li><a className="text-blue-500 hover:bg-blue-100 p-2" href="#">Promocion 3</a></li>
					</ul>
					<span className="w-1/3 p-1 border-2 border-blue-300 flex flex-row justify-between group hover:border-blue-500 rounded-md">
						<input className="outline-none w-11/12" placeholder="Buscar..."/>
						<button className="w-1/12 flex flex-row justify-center items-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 text-blue-300 group-hover:text-blue-500">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
						</button>
					</span>
					<select className="w-1/3 p-2 border-2 border-blue-300 hover:border-blue-500 bg-white text-blue-500 rounded-md">
						<option>Opcion 1</option>
						<option>Opcion 2</option>
						<option>Opcion 3</option>
					</select>
				</form>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<a key={product.id} 
							href={`/productos/${product.id}`} 
							className="group bg-white rounded-xl shadow hover:shadow-2xl flex md:block">
							<span 
								className={"block p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white xl:aspect-h-8 xl:aspect-w-7 border-b-2 border-b-lightgray "+classRounded}>
								<AddToCart
									id={product.id}
									classNameContainer="flex w-full h-0 justify-end px-3"
									classNameIcon="text-right relative top-2.5 h-8 w-8 flex-shrink-0 text-blue-400 bg-white opacity-50 rounded-full p-1 hover:opacity-100 hover:text-blue-500" />
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className={`h-full w-full object-cover object-center ${classRounded}`}
								/>
							</span>
							<span className="flex flex-col justify-end px-3 pb-4 ">
								<h3 className="mt-4 text-lg text-gray-800">{product.name}</h3>
								<span className="block text-gray-500 text-sm">{product.imageAlt}</span>
								{(true || product.price !== '')
									&& <span className="mt-2">
										<small className="leading-none text-xs line-through text-gray-500">$USD 25</small>
										<p className="leading-none text-lg text-center md:text-left font-medium text-gray-900">{'$USD 10' || product.price}</p>
									</span>
								}
								<BuyNow id={product.id} className="flex justify-center w-full text-blue-400 hover:text-blue-500 hover:bg-blue-100 p-2" />
							</span>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
