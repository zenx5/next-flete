import Script from "next/script";
import LineInput from "@/components/LineInput";
import PerfilComponent from "@/components/PerfilComponent";
import { getUser } from "@/tools/actions";

export default async function ProfilePage(){
    const user = await getUser();

    return user ? <PerfilComponent user={user}/> : <Script id="redirect">{`document.location.href = document.location.origin`}</Script>
}