import {Layers } from  "lucide-react"
import { FaBoxes } from "react-icons/fa";


import React from 'react'

export default function LargeCard({data}){
  return (
    <div className={`rounded-lg border mt-5 p-7 gap-2 flex flex-col items-center ${data.shadow}`}>
      {/* Cards*/}
     <div className={` text-4xl  ${data.color}`}>{data.icons}</div>
      <h4 >{data.period }</h4>
      <h2 className="md:text-3xl font-semibold">R$ {data.sales}</h2>
    </div>
  )
}


