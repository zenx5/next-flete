import ProductsInCart from '@/components/cart/ProductsInCart'
import TotalCart from '@/components/cart/TotalCart'
import { getUser } from "@/tools/actions";

export default async function CheckoutSharedPage({ params }) {
    const { id } = params
    const user = {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@mail.com',
        password: '123456',
        birthdate: '1990-01-01',
        phone: '1234567890',
        phoneFamily: '1234567890',
        grade: 'Grado 1',
        academic: 'Aviaciòn Militar Bolivariana',
        nextGrade: 'Grado 2',
    }
    const products = [
        { id: 1, name: "Product 1", price: 100, description: "Description 1", quantity: 5 },
        { id: 2, name: "Product 2", price: 200, description: "Description 2", quantity: 2 },
        { id: 3, name: "Product 3", price: 300, description: "Description 3", quantity: 3 },
        { id: 4, name: "Product 4", price: 400, description: "Description 4", quantity: 4 },
        { id: 5, name: "Product 5", price: 400, description: "Description 5", quantity: 4 },
        { id: 6, name: "Product 6", price: 400, description: "Description 6", quantity: 4 },
        { id: 7, name: "Product 7", price: 400, description: "Description 7", quantity: 4 },
        { id: 8, name: "Product 8", price: 400, description: "Description 8", quantity: 4 },
        { id: 9, name: "Product 9", price: 400, description: "Description 9", quantity: 4 },
        { id: 10, name: "Product 10", price: 400, description: "Description 10", quantity: 4 },
    ]

    return <div className="h-full">
        <div className="p-10 mb-5 shadow-lg rounded-lg border-2 w-full">
            <h3 className="font-bold text-center mb-2">Datos del Cadete</h3>
            <div className='flex justify-center'>
                <div className="relative w-40 h-40 overflow-hidden bg-gray-100 top-2 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-32 h-32 text-gray-400 left-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
            </div>
            <div className='mt-2 p-1'>
                <p><b>Nombre:</b> {user.name}</p>
                <p><b>Correo Contacto:</b> {user.email}</p>
                <p><b>Academia:</b> {user.academic}</p>
            </div>
        </div>
        <div className="h-80 overflow-hidden overflow-y-auto shadow-inner">
            {products.map(product => <div className="mt-0 mx-2 sm:col-span-7 sm:mt-0 md:row-end-1" key={product.id}>
                <div className="flex flex-row justify-between items-center mt-2">
                    <h3 className="text-md font-medium text-gray-900">
                        <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="mt-1 text-md font-medium text-gray-900">{product.quantity * product.price}</p>
                </div>
                <div className="sm:col-span-12 md:col-span-7 ">
                    <dl className="grid grid-cols-1 border-b border-gray-100 sm:grid-cols-2 sm:gap-x-6">
                        <div className="sm:col-span-2">
                            <dd className="text-gray-500 text-sm italic">{product.description}</dd>
                        </div>
                    </dl>
                </div>
            </div>)}
        </div>
        <div className="w-full bg-gradient-to-t from-gray-100 block h-10 relative bottom-10 -mb-5 border-b-2"></div>
        <TotalCart
            className="mt-1 mx-2 space-y-6 text-sm font-medium text-gray-500"
            SubTotal={products.reduce((acc, product) => acc + product.price * product.quantity, 0)}
            Enviado={0}
            Pagado={-10}
            total={products.reduce((acc, product) => acc + product.price * product.quantity, 0)}
        />
    </div>
}
