"use server";
import { cookies } from "next/headers";

export const setError = (message, code) => {
    const expires = Date.now() + 15 * 1000;
    cookies().set("error", JSON.stringify({
        message,
        code,
        expirationDate: expires
    }), {
        expires: expires
    });
}

export const getError = () => {
    const user = cookies().get("error");
    return user?.value ? JSON.parse(user.value) : false;
}
