
import Link from "next/link"
import React from 'react'

export default function Sidebar(){

        return (
        <div className="bg-slate-800 space-y-6 w-60 h-screen fixed left-0 top-0">
          <a href="" className="flex p-4 w-full items-center justify-center ">
            <img className="w-[150px]" src="/images/logotipo.png" alt="" />           
            </a>
          <div  className="flex flex-col text-white space-y-4 p-4 ">
            <a href="">Dashboard</a>
            <a href="">Catalogue</a>
            <a href="">Customers</a>
            <a href="">Markets</a>
            <a href="">Farmes</a>
            <a href="">Orders</a>
            <a href="">Staff</a>
            <a href="">Settings</a>
            <a href="">Online Store</a>
          </div>
          
        </div>
    )
}