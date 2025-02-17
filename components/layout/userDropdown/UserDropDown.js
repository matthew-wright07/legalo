"use client"

import { useState } from "react";

export default function UserDropDown({data}){
    const [clicked,setClicked] = useState(false)
    function handleClick(){
        setClicked(prev=>{
            return !prev;
        })
    }
    return(
        <div className="flex gap-2 items-center justify-center rounded-lg">
          <div  onClick={handleClick} className="hover:cursor-pointer flex gap-2 items-center justify-center rounded-lg">
          <span className="text-white bg-primary w-10 h-10 flex items-center justify-center rounded-lg text-xl">
            {data.user.email[0].toUpperCase()}
          </span>
          <svg
            className={`w-4 h-4 ${clicked?"-rotate-90":"rotate-90"} group-hover:text-primary`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          </div>
          {clicked?
          <div className="absolute top-20 bg-white w-32 h-32 shadow-md rounded-b-lg flex flex-col items-center text-primary justify-between">
            <a className="hover:bg-background w-full flex justify-center items-center h-1/3" href="">Settings</a>
            <a className="hover:bg-background w-full flex justify-center items-center h-1/3" href="">Payments</a>
            <a className="hover:bg-background w-full flex justify-center items-center h-1/3" href="">Sign Out</a>
          </div>
          :
          null
        }
          </div>
    )
}