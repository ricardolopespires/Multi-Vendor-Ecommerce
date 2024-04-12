import LargeCard from './LargeCard'
import { FaBoxes, FaShippingFast, FaShoppingCart, FaCreditCard , FaChartBar } from "react-icons/fa";



import React from 'react'

export default function LargeCards(){

    const orderStats = [
    {
        period: 'Pedidos de hoje',
        icons:<FaBoxes />,
        sales: 100,
        color: 'text-green-500',
        shadow:'shadow-lg '
    },
    {
        period: 'Pedidos de ontem',
        icons:<FaShippingFast />,       
        sales: 100,
        color: 'text-cyan-500',
        shadow:'shadow-lg '
    },
    {
        period: 'Este mês',
        icons:<FaShoppingCart/>,
        sales: 100,
        color: 'text-orange-500',
        shadow:'shadow-lg '
    },
    {
        period: 'Mês passado',
        icons:<FaCreditCard />,
        sales: 100,
        color: 'text-yellow-500',
        shadow:'shadow-lg '
    },
    {
      period: 'Total de Vendas',
      icons:<FaChartBar/>,
      sales: 100,
      color: 'text-red-500',
      shadow:'shadow-lg '
  },
]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
      {/* Cards*/}
      { orderStats.map((item, i) =>{

        return (
          <LargeCard className=""
            data={item}           
            key={i}
          />
        )
      })}
   
    </div>
  )
}


