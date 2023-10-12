import React from "react";
import { getUser } from "@/tools/actions";
import PageProfile from "./page";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
    const user = await getUser();
    if( !user ) return redirect("/")

    return <PageProfile user={user} />;
}