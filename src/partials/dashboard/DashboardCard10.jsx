import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function DashboardCard10() {

  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Michelle Okonkwo',
      phone: '09013550819',
      dob: 'Aug 18',
      church: 'TLBC Awka',
    },
    {
      id: '1',
      image: Image02,
      name: 'Collins Nwokozor ',
      phone: '08130543765',
      dob: 'Aug25',
      church: 'TLBC Awka',
    },
    {
      id: '2',
      image: Image03,
      name: 'Michael Mmaduburum',
      phone: '09021098669',
      dob: 'Sept 14',
      church: 'TLBC Ihiala',
    },
    {
      id: '3',
      image: Image04,
      name: 'Amaka Aham',
     phone: '09067493068',
      dob: 'Sept 24',
      church: 'TLBC Awka',
    },
    {
      id: '4',
      image: Image05,
      name: 'Mmesoma Azegba',
      phone: '08105606440',
      dob: 'Sept 30',
      church: 'TLBC Ekwulobia',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Upcoming Birthdays</h2>
      </header>      
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Phone</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Church</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Dob</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-gray-800 dark:text-gray-100">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.phone}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.church}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-sm text-center">{customer.dob}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
