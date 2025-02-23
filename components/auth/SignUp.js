"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function SignIn(){
    const router = useRouter();
    const [data, setData] = useState({
        email:"",
        password:"",
    })
    function handleChange(event){
        setData(prev=>{
            return {...prev,[event.target.name]:event.target.value}
        })
    }
    async function handleSubmit(){
        const response = await fetch("/api/signUp",{
            method:"POST",
            body:JSON.stringify(data)
        })
        router.push("/")
        router.refresh();
    }
    return(
        <div className="flex items-center justify-center flex-col gap-4 py-32">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <div className="w-3/4 md:w-1/3 bg-white rounded-lg flex flex-col p-6 gap-8 border">
            <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleChange} value={data.email} className="h-10 border border-primary rounded-lg px-2" id="email" name="email"/>
            </div>
            <div className="flex flex-col gap-4">
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handleChange} value={data.password} className="h-10 border border-primary rounded-lg px-2" id="password" name="password"/>
            </div>
            <button onClick={handleSubmit} className="bg-primary rounded-lg h-10 text-white hover:bg-hover">Sign Up</button>
            </div>
        </div>
    )
}