"use client";
import Account from "./Account";
import PasswordChange from "./PasswordChange";
import History from "./History";
import BarSide from './BarSide'
import Marketing from "./Marketing";
import { USER_TYPE } from "@/tools/constants";
import { useEffect, useState } from "react";
import { getUser } from "@/tools/actions";
import { redirect } from "next/navigation";

const subNavigation = [
  { name: 'Perfil', href: 0, current: false },
  { name: 'Contraseña', href: 1, current: false },
  { name: 'Historial', href: 2, current: false },
  { name: 'Marketing', href: 3, current: false },
]


export default function PageProfile() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    (async ()=>{
      const _user = await getUser();
      if( !_user ) return redirect("/")
      setUser( prev => _user)
    })()
  },[])

  return (
      <div className="h-full">
        <main className="mx-auto max-w-7xl pb-10 lg:px-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            { user ? <BarSide
              items={subNavigation.filter( (item, index) => user.type===USER_TYPE.ADMIN || index!==3 )}
              contents={[
                <Account key="content-1" user={user} />,
                <PasswordChange key="content-2" />,
                <History key="content-3" user={user} />,
                <Marketing key="content-4" />
              ].filter( (item, index) => user.type===USER_TYPE.ADMIN || index!==3 )}
            />: <p>Loading...</p>}
          </div >
        </main >
      </div >
  )
}

