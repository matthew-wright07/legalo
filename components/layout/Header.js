import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DropDown from "./dropdown/DropDown";

export default async function Header() {
    const cookieStore = await  cookies(); // Get the cookies first
    const supabase = createServerComponentClient({ cookies: () => cookieStore }); // Pass as a function
    const { data, error } = await supabase.auth.getUser();

  return (
    <div className="flex justify-between px-24 h-20 items-center shadow-md">
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
        <li><a className="hover:text-primary" href="/pricing">Pricing</a></li>
        <li><a className="hover:text-primary" href="">Contact</a></li>
      </ul>
      <div className="flex gap-4 justify-center items-center">
        {data?.user ? (
          <div className="flex gap-2 items-center justify-center">
          <span className="text-white bg-primary w-10 h-10 flex items-center justify-center rounded-lg text-xl">
            {data.user.email[0].toUpperCase()}
          </span>
          <a href="https://billing.stripe.com/p/login/test_00gdUWd7F9Gmdd6288">
          <svg
            className={`w-4 h-4 rotate-90 group-hover:text-primary`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          </div>
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
