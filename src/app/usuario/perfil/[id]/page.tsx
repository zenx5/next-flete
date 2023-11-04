"use client";
import Account from "../Account";
import { USER_TYPE } from "@/tools/constants";
import { useEffect, useState } from "react";
import { getUser } from "@/tools/actions";
import { redirect } from "next/navigation";
import BarSide from '../BarSide'
import { onSnap } from "@/tools/firebase/actions"

const subNavigation = [
  { name: 'Perfil', href: 0, current: false }
]


export default function PageProfile({ params }:{ params: { id:string }}) {
    const { id } = params
  const [user, setUser] = useState<any>(null)
  const [ profile, setProfile ] = useState(null)
  useEffect(()=>{
    (async ()=>{
      const _user = await getUser();
      if( !_user ) return redirect("/")
      setUser( prev => _user)
    })()
  },[])

  useEffect(()=>{
    if( id ) {
        onSnap("users", doc => {
            setProfile( doc )
        }, id)
    }
  },[id])

  return (
    <div className="h-full">
      <main className="mx-auto max-w-7xl pb-10 lg:px-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          { (!!user && !!profile) ? <BarSide
            items={subNavigation}
            contents={[
              <Account key="content-1" user={profile} isCurrent={user?.id===id} />
            ]}
          />: <p>Loading...</p>}
        </div >
      </main >
    </div >
)
}

