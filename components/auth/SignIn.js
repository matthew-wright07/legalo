"use client"

import { useState } from "react";

export default function SignIn(){
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
        const response = await fetch("/api/signIn",{
            method:"POST",
            body:JSON.stringify(data)
        })
    }
    return(
        <div className="h-[70vh] flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <div className="w-1/4 bg-white rounded-lg flex flex-col p-6 gap-8 border">
            <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleChange} value={data.email} className="h-10 border rounded-lg px-2" id="email" name="email"/>
            </div>
            <div className="flex flex-col gap-4">
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handleChange} value={data.password} className="h-10 border rounded-lg px-2" id="password" name="password"/>
            </div>
            <button onClick={handleSubmit} className="bg-primary rounded-lg h-10 text-white hover:bg-hover">Sign In</button>
            </div>
        </div>
    )
}