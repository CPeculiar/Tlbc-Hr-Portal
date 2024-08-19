import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top Users</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">PHONE</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">CHURCH</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">ZONE</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">USAGE %</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#000000"/>
  <path d="M4 19C4 16.2386 7.58172 14 12 14C16.4183 14 20 16.2386 20 19V20H4V19Z" fill="#000000"/>
</svg>

                    <div className="text-gray-800 dark:text-gray-100">Pst Eloka Okeke</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">08064430141</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">TLBC ONITSHA</div>
                </td>
                <td className="p-2">
                  <div className="text-center">AWKA</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">55.7%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#000000"/>
  <path d="M4 19C4 16.2386 7.58172 14 12 14C16.4183 14 20 16.2386 20 19V20H4V19Z" fill="#000000"/>
</svg>
                    <div className="text-gray-800 dark:text-gray-100">Peculiar Chukwudi</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">07065649583</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">TLBC AWKA</div>
                </td>
                <td className="p-2">
                  <div className="text-center">AWKA</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">45.7%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#000000"/>
  <path d="M4 19C4 16.2386 7.58172 14 12 14C16.4183 14 20 16.2386 20 19V20H4V19Z" fill="#000000"/>
</svg>
                    <div className="text-gray-800 dark:text-gray-100">Ebenezer Nwolisa</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">09039675336</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">TLBC AWKA</div>
                </td>
                <td className="p-2">
                  <div className="text-center">AWKA</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">32.2%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#000000"/>
  <path d="M4 19C4 16.2386 7.58172 14 12 14C16.4183 14 20 16.2386 20 19V20H4V19Z" fill="#000000"/>
</svg>
                    <div className="text-gray-800 dark:text-gray-100">Chidiebere Chukwuemeka</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">08130913470</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">TLBC IHIALA</div>
                </td>
                <td className="p-2">
                  <div className="text-center">0WERRI</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">28%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#000000"/>
  <path d="M4 19C4 16.2386 7.58172 14 12 14C16.4183 14 20 16.2386 20 19V20H4V19Z" fill="#000000"/>
</svg>
                    <div className="text-gray-800 dark:text-gray-100">Ebuka Nwankwo</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">08142807853</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">TLBC EKWULOBIA</div>
                </td>
                <td className="p-2">
                  <div className="text-center">EKWULOBIA</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">25%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
