import ImageSelector from './ImageSelector';
import AddToCart from '../AddToCart'
import BuyNow from '../BuyNow'
import Price from '../Price';
import Details from './Details';


export default function ProductDetail({ product }) {

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
									{product?.details?.map((detail) => <Details key={detail.name} name={detail.name} items={detail.items}/> )}
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
									<div className="relative  pb-2 border-b-2 border-gray-300 md:border-none">
										<div className="relative h-72 w-full overflow-hidden rounded-lg ">
											<img
												src={product.images[0].src}
												alt={product.images[0].alt}
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="relative mt-4 flex flex-row gap-2 items-center md:flex-col md:items-start">
											<h3 className="text-sm font-medium text-gray-900 w-1/2 md:w-full">{product.name}</h3>
											<AddToCart
												id={product.id}
												label="Agregar al Carrito"
												classNameContainer="p-3 w-1/2 md:w-full text-blue-400 border-2 border-blue-400 rounded-md hover:text-blue-500 hover:bg-blue-100"
											/>
											
										</div>
										<div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
											<div
												aria-hidden="true"
												className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
											/>
											<Price price={product.price} regularPrice={product.regularPrice}/>
										</div>
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
