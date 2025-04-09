import React, { useEffect, useState } from 'react'
import { overView,columns,data } from '../utils/dataTable'
import DataTable from 'react-data-table-component'
import axios from 'axios';
import EditUser from './EditUser';
import { AddUserModal } from './AddUser';

function Dashboard() {
    const [user, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [tableData, setTableData] = useState(data);
    const [showAddModal, setShowAddModal] = useState(false);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://67c81bc40acf98d07084dff5.mockapi.io/api/header/tet");
            setUsers(response.data);
            setTableData(response.data);
        } catch (err) {
            console.error("Error fetching users:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddUser = async (formData) => {
        try {
            setIsLoading(true);
            await axios.post("https://67c81bc40acf98d07084dff5.mockapi.io/api/header/tet", formData);
            await fetchUsers(); 
            setShowAddModal(false);
            alert("Add User Successfully");
        } catch (err) {
            console.error("Error adding user:", err);
            alert("Failed to add user");
        } finally {
            setIsLoading(false);
        }
    };

   
    return (
        <div className="min-h-screen bg-gray-50">
            <header className='flex justify-between shadow h-16 items-center px-6 bg-white'>
                <h1 className='font-bold text-2xl text-pink-800'>Dashboard</h1>
                <div className='flex items-center space-x-6'>
                    <div className='relative'>
                        <input
                            type="text"
                            className='border rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-500'
                            placeholder='Search...'
                        />
                        <img
                            className='absolute left-3 top-3'
                            src="src/asset/Search.png"
                            alt="Search"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src="src/asset/Bell 1.png" alt="Notifications" className="cursor-pointer" />
                        <img src="src/asset/Question 1.png" alt="Help" className="cursor-pointer" />
                        <img src="src/asset/Avatar 313.png" alt="Profile" className="cursor-pointer rounded-full" />
                    </div>
                </div>
            </header>

            <main className='p-6'>
                <div className='bg-white rounded-lg shadow p-6'>
                    <div className='flex items-center justify-between space-x-2 py-2 mb-6'>
                        <div className='flex items-center space-x-2'>
                            <img src="src/asset/dashbroad.png" alt="Dashboard" />
                            <p className='font-bold text-xl'>Overview</p>
                        </div>
                        <div className='flex space-x-3'>
                        <button 
                                className='bg-pink-500 text-white flex items-center justify-center rounded-md px-6 py-2 hover:bg-pink-600 transition-colors shadow-md'
                                onClick={() => setShowAddModal(true)}
                            >
                                <img src="src/asset/create.png" className='w-5 h-5 mr-2' alt="Add User" />
                                <span className='font-medium'>Add New User</span>
                            </button>
                            <button className='border border-pink-500 flex items-center justify-center rounded-md px-4 py-2 hover:bg-pink-50 transition-colors'>
                                <img src="src/asset/Download.png" className='w-5 h-5 mr-2' alt="Import" />
                                <span className='text-pink-500'>Import</span>
                            </button>
                            <button className='border border-pink-500 flex items-center justify-center rounded-md px-4 py-2 hover:bg-pink-50 transition-colors'>
                                <img src="src/asset/Move up.png" className='w-5 h-5 mr-2' alt="Export" />
                                <span className='text-pink-500'>Export</span>
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                        {overView.map((item, index) => (
                            <div key={item.id} className='bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h2 className='font-bold text-gray-700 mb-2'>{item.title}</h2>
                                        <p className='text-2xl font-bold text-gray-900'>{item.usd}</p>
                                        <p className='text-sm text-green-600 mt-1'>
                                            ↑ {item.inc} <span className='text-gray-500 font-semibold'>vs last period</span>
                                        </p>
                                    </div>
                                    <img src={`src/asset/Button ${1509 + index}.png`} alt="" className='w-12 h-12' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center space-x-2 py-4 border-t'>
                        <img src="src/asset/dashbroad.png" alt="Dashboard" />
                        <p className='font-bold text-xl'>Detail Report</p>
                    </div>
                    <EditUser/>

                    {showAddModal && (
                        <AddUserModal
                            onClose={() => setShowAddModal(false)}
                            onSave={handleAddUser}
                        />
                    )}


                    <div className="mt-4">
                        <DataTable
                            columns={columns}
                            data={tableData}
                            pagination
                            highlightOnHover
                            responsive
                            progressPending={isLoading}
                            progressComponent={<div className="text-center py-4">Loading...</div>}
                            selectableRows
                            fixedHeader
                            paginationPerPage={10}
                            paginationRowsPerPageOptions={[10, 25, 50, 100]}
                            customStyles={{
                                table: {
                                    style: {
                                        minHeight: '400px'
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard