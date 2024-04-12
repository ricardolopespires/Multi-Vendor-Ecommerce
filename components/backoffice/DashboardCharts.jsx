import WeeklySalesCharts from './WeeklySalesCharts'
import BestSellingProductsCharts from './BestSellingProductsCharts'

import React from 'react'

export default function DashboardCharts(){
  return (
    <div className='grid grid-cols-1  lg:grid-cols-2 mt-10 gap-4'>
        <WeeklySalesCharts />
        <BestSellingProductsCharts />      
    </div>
  )
}

