import { cookies } from "next/headers";

export async function GET(){
    let cookieStore = await cookies();
    const allCookies = cookieStore.getAll();
    allCookies.forEach(({ name }) => {
    cookieStore.delete(name);
    });
    return new Response("Hello")
}