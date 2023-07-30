import ItemProduct from './ItemProduct';
import InputSearch from '../InputSearch';

export default function ProductList({products}) {
	
	const isActive = "border-b-2 border-b-blue-500"

	return (
		<div className="bg-slate-200">
			<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
				<form className="flex flex-col md:flex-row justify-between items-center mb-4 bg-white p-3 gap-3">
					<ul className="flex flex-row justify-between w-full md:w-1/3 p-0 m-0">
						<li><a className={`text-blue-500 hover:bg-blue-100 p-2 pb-0 ${isActive}`} href="#">Ascenso 1</a></li>
						<li><a className="text-blue-500 hover:bg-blue-100 p-2 pb-0" href="#">Ascenso 2</a></li>
						<li><a className="text-blue-500 hover:bg-blue-100 p-2 pb-0" href="#">Ascenso 3</a></li>
					</ul>
					<InputSearch />
					<select className="w-full md:w-1/3 p-2 border-2 border-blue-300 hover:border-blue-500 bg-white text-blue-500 rounded-md">
						<option>Promoción 1</option>
						<option>Promoción 2</option>
						<option>Promoción 3</option>
					</select>
				</form>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => <ItemProduct key={product.id} product={product} />)}
				</div>
			</div>
		</div>
	)
}
