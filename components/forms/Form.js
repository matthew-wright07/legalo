"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form({data,formName, description}){
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
        if (usable.body!=="/signUp"){
            setResponse(usable)
            setDone(true);
        }else{
            router.push("/signUp")
        }
        
    }
    function back(){
        setDone(false)
    }
    return (
        <div className="flex flex-col justify-center items-center">
        {!done?
        <form onSubmit={handleSubmit} className="w-full md:w-4/5 p-4 py-24 flex flex-col gap-8 justify-center items-center">
        <div className="w-3/4 h-5/6 border border-background rounded-lg px-10 py-10 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-xl font-bold">{formName}</h1>
        <div className="rounded-lg w-full flex flex-col gap-4 items-center">
            {data.map(current=>{
                return <div className="flex flex-col w-full" key={current.id}><label htmlFor={current.id}>{current.name}</label><input required name={current.id} className="h-10 border border-primary rounded-lg px-2 text-black w-full" id={current.id}/></div>
            })}
        </div>
        <button className="w-full bg-primary text-white h-10 rounded-lg hover:bg-hover">Submit</button>
        </div>
        </form>
        :
        <div className="w-4/5 px-24 flex flex-col gap-4 justify-center items-center py-24">
            <h1 className="text-xl font-bold">{formName}</h1>
            <div className="w-3/4 h-5/6 border border-background rounded-lg overflow-y-scroll p-8">
            <p className="h-full whitespace-break-spaces">{response}</p>
            </div>
            <button onClick={back} className="w-1/2 h-10 bg-primary rounded-lg text-white">Back</button>
        </div>
        }
        <div className="w-full md:w-1/2 text-center">
            <p>
                {description}
            </p>
        </div>
        </div>
    )
}