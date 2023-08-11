"use client";

export default function TotalCart({
    subtotal,
    taxes,
    shipping,
    total
}) {


    return <dl className="mt-10 space-y-6 text-sm font-medium 
    text-gray-500">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-gray-900">${subtotal}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Impuesto</dt>
                    <dd className="text-gray-900">${taxes}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Envio</dt>
                    <dd className="text-gray-900">${shipping}</dd>
                  </div>
                  <div className="flex justify-between border-t 
    border-gray-200 pt-6 text-gray-900">
                    <dt className="text-base">Total</dt>
                    <dd className="text-base">${total}</dd>
                  </div>
                </dl>
}