import ProductList from '@/components/product/ProductList'
import InputSearch from '@/components/InputSearch';
import { products } from '../api/products/products.mockup';

export default async function Products() {
    // const response = await fetch(`${process.env.API_URL}/products`, { cache:'force-cache' })
    // const { code, data:products } = await response.json()
    const code = 0
    const isActive = "border-b-2 border-b-white"


    return (
        <main className="flex min-h-screen flex-col bg-slate-100">
            <form className="flex flex-col md:flex-row justify-between items-center mb-4 bg-black opacity-90 p-3 gap-3">
                <ul className="flex flex-row justify-between w-full md:w-1/3 p-0 m-0">
                    <li><a className={`text-white p-2 pb-0 ${isActive}`} href="#">Ascenso 1</a></li>
                    <li><a className="text-white p-2 pb-0" href="#">Ascenso 2</a></li>
                    <li><a className="text-white p-2 pb-0" href="#">Ascenso 3</a></li>
                </ul>
                <InputSearch />
                <select className="w-full md:w-1/3 p-2 border-2 border-white bg-white text-black rounded-md">
                    <option>Promoción 1</option>
                    <option>Promoción 2</option>
                    <option>Promoción 3</option>
                </select>
            </form>
            { code==0 ? <ProductList products={products} /> : <p className="w-1/2 mx-auto p-3 rounded bg-white shadow font-bold text-gray-400 text-center">No hay Productos</p>}
        </main>
    )
}
