export default function PaymentDetails() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Dirección de envío</h2>
                <p className="text-sm">Calle 123, Ciudad, Estado, CP 12345</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Dirección de facturación</h2>
                <p className="text-sm">Calle 123, Ciudad, Estado, CP 12345</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold">Método de pago</h2>
                <p className="text-sm">Tarjeta de crédito</p>
            </div>
        </div>
    )
}