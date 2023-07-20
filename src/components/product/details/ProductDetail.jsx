"use client";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	HeartIcon,
	MagnifyingGlassIcon,
	MinusIcon,
	PlusIcon,
	ShoppingBagIcon,
	UserIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import ImageSelector from './ImageSelector';
import AddToCart from '../AddToCart'
import BuyNow from '../BuyNow'
import Price from '../Price';



const footerNavigation = {
	products: [
		{ name: 'Bags', href: '#' },
		{ name: 'Tees', href: '#' },
		{ name: 'Objects', href: '#' },
		{ name: 'Home Goods', href: '#' },
		{ name: 'Accessories', href: '#' },
	],
	company: [
		{ name: 'Who we are', href: '#' },
		{ name: 'Sustainability', href: '#' },
		{ name: 'Press', href: '#' },
		{ name: 'Careers', href: '#' },
		{ name: 'Terms & Conditions', href: '#' },
		{ name: 'Privacy', href: '#' },
	],
	customerService: [
		{ name: 'Contact', href: '#' },
		{ name: 'Shipping', href: '#' },
		{ name: 'Returns', href: '#' },
		{ name: 'Warranty', href: '#' },
		{ name: 'Secure Payments', href: '#' },
		{ name: 'FAQ', href: '#' },
		{ name: 'Find a store', href: '#' },
	],
}

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function ProductDetail({ product }) {
	const [open, setOpen] = useState(false)
	//const [selectedColor, setSelectedColor] = useState(product.colors[0])

	return (
		<div>
			<main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
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
								<Price price={product.price} regularPrice={product.regularPrice} />
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
									<AddToCart
										id={product.id}
										enableCount
										classNameIcon="text-blue-400 w-5"
										classNameContainer="p-3 text-blue-400 border-2 border-blue-400 rounded-md hover:text-blue-500 hover:bg-blue-100"
									/>
									<BuyNow
										id={product.id}
										className="p-3 text-blue-400 border-2 border-blue-400 rounded-md hover:text-blue-500 hover:bg-blue-100"/>
								</div>
							</form>

							<section aria-labelledby="details-heading" className="mt-12">
								<h2 id="details-heading" className="sr-only">
									Detalles Adicionales
								</h2>

								<div className="divide-y divide-gray-200 border-t">
									{product?.details?.map((detail) => (
										<Disclosure as="div" key={detail.name}>
											{({ open }) => (
												<>
													<h3>
														<Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
								  className={classNames(
									  open ? 'text-indigo-600' : 'text-gray-900',
									  'text-sm font-medium'
								  )}
							  >
                                {detail.name}
                              </span>
															<span className="ml-6 flex items-center">
                                {open ? (
									<MinusIcon
										className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
										aria-hidden="true"
									/>
								) : (
									<PlusIcon
										className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
								)}
                              </span>
														</Disclosure.Button>
													</h3>
													<Disclosure.Panel as="div" className="prose prose-sm pb-6">
														<ul role="list">
															{detail.items.map((item) => (
																<li key={item}>{item}</li>
															))}
														</ul>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</div>
							</section>
						</div>
					</div>

					{ product?.relatedProducts?.length>0 && <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
						<h2 id="related-heading" className="text-xl font-bold text-gray-900">
							Productos Relacionados
						</h2>

						<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
							{product.relatedProducts?.map((product) => (
								<div key={product.id}>
									<div className="relative">
										<div className="relative h-72 w-full overflow-hidden rounded-lg">
											<img
												src={product.images[0].src}
												alt={product.images[0].alt}
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="relative mt-4">
											<h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
											{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
										</div>
										<div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
											<div
												aria-hidden="true"
												className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
											/>
											<Price price={product.price} regularPrice={product.regularPrice}/>
										</div>
									</div>
									<div className="mt-6">
										<AddToCart
											id={product.id}
											label="Agregar al Carrito"
											classNameContainer="p-3 w-full text-blue-400 border-2 border-blue-400 rounded-md hover:text-blue-500 hover:bg-blue-100"
										/>
									</div>
								</div>
							))}
						</div>
					</section>}
				</div>
			</main>
		</div>
	)
}
