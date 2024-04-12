import {AlignJustify, Sun, Bell, User} from 'lucide-react'


import React from 'react'

export default function Navbar(){
  return (
    <div className='flex items-center justify-between bg-yellow-400 fixed w-[90%] top-0 left-60 h-16 px-10 py-4 '>
        {/* Icon */}
        <button>
            <AlignJustify/>
        </button>        
        {/* 3 Icons */}  
        <div className="flex space-x-4 mr-16">
        <button><Sun/></button>
        <button><Bell/></button>
        <button><User/></button>
        </div>    
    </div>
  )
}



