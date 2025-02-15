"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form({data,formName}){
    const [done,setDone] = useState(false)
    const [response,setResponse] = useState("")
    const router = useRouter();
    async function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        const response = await fetch("/api/formSubmit",{
            method:"POST",
            body:JSON.stringify({route:formName,data:formObject})
        })
        const usable = await response.json();
        console.log("Usable Response:", usable);
        if (usable.body!=="/pricing"){
            setResponse(usable)
            setDone(true);
        }else{
            router.push("/pricing")
        }
        
    }
    return (
        <div className="flex flex-col justify-center items-center">
        {!done?
        <form onSubmit={handleSubmit} className="w-4/5 px-24 p-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl font-bold">{formName}</h1>
        <div className="rounded-lg w-full gap-4 grid grid-cols-2">
            {data.map(current=>{
                return <div className="flex flex-col" key={current.id}><label htmlFor={current.id}>{current.name}</label><input required name={current.id} className="h-10 border border-primary rounded-lg px-2 text-black w-full" id={current.id}/></div>
            })}
        </div>
        <button className="w-1/2 bg-primary text-white h-10 rounded-lg hover:bg-hover">Submit</button>
        </form>
        :
        <div className="h-[70vh] w-4/5 px-24 flex flex-col gap-4 justify-center items-center overflow-y-scroll">
            <p className="h-full whitespace-break-spaces">{response}</p>
        </div>
        }
        </div>
    )
}