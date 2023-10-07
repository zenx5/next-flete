import { ROUTER_PATH } from "@/tools/constants"
import Link from "next/link"

export default function ProductRow({ item, fields }) {

    const formater = (value, formatAction) => {
        if( formatAction ) {
            return formatAction(value)
        }
        return value
    }

    return <tr className="text-inherit table-row align-middle outline-none hover:bg-slate-200">
        { fields.map(
            field => <td
                key={'field-item-'+field.id}
                className="leading-6 text-sm font-normal table-cell text-left text-[#212B36] px-4 py-6 border-b-0"
            >{ formater(item[field.id], field?.format) }</td>
        ) }
        <td className="leading-6 text-sm font-normal table-cell text-center text-[#212B36] px-4 py-6 border-b-0">
            <Link className="py-1 px-4 rounded-md border border-slate-800 hover:bg-slate-800 hover:text-white uppercase text-sm" href={`${ROUTER_PATH.PRODUCTS}/${item.id}`}>Ir</Link>
        </td>
    </tr>
}