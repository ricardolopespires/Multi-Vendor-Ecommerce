import Sidebar from '@/components/backoffice/Sidebar'; 
import Navbar from '@/components/backoffice/Navbar';





import React from 'react'

export default function Layout({children}){
  return (
    <div className='flex'>
      {/* sidebar */}
      <Sidebar/>
      <div className='w-full'>
        {/* Header */} 
        <Navbar/>
        <main className='p-6 min-h-screen ml-60 mt-16'>
   
          {children}
        </main>
        {/* Main */} 
      </div>
      {/* Main Body */}    
    </div>
  )
}
