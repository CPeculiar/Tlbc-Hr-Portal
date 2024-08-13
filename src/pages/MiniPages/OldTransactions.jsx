import React from 'react';

const UserTransactionTable = () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      transactionId: 'TXN001',
      amount: '$120.00',
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '987-654-3210',
      transactionId: 'TXN002',
      amount: '$250.00',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '555-444-3333',
      transactionId: 'TXN003',
      amount: '$300.00',
      status: 'Failed',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">User Transactions</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Transaction ID</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {users.map(user => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <span>{user.email}</span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <span>{user.phone}</span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <span>{user.transactionId}</span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <span>{user.amount}</span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <span className={`py-1 px-3 rounded-full text-xs ${
                      user.status === 'Completed'
                        ? 'bg-green-200 text-green-700'
                        : user.status === 'Pending'
                        ? 'bg-yellow-200 text-yellow-700'
                        : 'bg-red-200 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTransactionTable;
