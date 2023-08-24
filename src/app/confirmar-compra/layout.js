import { headers } from "next/headers"
import { ROUTER_PATH } from "@/tools/constants";
import ActionsDetails from "./Details/ActionsDetails";
import PaymentDetails from "./Details/PaymentDetails";
import ShippingAddress from "./Details/ShippingAddress";
import PaymentsAddress from "./Details/PaymentsAddress";
import ContactDetails from "./Details/ContactDetails";
import PaymentModal from "./PaymentModal";

export default async function CheckoutPage({ children }) {

  const headersList = headers()
  const pathname = headersList.get("x-invoke-path")
  const details = [
    { label: "Informacion de contacto", component: ContactDetails, className:"text-lg pb-6 font-bold text-gray-900", defaultOpen:"true"},
    { label: "Detalles de pago", component: PaymentDetails, className:"w-full py-6 text-left text-lg font-medium text-gray-900"},
    { label: "Dirreción de envio", component: ShippingAddress , className:"w-full py-6 text-left text-lg font-medium text-gray-900",
      hiddenInRoute: ROUTER_PATH.CHECKOUT_SHARED },
    { label: "Dirreción de facturacion", component: PaymentsAddress, className:"w-full py-6 text-left text-lg font-medium text-gray-900" }
  ]

  const checkRoute = ({ hiddenInRoute }) => {
    if( !hiddenInRoute ) return true
    const expression = new RegExp(hiddenInRoute.replace('${id}','[0-9]{1,}'))
    return !expression.test( pathname )
  }


  return (
    <div className="bg-white height-fix">
      <div className="sticky top-0 bg-white w-full z-10 shadow block lg:hidden">
      <div className="py-2 w-full flex justify-end mx-auto px-4 sm:px-6 lg:px-8 xl:px-2 max-w-xl">
              <button
                type="submit"
                form="checkout-form"
                className="rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
              >Continue</button>
            </div>
            </div>
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <span className="sticky top-10">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Detalles de la orden</h2>
              { children }
            </span>
          </div>

          <div className="mx-auto w-full max-w-lg h-lg">

            <form action={ROUTER_PATH.API.CHECKOUT} id="checkout-form" method="post" className="mt-0 pt-0 divide-y divide-gray-200 border-b border-gray-200">
              {
                details.filter(checkRoute).map( ({label, component, className, defaultOpen }) =>
                  <ActionsDetails key={label} label={label} className={className} defaultopen={defaultOpen}>
                    {component()}
                  </ActionsDetails>
                )}
            </form>
          </div>
        </div>

        <PaymentModal />

      </main>
    </div>
  )
}
