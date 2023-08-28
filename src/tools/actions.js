"use server";
import { cookies } from "next/headers"


// Definir estructura de Cookies de usuario
const userCookie = {
    name: "",
    email: "",
    token: "",
    id: "",
    birthdate: "",
    phone: "",
    phoneFamily: "",
    grade: "",
    academic: "",
    nextGrade: "",
    expirationDate: "",
};

export const execAction = async (action) => {
    switch (action) {
        case "logout":
            await removeUser();
            break;
        default:
            break;
    }
}


export const isAuthenticated = () => {
    const user = cookies().get("user");
    if (user?.value) {
        const { expirationDate } = JSON.parse(user.value);
        if (expirationDate > Date.now()) {
            return true;
        }
    }
    return false;
}


export const getUser = () => {
    const user = cookies().get("user");
    return user?.value ? JSON.parse(user.value) : false;
}

export const setUser = (user) => {
    const expires = user.expirationDate ? user.expirationDate : Date.now() + 24 * 60 * 60 * 1000;
    cookies().set("user", JSON.stringify({
        ...userCookie,
        ...user,
        expirationDate: expires
    }), {
        expires: expires
    });
}

export const removeUser = async () => {
    await cookies().delete("user");
}
