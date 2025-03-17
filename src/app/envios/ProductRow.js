import { ROUTER_PATH } from "@/tools/constants"
import { DeleteIcon, EditIcon, OpenIcon } from "@/components/icons"
import RowCardMobile from "./RowCardMobile"
import ProductsModel from "@/tools/models/ProductsModel"
import { setToast } from "../../components/ToastProvider"
import { SquaresPlusIcon } from '@heroicons/react/24/outline'
import MenuItem from "@/components/MenuItem/MenuItem"
import { formatAuction } from "../../tools/formatFields"

export default function ProductRow({ item, fields, isAdmin, isOwner, isAssigned }) {

    const formater = (value, formatAction) => {
        if( formatAction ) return formatAction(value, item, (isAdmin || isOwner))
        return value
    }

    const handlerDelete = async () => {
        try{
            await ProductsModel.delete(item?.id)
            setToast("Flete eliminado", "success")
        } catch(error){
            console.error(error.message)
            setToast(error.message, "error")
        }
    }

    const solutions = [
        { name: 'Seguimiento', href: `${ROUTER_PATH.PRODUCTS}/${item.id}/details`, icon: SquaresPlusIcon, enable:isAdmin || isOwner || isAssigned },
        { name: 'Abrir', href: `${ROUTER_PATH.PRODUCTS}/${item.id}`, icon: OpenIcon, enable: true },
        { name: 'Editar', href: `?modal=edit-auction&params=id&id=${item.id}`, icon: EditIcon, enable:isAdmin || isOwner },
        { name: 'Eliminar', href: '#', onClick:handlerDelete, icon: DeleteIcon, enable:isAdmin || isOwner}
    ]

    return <>
        <tr className="text-inherit hidden xl:table-row align-middle outline-none bg-opacity-50 hover:bg-opacity-100 bg-slate-200 ">
            { fields.map(
                field => <td
                    key={'field-item-'+field.id}
                    className="leading-6 text-sm font-normal table-cell text-left text-[#212B36] px-4 py-6 border-b-0"
                >{ formater(item[field.id], field?.format) }</td>
            ) }
            <td className="leading-6 text-sm font-normal text-center text-[#212B36] border-b-0 gap-1">
                <MenuItem items={solutions.filter( item => item.enable )} />
            </td>
        </tr>
        <tr>
            <RowCardMobile
                id={item.id}
                name={ formater(item['name'], fields.find( field=> field.id==='name')?.format) }
                from={ formater(item['from'], fields.find( field=> field.id==='from')?.format) }
                to={ formater(item['to'], fields.find( field=> field.id==='to')?.format) }
                dimensions={ formater(item['dimensions'], fields.find( field=> field.id==='dimensions')?.format) }
                weight={ formater(item['weight'], fields.find( field=> field.id==='weight')?.format) }
                status={ formater(item['status'], fields.find( field=> field.id==='status')?.format) }
                lastAuction={item.auctions.length>0 ? formatAuction(item.auctions) : null }
                isAdmin={isAdmin}
                isOwner={isOwner}
                onDelete={handlerDelete}
            />
        </tr>
    </>
}