import { FaShoppingBag , FaPallet, FaHistory, FaTasks } from "react-icons/fa";
import SmallCard from './SmallCard'
import React from 'react'

export default function SmallCards(){
  
    const orderStats = [
        {
            title: 'Total Pedidos',
            icons:<FaShoppingBag  />,
            value: 100,
            color: 'bg-green-500',            
        },
        {
            title: 'Pedidos Pendentes',
            icons:<FaPallet />,
            pending:40000,       
            value: 100,
            color: 'bg-cyan-500',
           
        },
        {
            title: 'Pedidos processados',
            icons:<FaHistory/>,
            value: 100,
            color: 'bg-orange-500',
            
        },
        {
            title: 'Pedidos entregues',
            icons:<FaTasks/>,
            value: 100,
            color: 'bg-yellow-500',
       
        },
    ]
      return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {/* Cards*/}
          { orderStats.map((item, i) =>{
    
            return (
              <SmallCard className=""
                data={item}           
                key={i}
              />
            )
          })}
       
        </div>
      )
    };
    
    
    
    