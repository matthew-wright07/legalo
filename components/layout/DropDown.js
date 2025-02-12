"use client"

import { useState } from "react"

export default function DropDown(){
    const [clicked,setClicked] = useState(false)
    function handleClick(){
        setClicked(prev=>{
            return !prev;
        })
    }
    return (
        <li className="flex justify-center items-center gap-1 group">
            <a onClick={handleClick} className={`group-hover:text-primary group-hover:cursor-pointer ${clicked?"text-primary":null}`}>Products</a>
            <svg
            className={`w-4 h-4 ${clicked?"-rotate-90 text-primary":"rotate-90"} group-hover:text-primary`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className={`shadow-md border border-top px-24 py-4 grid grid-cols-4 grid-rows-2 h-10 w-10 bg-white absolute top-20 left-0 w-full h-52 justify-center items-center ${clicked?"block":"hidden"}`}>

            <a href="/forms/cookies" className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src="/cookie.png" className="w-8 h-8"/>
            <h1 className="text-xl font-bold text-primary">Cookie Policy Generator</h1>
            </a>

            <a href="/forms/terms" className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src="/terms.png" className="w-8 h-8"/>
            <h1 className="text-xl font-bold text-primary">Terms Of Service Generator</h1>
            </a>

            <a href="/forms/subscriptions" className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src="/subscriptions.png" className="w-8 h-8"/>
            <h1 className="text-xl font-bold text-primary">Subscription Policy Generator</h1>
            </a>

            <a href="/forms/enduser" className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src="/enduser.png" className="w-8 h-8"/>
            <h1 className="text-xl font-bold text-primary">End User Policy Generator</h1>
            </a>

            <a href="/forms/disclaimer" className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src="/disclaimer.png" className="w-8 h-8"/>
            <h1 className="text-xl font-bold text-primary">Disclaimer Policy Generator</h1>
            </a>

            <a href="/forms/privacy" className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src="/privacy.png" className="w-8 h-8"/>
            <h1 className="text-xl font-bold text-primary">Privacy Policy Generator</h1>
            </a>

            <a href="/forms/acceptable" className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src="/acceptable.png" className="w-8 h-8"/>
            <h1 className="text-xl font-bold text-primary">Acceptable Use Policy Generator</h1>
            </a>

            <a href="/forms/returns" className="w-full h-full hover:bg-background flex justify-start items-center rounded-lg gap-2 p-4">
            <img src="/returns.png" className="w-8 h-8"/>
            <h1 className="text-xl font-bold text-primary">Returns & Refund Policy Generator</h1>
            </a>

        </div>
        </li>
    )
}