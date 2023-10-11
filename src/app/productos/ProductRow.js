import { ROUTER_PATH } from "@/tools/constants"
import Link from "next/link"
import { DeleteIcon, EditIcon, OpenIcon } from "../../components/icons"
import { actionDelete } from "../../tools/firebase/actions"
import { ENTITIES } from "@/tools/constants"

export default function ProductRow({ item, fields, isAdmin }) {

    const formater = (value, formatAction) => {
        if( formatAction ) {
            return formatAction(value, item, isAdmin)
        }
        return value
    }

    const handlerDelete = async () => {
        await actionDelete(ENTITIES.auctions, item.id)
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
                { isAdmin && <button onClick={handlerDelete} className="py-1 px-1 rounded-md border-2 border-red-600 hover:bg-red-600 text-red-600 bg-transparent hover:text-white uppercase text-sm" >
                    <DeleteIcon />
                </button>}
                { isAdmin && <Link className="py-1 px-1 rounded-md border-2 border-blue-600 hover:bg-blue-600 text-blue-600 bg-transparent hover:text-white uppercase text-sm" href={`?modal=edit-auction&params=id&id=${item.id}`}>
                    <EditIcon />
                </Link>}
                <Link className="py-1 px-1 rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white bg-transparent text-green-600 uppercase text-sm" href={`${ROUTER_PATH.PRODUCTS}/${item.id}`}>
                    <OpenIcon />
                </Link>
            </span>
        </td>
    </tr>
}