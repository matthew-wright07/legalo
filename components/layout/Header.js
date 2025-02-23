import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DropDown from "./dropdown/DropDown";
import UserDropDown from "./userDropdown/UserDropDown";

export default async function Header() {
    const cookieStore = await  cookies(); // Get the cookies first
    const supabase = createServerComponentClient({ cookies: () => cookieStore }); // Pass as a function
    const { data, error } = await supabase.auth.getUser();

  return (
    <div className="flex justify-between px-24 items-center shadow-md flex-wrap py-8 gap-4">
      <a className="flex gap-2 items-center justify-center" href="/">
        <img
          src="/logo.png"
          className="h-10 w-10"
        />
        <h1 className="text-3xl font-bold text-primary">Legalo</h1>
      </a>
      <ul className="flex gap-4 justify-center items-center">
        <li><a className="hover:text-primary" href="/">Home</a></li>
        <DropDown/>
        <li><a className="hover:text-primary" href="/about">About</a></li>
        <li><a className="hover:text-primary" href="/contact">Contact</a></li>
      </ul>
      <div className="flex gap-4 justify-center items-center">
        {data?.user ? (
          <UserDropDown data={data}/>
        ) : (
          <>
            <a className="border border-primary h-10 w-20 flex items-center justify-center text-primary rounded-lg hover:border-hover hover:text-hover" href="/signUp">
              Sign Up
            </a>
            <a className="bg-primary h-10 w-20 flex items-center justify-center text-white rounded-lg hover:bg-hover" href="/signIn">
              Sign In
            </a>
          </>
        )}
      </div>
    </div>
  );
}
