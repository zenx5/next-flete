import React, { Children } from "react";
import { getUser } from "@/tools/actions";
import Script from "next/script";
import PageProfile from "./page";

export default async function Layout({ children }) {
    const user = await getUser();
    
    return <PageProfile user={user} />;
}