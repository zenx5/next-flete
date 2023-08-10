/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
	// ...
	plugins: [
	  // ...
	  require('@tailwindcss/forms'),
	  require('@tailwindcss/aspect-ratio'),
	],
  }
  ```
*/
'use client'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	QuestionMarkCircleIcon,
	ShoppingBagIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import escudoArmada from '../../../public/ImagesCadeteSiempre/escudoArmada.png'
import escudoGuardia from '../../../public/ImagesCadeteSiempre/guardiaNacionalEscudo.png'
import escudoEjercito from '../../../public/ImagesCadeteSiempre/escudoEjercito.png'
import escudoMilicia from '../../../public/ImagesCadeteSiempre/escudoMilicia.png'
import escudoAviacion from '../../../public/ImagesCadeteSiempre/escudoAviacion.png'

const currencies = ['BS', 'USD']
const navigation = {
	categories: [
		{
			name: 'Fuerza Armada Bolivariana',
			featured: [
				{
					name: 'Call Of Duty Mobile',
					href: '#',
					imageSrc: '/images/CODM.webp',
					imageAlt: 'Call Of Duty Mobile.',
					description: '¡Recarga tus COD Points!'
				},
				{
					name: 'Wild Rift',
					href: '#',
					imageSrc: '/images/WR.webp',
					imageAlt: 'Riot Games Wild Rift.',
					description: '¡Recarga tus Wild Cores!'
				},
				{
					name: 'Clash of Clans',
					href: '#',
					imageSrc: '/images/COC.webp',
					imageAlt: 'Clash of Clans.',
					description: '¡Recarga tus Gemas!'
				},
				{
					name: 'Free Fire',
					href: '#',
					imageSrc: '/images/FF.webp',
					imageAlt: 'Clash Royale.',
					description: '¡Recarga tus Diamantes!'
				},
			],
		},
		{
			name: 'Juegos',
			featured: [
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
					imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
				},
				{
					name: 'Basic Tees',
					href: '#',
					imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
					imageAlt: 'Model wearing light heather gray t-shirt.',
				},
				{
					name: 'Accessories',
					href: '#',
					imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
					imageAlt:
						'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
				},
				{
					name: 'Carry',
					href: '#',
					imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
					imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
				},
			],
		},
	],
	pages: [
		{ name: 'Company', href: '#' },
		{ name: 'Stores', href: '#' },
	],
}
const categories = [
	{
		name: 'Fuerza Armada Bolivariana',
		href: '#',
		imageSrc: escudoArmada
		,
	},
	{
		name: 'Guardia Nacional Bolivariana',
		href: '#',
		imageSrc: escudoGuardia,
	},
	{
		name: 'Ejercito Bolivariano',
		href: '#',
		imageSrc: escudoEjercito,
	},
	{
		name: 'Aviacion Militar Bolivariana',
		href: '#',
		imageSrc: escudoAviacion,
	},
	{ name: 'Milicia Bolivariana', href: '#', imageSrc: escudoMilicia },
]
const collections = [
	{
		name: 'Tarjetas',
		href: '#',
		imageSrc: "https://detallesorballo.com/wp-content/uploads/2020/09/imagen-de-prueba-320x240-1.jpg",
		imageAlt: 'PayPal Logo.',
		description: 'Tarjeta de Credito/Debito.',
	},
	{
		name: 'Transferencia',
		href: '#',
		imageSrc: "https://detallesorballo.com/wp-content/uploads/2020/09/imagen-de-prueba-320x240-1.jpg",
		imageAlt: 'Binance.',
		description: 'Transferencia Bancaria.',
	},
	{
		name: 'Efectivo',
		href: '#',
		imageSrc: "https://detallesorballo.com/wp-content/uploads/2020/09/imagen-de-prueba-320x240-1.jpg",
		imageAlt: 'Skrill.',
		description: 'Paga en nuestras oficinas al buscar tus productos',
	},
]
const footerNavigation = {
	shop: [
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
	account: [
		{ name: 'Manage Account', href: '#' },
		{ name: 'Returns & Exchanges', href: '#' },
		{ name: 'Redeem a Gift Card', href: '#' },
	],
	connect: [
		{ name: 'Contact Us', href: '#' },
		{ name: 'Twitter', href: '#' },
		{ name: 'Instagram', href: '#' },
		{ name: 'Pinterest', href: '#' },
	],
}

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function FrontPage() {

	return (
		<div className="bg-slate-100">
			{/* Mobile menu */}


			{/* Hero section */}
			<div className="relative h-96 bg-gray-900">
				{/* Decorative image and overlay */}
				<div aria-hidden="true" className="absolute inset-0 overflow-hidden">
					<img
						src="/ImagesCadeteSiempre/bannerVenezuelaJose.png"
						alt=""
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
				<div className="relative mx-auto flex max-w-3xl flex-col items-center px-6  text-center sm:py-16 lg:px-0">
					<h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">¡Compra tus botones o trajes en un solo lugar!</h1>
					<p className="mt-4 text-xl text-white">
						¡Disponemos de toda la indumentaria para tus promociones!.
					</p>
					<a
						href="#"
						className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
					>
						Comprar
					</a>
				</div>
			</div>

			<main>
				{/* Category section */}
				<section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
					<div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
						<h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
							Categorias
						</h2>

					</div>

					<div className="mt-4 flow-root">
						<div className="-my-2">
							<div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
								<div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
									{categories.map((category) => (
										<a
											key={category.name}
											href={category.href}
											className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
										>
											<span aria-hidden="true" className="absolute inset-0">
												<Image width={500} height={500} src={category.imageSrc} alt="" className="aspect-h-1 aspect-w-1 h-full w-full object-cover object-center" />
											</span>
											<span
												aria-hidden="true"
												className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
											/>
											<span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Featured section */}
				<section
					aria-labelledby="social-impact-heading"
					className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
				>
					<div className="relative overflow-hidden rounded-lg">
						<div className="absolute inset-0">
							<img
								src="https://detallesorballo.com/wp-content/uploads/2020/09/imagen-de-prueba-320x240-1.jpg"
								alt=""
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
							<div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
								<h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
									<span className="block sm:inline">Arma tu pedido y envialo a quien tu quieras para cancelarlo</span>
								</h2>
								<p className="mt-3 text-xl text-white">
									Aqui podras hacer las compras que necesites en pocos clicks.
								</p>
								<a
									href="#"
									className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
								>
									Empezar
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Collection section */}
				<section
					aria-labelledby="collection-heading"
					className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
				>
					<h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
						¡Paga con tus medios de pagos favoritos!
					</h2>
					<p className="mt-4 text-base text-gray-500">
						Efectivo, Tarjeta de Debito/Credito, Transferencia Bancaria
					</p>

					<div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
						{collections.map((collection) => (
							<a key={collection.name} href={collection.href} className="group block">
								<div
									aria-hidden="true"
									className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
								>
									<img
										src={collection.imageSrc}
										alt={collection.imageAlt}
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
								<p className="mt-2 text-sm text-gray-500">{collection.description}</p>
							</a>
						))}
					</div>
				</section>

				{/* Featured section */}
				<section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
					<div className="relative overflow-hidden rounded-lg">
						<div className="absolute inset-0">
							<img
								src="https://detallesorballo.com/wp-content/uploads/2020/09/imagen-de-prueba-320x240-1.jpg"
								alt=""
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
							<div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
								<h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
									Steam
								</h2>
								<p className="mt-3 text-xl text-white">
									¡No podia faltar, haz tu recarga de Steam facil y de manera segura!
								</p>
								<a
									href="#"
									className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
								>
									Recargar ya.
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
