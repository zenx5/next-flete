import ActionsDetails from "./Details/ActionsDetails";
import PaymentDetails from "./Details/PaymentDetails";
import ShippingAddress from "./Details/ShippingAddress";
import PaymentsAddress from "./Details/PaymentsAddress";
import ContactDetails from "./Details/ContactDetails";
import PaymentModal from "./PaymentModal";

export default async function CheckoutPage({ children }) {

  const details = [
    { label: "Informacion de contacto", component: ContactDetails, className:"text-lg py-6 font-bold text-gray-900", defaultOpen:"true"},
    { label: "Detalles de pago", component: PaymentDetails, className:"w-full py-6 text-left text-lg font-medium text-gray-500"},
    { label: "Dirreción de envio", component: ShippingAddress , className:"w-full py-6 text-left text-lg font-medium text-gray-500"},
    { label: "Dirreción de facturacion", component: PaymentsAddress, className:"w-full py-6 text-left text-lg font-medium text-gray-500" }
  ]


  return (
    <div className="bg-white height-fix">
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Detalles de la orden</h2>
            { children }
          </div>

          <div className="mx-auto w-full max-w-lg h-lg">

            <div className="mt-10 divide-y divide-gray-200 border-b border-gray-200">
              {
                details.map( ({label, component, className, defaultOpen }) =>
                  <ActionsDetails key={label} label={label} className={className} defaultopen={defaultOpen}>
                    {component()}
                  </ActionsDetails>
                )}
            </div>
          </div>
        </div>

        <PaymentModal />

      </main>
    </div>
  )
}
