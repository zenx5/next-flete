import RowUpdatable from "@/components/RowUpdatable"
import Staring from "@/components/Staring"
import Image from "next/image";
import { UserIcon } from "@/components/icons"
import Comments from "../../../components/Comments";
import { useEffect, useState } from "react";
import CommentsModel from "@/tools/models/CommentsModel";

export default function Account({ user, isCurrent }) {
    const [comments, setComments] = useState(null)

    useEffect(()=>{
        if(user.id) {
            (async ()=>{
                const data = await CommentsModel.search("userId", user.id)
                console.log( data )
                setComments( data )
            })()
        }
    },[user.id])


    return <div className=" divide-y divide-gray-200 col-span-9">
            <div className="space-y-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Perfil</h3>
            </div>
            <div className="mt-6">
        <dl className="divide-y divide-gray-200">
            <RowUpdatable label="Nombre" value={user.name}/>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
            <dt className="text-sm font-medium text-gray-500">Foto</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                {   user?.image ?
                    <Image
                        className="h-8 w-8 rounded-full"
                        width={50}
                        height={50}
                        src={user?.image}
                        alt=""
                    />  : <UserIcon className="h-8 w-8 text-orange-flete"/> }
                </span>
                <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                </span>
            </dd>
            </div>
            <RowUpdatable label="Email" value={user.email}/>
            <RowUpdatable label="Tipo de Usuario" value={user.type} />
            { !isCurrent && <span className="">
                {comments && <Staring
                    average={comments?.map( comment => comment.rating )?.reduce( (a,e)=>a+e, 0 )/comments.length}
                    totalCount={comments.length}
                />}
                { comments && <Comments items={comments}/>}


            </span> }

        </dl>
        </div>
        </div>
}