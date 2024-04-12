import Heading from '@/components/backoffice/Heading';
import LargeCards from '@/components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';
import DashboardCharts from '@/components/backoffice/DashboardCharts';

export default function page(){
  return (
    <div className=''>
      <Heading title="Dashboard  Overview"/>
      {/* Large Cards */}
      <LargeCards/>
      {/* Small cards*/}
      <SmallCards/>
      {/* Charts */} 
      <DashboardCharts/>
      {/* Recent Ordes Table*/}  
    </div>
  )
}
