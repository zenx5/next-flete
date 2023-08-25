import Image from 'next/image'
import Link from 'next/link'

export default function PaymentDetails() {
    const {
        NEXT_PUBLIC_BASE_PATH,
        PUBLI_PATH_IMAGE
    } = process.env
    return (
        <div className="flex flex-row gap-2 justify-between">
            <Link href="?payment=pago_movil"><Image src={PUBLI_PATH_IMAGE+'/pago_movil.svg'} className="w-1/8" alt="pago movil" width={100} height={100}/></Link>
            <Link href="?payment=tdc"><Image src={PUBLI_PATH_IMAGE+'/tdc.svg'} className="w-1/8" alt="tdc" width={100} height={100}/></Link>
            <Link href="?payment=zelle"><Image src={PUBLI_PATH_IMAGE+'/zelle.svg'} className="w-1/8" alt="zelle" width={100} height={100}/></Link>
            <Link href="?payment=paypal"><Image src={PUBLI_PATH_IMAGE+'/paypal.svg'} className="w-1/8" alt="paypal" width={100} height={100}/></Link>
        </div>
    )
}