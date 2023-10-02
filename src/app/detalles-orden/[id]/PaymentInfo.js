import Image from 'next/image'

export default function PaymentInfo({ option }) {
    return (
        <div>
            <dt className="font-medium text-gray-900">Forma de Pago</dt>
            <dd className="mt-3 flex justify-center border-b-2 border-gray-200">
                { option==='pago_movil' && <Image src={'/images/pago_movil.svg'} className="w-1/8" alt="pago movil" width={80} height={80}/>}
                { option==='tdc' && <Image src={'/images/tdc.svg'} className="w-1/8" alt="tdc" width={80} height={80}/>}
                { option==='zelle' && <Image src={'/images/zelle.svg'} className="w-1/8" alt="zelle" width={80} height={80}/>}
                { option==='paypal' && <Image src={'/images/paypal.svg'} className="w-1/8" alt="paypal" width={80} height={80}/>}
            </dd>
        </div>
    )
}