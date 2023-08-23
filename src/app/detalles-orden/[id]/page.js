import { ROUTER_PATH } from "@/tools/constants"
import Image from "next/image"
import ProductSlider from "../ProductSlider"
import Totals from "./Totals"
import PaymentInfo from "./PaymentInfo"
import Address from "./Address"
import Script from "next/script"




  export default async function OrderDetailPage({ params, searchParams }) {
    const response = await fetch( 'http://localhost:3000' + ROUTER_PATH.API.ORDERS + '/' + params.id)
    const { code, data:order } = await response.json()
    const selectedProduct = searchParams?.item===undefined ? 0 : searchParams?.item

    return (
      <div className="bg-white h-screen">
        <Script id="1">{`
          localStorage.clear()
        `}</Script>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-5 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Detalles de la Orden</h1>
          <div className="mt-2 border-b border-gray-200 pb-5 text-sm sm:flex sm:justify-between">
            <dl className="flex">
              <dt className="text-gray-500">Numero de Orden &nbsp;</dt>
              <dd className="font-medium text-gray-900">{ order.id }</dd>
              <dt>
                <span className="mx-2 text-gray-400" aria-hidden="true">&middot;</span>
              </dt>
              <dd className="font-medium text-gray-900">
                <time dateTime={order.datetime}>{ order.date }</time>
              </dd>
            </dl>
          </div>


          <div className="mt-0">
            <div className="rounded-lg bg-gray-50 px-6 py-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0 lg:py-8">
              <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-5 lg:pl-8">
                <Address {...order.address} />
                <PaymentInfo option={order.paymentInfo.type}/>
              </dl>
              <Totals totals={order.totals}/>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Productos comprados ({order.products.length})</h2>
            <div className="space-y-1">
              {order.products.filter((product,index)=>index===parseInt(selectedProduct)).map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
                >
                  <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-50">
                      <Image src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" width={500} height={500}/>
                    </div>
                  </div>
                  <div className="mt-0 sm:col-span-7 sm:mt-0 md:row-end-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="mt-1 font-medium text-gray-900">{product.price}</p>
                  </div>
                  <div className="sm:col-span-12 md:col-span-7">
                    <dl className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-4 sm:grid-cols-2 sm:gap-x-6 sm:py-4 md:py-4">
                      <div className="sm:col-span-2 min-h-[100px]">
                        <dt className="font-medium text-gray-900">Descripción</dt>
                        <dd className="mt-1 text-gray-500">{product.description}</dd>
                      </div>
                    </dl>
                    <div className="mt-2">
                        <h4 className="text-lg font-medium text-gray-900">Productos</h4>
                        <span className="w-fit px-10">
                          <ProductSlider products={order.products} />
                          <p className="text-sm my-1 italic text-gray-600">Seleccione alguno de los productos para ver sus detalles</p>
                        </span>
                    </div>
                    </div>
                  </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    )
  }