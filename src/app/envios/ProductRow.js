import { ROUTER_PATH } from "@/tools/constants"
import Link from "next/link"
import { DeleteIcon, EditIcon, OpenIcon } from "@/components/icons"
import RowCardMobile from "./RowCardMobile"
import ProductsModel from "@/tools/models/ProductsModel"

export default function ProductRow({ item, fields, isAdmin, isOwner }) {

    const formater = (value, formatAction) => {
        if( formatAction ) {
            return formatAction(value, item, (isAdmin || isOwner))
        }
        return value
    }

    const handlerDelete = async () => {
        await ProductsModel.delete(item?.id)
    }

    const bgcolor = {
        closed: 'bg-red-200',
        accept: 'bg-green-200'
    }

    return <>
        <tr className={"text-inherit hidden md:table-row align-middle outline-none bg-opacity-50 hover:bg-opacity-100 " + (bgcolor[item.status] ?? "bg-slate-200") }>
            { fields.map(
                field => <td
                    key={'field-item-'+field.id}
                    className="leading-6 text-sm font-normal table-cell text-left text-[#212B36] px-4 py-6 border-b-0"
                >{ formater(item[field.id], field?.format) }</td>
            ) }
            <td className="leading-6 text-sm font-normal text-center text-[#212B36] border-b-0">
                <span className="flex flex-row gap-1 px-2">
                    { (isAdmin || isOwner) && <button onClick={handlerDelete} className="py-1 px-1 rounded-md border-2 border-red-600 hover:bg-red-600 text-red-600 bg-transparent hover:text-white uppercase text-sm" >
                        <DeleteIcon />
                    </button>}
                    { (isAdmin || isOwner) && <Link className="py-1 px-1 rounded-md border-2 border-blue-600 hover:bg-blue-600 text-blue-600 bg-transparent hover:text-white uppercase text-sm" href={`?modal=edit-auction&params=id&id=${item.id}`}>
                        <EditIcon />
                    </Link>}
                    <Link className="py-1 px-1 rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white bg-transparent text-green-600 uppercase text-sm" href={`${ROUTER_PATH.PRODUCTS}/${item.id}`}>
                        <OpenIcon />
                    </Link>
                </span>
            </td>
        </tr>
        <tr>
            <RowCardMobile
                name={ formater(item['name'], fields.find( field=> field.id==='name')?.format) }
                from={ formater(item['from'], fields.find( field=> field.id==='from')?.format) }
                to={ formater(item['to'], fields.find( field=> field.id==='to')?.format) }
                dimensions={ formater(item['dimensions'], fields.find( field=> field.id==='dimensions')?.format) }
                weight={ formater(item['weight'], fields.find( field=> field.id==='weight')?.format) }
                status={ formater(item['status'], fields.find( field=> field.id==='status')?.format) }
                isAdmin={isAdmin}
                isOwner={isOwner}
                onDelete={handlerDelete}
            />
        </tr>
    </>
}