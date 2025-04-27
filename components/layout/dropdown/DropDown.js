"use client"

import { useState } from "react"
import Card from "./Card"

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
            <div className={`shadow-md border border-top px-24 py-8 grid grid-cols-2 lg:grid-cols-4 grid-rows-2 w-10 bg-white absolute top-24 left-0 w-full justify-center items-center gap-4 ${clicked?"block":"hidden"}`}>

            <Card href="/forms/cookies" src="/cookie.png" heading="Cookie Policy Generator"/>

            <Card href="/forms/terms" src="/terms.png" heading="Terms Of Service Generator"/>

            <Card href="/forms/subscriptions" src="/subscriptions.png" heading="Subscription Policy Generator"/>

            <Card href="/forms/enduser" src="/enduser.png" heading="End User Policy Generator"/>

            <Card href="/forms/disclaimer" src="/disclaimer.png" heading="Disclaimer Policy Generator"/>

            <Card href="/forms/privacy" src="/privacy.png" heading="Privacy Policy Generator"/>

            <Card href="/forms/acceptable" src="/acceptable.png" heading="Acceptable Use Policy Generator"/>
            
            <Card href="/forms/returns" src="/returns.png" heading="Returns & Refund Policy Generator"/>

        </div>
        </li>
    )
}