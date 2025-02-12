import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DropDown from "./DropDown";

export default async function Header() {
    const cookieStore = await  cookies(); // Get the cookies first
    const supabase = createServerComponentClient({ cookies: () => cookieStore }); // Pass as a function
    const { data, error } = await supabase.auth.getUser();

  return (
    <div className="flex justify-between px-24 h-20 items-center shadow-md">
      <a className="flex gap-2 items-center justify-center" href="/">
        <img
          src="/logo.png"
          className="h-10"
        />
        <h1 className="text-3xl font-bold text-primary">Legalo</h1>
      </a>
      <ul className="flex gap-4 justify-center items-center">
        <li><a className="hover:text-primary" href="/">Home</a></li>
        <DropDown/>
        <li><a className="hover:text-primary" href="">About</a></li>
        <li><a className="hover:text-primary" href="">Contact</a></li>
      </ul>
      <div className="flex gap-4 justify-center items-center">
        {data?.user ? (
          <span className="text-white bg-primary w-10 h-10 flex items-center justify-center rounded-lg text-xl">{data.user.email[0].toUpperCase()}</span>
        ) : (
          <>
            <a className="bg-primary h-10 w-20 flex items-center justify-center text-white rounded-lg hover:bg-hover" href="/signIn">
              Sign In
            </a>
            <a className="bg-primary h-10 w-20 flex items-center justify-center text-white rounded-lg hover:bg-hover" href="/signUp">
              Sign Up
            </a>
          </>
        )}
      </div>
    </div>
  );
}
