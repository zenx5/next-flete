import { ROUTER_PATH } from "@/tools/constants"
import Link from "next/link"
import { DeleteIcon, EditIcon, OpenIcon } from "../../components/icons"

export default function ProductRow({ item, fields, isAdmin }) {

    const formater = (value, formatAction) => {
        if( formatAction ) {
            return formatAction(value, item, isAdmin)
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
        <td className="leading-6 text-sm font-normal text-center text-[#212B36] border-b-0">
            <span className="flex flex-row gap-1">
                { isAdmin && <Link className="py-1 px-1 rounded-md border border-red-600 bg-red-600 text-white hover:bg-slate-800 hover:text-white uppercase text-sm" href="?modal=delete-auction">
                    <DeleteIcon />
                </Link>}
                { isAdmin && <Link className="py-1 px-1 rounded-md border border-blue-600 bg-blue-600 text-white hover:bg-slate-800 hover:text-white uppercase text-sm" href="?modal=edit-auction">
                    <EditIcon />
                </Link>}
                <Link className="py-1 px-1 rounded-md border border-green-600 bg-green-600 text-white hover:bg-slate-800 hover:text-white uppercase text-sm" href={`${ROUTER_PATH.PRODUCTS}/${item.id}`}>
                    <OpenIcon />
                </Link>
            </span>
        </td>
    </tr>
}