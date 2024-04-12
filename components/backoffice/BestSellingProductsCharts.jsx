"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from 'react'


ChartJS.register(ArcElement, Tooltip, Legend);


export default function BestSellingProductsCharts(){
    
const data = {
    labels: ['Green Lettuce', 'Rainbow Chard', 'Clementine', 'Maize', 'Parsley', 'Orange'],
    datasets: [
      {
        label: '# Pedidos',
        data: [125, 199, 43, 56, 278, 43],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className='shadow border rounded-xl p-9'>
      <h2 className='text-xl font-semibold'>Mais Vendidos</h2>
      {/* Chart */}
     <div className='h-[400px]  w-full flex items-center justify-center'>
     <Pie data={data} />;
     </div>
    </div>
  )
}


