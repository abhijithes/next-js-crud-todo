"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function form({formtype,id}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

     const router=useRouter()
    
    const addhandleSubmit=async(e)=>{
        e.preventDefault()
        try{
        const res = await fetch('/api/topic',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title,description})
        })
        if(!res.ok){
            throw new Error("Failed to add topic")
        }
        router.push('/todo')
    }catch(err){
        console.log("Error adding topic",err)
    }
    }

    const edithandleSubmit=async(e)=>{
        e.preventDefault()
        try{
        const res = await fetch('/api/topic',{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id,title,description})
        })
        if(!res.ok){
            throw new Error("Failed to edit topic")
        }
        router.push('/todo')
    }catch(err){
        console.log("Error editing topic",err)
    }
    }

    return (
        <form
            onSubmit={(e)=>{
                e.preventDefault();
                formtype=="addtopic" ? addhandleSubmit(e) : edithandleSubmit(e) } }
            className="flex flex-col mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-lg "
        >
            <input
                type="text"
                value={title}
                placeholder="Title"
                className="border-2 border-gray-300 rounded-lg p-2 mb-4"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <input
                type="text"
                value={description}
                placeholder="Description"
                className="border-2 border-gray-300 rounded-lg p-2 mb-4"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <button
                type="submit"
                className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-1/2 bg-gray-200 font-semibold "
            >
                Submit
            </button>
        </form>
    );
}
