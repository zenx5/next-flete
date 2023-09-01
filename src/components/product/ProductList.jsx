import ItemProduct from './ItemProduct';


export default function ProductList({products}) {

	return (
		<div className="px-5 md:px-28 py-10 bg-gradient-to-b from-slate-100 grid grid-cols-1 gap-x-6 gap-y-5 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
			{products.map((product) => <ItemProduct key={product.id} product={product} />)}
		</div>
	)
}
