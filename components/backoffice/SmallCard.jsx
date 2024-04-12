



import React from 'react'

export default function SmallCard({data}){
  return (
    <div className=' rounded-lg shadow-lg  border mt-10'>
      <div className="flex items-center p-4">
        <div className={`flex-shrink-0 text-2xl rounded-full text-white p-4 ${data.color}`}>
          {data.icons}
        </div>
        <div className="ml-3 flex flex-col items-center justify-center">
          <div className="text-sm font-medium text-gray-900 text-md">
            {data.title}
          </div>
          <div className='text-xs text-red-400'>
            { data.pending ?(data.pending):("")}
          </div>
          <div className="text-sm text-gray-500 text-2xl font-semibold">
            {data.value}
          </div>
        </div>
      </div>
    </div>
  )
}


