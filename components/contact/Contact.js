"use client"

import { useState } from "react";

export default function Contact(){
    const [done,setDone] = useState(false);
    const [data,setData] = useState({
        email:"",
        subject:"",
        message:"",
    })

    async function handleSubmit(event){
        event.preventDefault();
        await fetch("/api/contact",{
            method:"POST",
            body:JSON.stringify(data),
        })
        setData({
            email:"",
            subject:"",
            message:"",
        })
        setDone(true)
    }
    function handleChange(event){
        const value =  event.target.value;
        const name = event.target.id;
        setData(prev=>{
            return {...prev,[name]:value}
        })
    }
    return (
        <div className="w-full flex flex-col items-center justify-center gap-8 py-8">
            <form onSubmit={handleSubmit} className=" w-3/4 flex flex-col items-center justify-center gap-8 border border-background rounded-lg px-4 py-8">
            <div className="text-center flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="w-1/2 text-center">Have a question or need support? Fill out the form, and our team will get back to you as soon as possible with the help you need. We’re here to make the process quick and easy!</p>
            </div>
            <div className="flex flex-col w-3/4 gap-4">
            <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input value={data.email} onChange={handleChange} id="email" type="email" className="border border-primary rounded-lg h-10 text-black p-2"/>
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input value={data.subject} onChange={handleChange} id="subject" type="text" className="border border-primary rounded-lg h-10 text-black p-2"/>
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <input value={data.message} onChange={handleChange} id="message" className="border border-primary rounded-lg h-36 text-black p-2"/>
            </div>
            <button className="bg-primary h-10 text-white rounded-lg">Send</button>
            </div>
            </form>
            {done?"Thank You":null}
        </div>
    )
}