import React, { useState } from 'react';

import DashboardCard01 from './DashboardCard01'
import DashboardCard02 from './DashboardCard02'
import DashboardCard03 from './DashboardCard03'
import DashboardCard04 from './DashboardCard04'
import DashboardCard05 from './DashboardCard05'
import DashboardCard06 from './DashboardCard06'
import DashboardCard07 from './DashboardCard07'
import DashboardCard10 from './DashboardCard10'
import DashboardCard11 from './DashboardCard11'
import Sidebar from '../Sidebar';
import Header from '../Header';

function DashboardCharts() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
     <div className="flex h-screen overflow-hidden">

{/* Sidebar */}
<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

{/* Content area */}
<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

  {/*  Site header */}
  <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

  <main className="grow">
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">

        
        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

</div>
<div className="grid grid-cols-12 gap-6">

{/* Line chart (Acme Plus) */}
<DashboardCard03 />
{/* Bar chart (Direct vs Indirect) */}
<DashboardCard04 />
{/* Line chart (Real Time Value) */}
<DashboardCard05 />
{/* Doughnut chart (Top Countries) */}
<DashboardCard06 />
{/* Table (Top Channels) */}
<DashboardCard07 />
{/* Line chart (Sales Over Time) */}
<DashboardCard10 />
<DashboardCard01 />
{/* Line chart (Acme Advanced) */}
<DashboardCard02 />
{/* Line chart (Acme Professional) */}

{/* Card (Reasons for Refunds) */}
<DashboardCard11 />
{/* Card (Recent Activity) */}
</div>

</div>
</div>

</main>



</div>


</div>
    </div>
    
    
  )
}

export default DashboardCharts