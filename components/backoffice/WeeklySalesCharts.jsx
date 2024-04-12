"use client"
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';




export default function WeeklySalesCharts(){
    const[charTodDisplay,setChartDisplay] = useState("vendas")

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
    
    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro','Novembro', 'Dezembro',];
    const tabs =[
        {

            title:"Vendas",
            type:"vendas",
            data:{
                labels,
                datasets: [
                  {
                    label: 'Vendas',
                    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  }
                ]
                           
              }
        },
        {
            title:"Pedidos",
            type:"pedidos",
            data:{
                labels,
                datasets: [                
                {
                    label: 'Pedidos',
                    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                 },
                ],
              }
        }
    ]
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };
 
 


 
  return (
    <div className='shadow border rounded-xl p-9'>
    <h2 className='text-xl font-semibold'>Vendas Semanais</h2>
     {/* Chart */}
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
            {tabs.map((tab, i) =>{
                return(
                    <li class="me-2" key={i}>
                    <button onClick={()=>setChartDisplay(tab.type)} className={charTodDisplay===tab.type?
                    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500":"inline-block p-4 text-gray-400 border-b-2 border-gray-200 rounded-t-lg active dark:text-gray-500 dark:border-gray-500"}>{tab.title}</button>
                    </li>
                )
            })}                  
        </ul>    
    </div>
        {/* Conteúdo a ser exibido*/}
        {
            tabs.map((tab,i) =>{
                if(charTodDisplay===tab.type){
                    return(
                        <Line options={options} data={tab.data} />
                    )
                }
                return null
            })
        }
    </div>
  )
}


