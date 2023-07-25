import ItemProduct from './ItemProduct';

export default function ProductList({products}) {
	
	const isActive = "border-b-2 border-b-blue-500"

	return (
		<div className="bg-slate-200">
			<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
				<form className="flex flex-row justify-between items-center mb-4 bg-white p-3 gap-3">
					<ul className="flex flex-row justify-between w-1/3 p-0 m-0">
						<li><a className={`text-blue-500 hover:bg-blue-100 p-2 pb-0 ${isActive}`} href="#">Ascenso 1</a></li>
						<li><a className="text-blue-500 hover:bg-blue-100 p-2 pb-0" href="#">Ascenso 2</a></li>
						<li><a className="text-blue-500 hover:bg-blue-100 p-2 pb-0" href="#">Ascenso 3</a></li>
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
