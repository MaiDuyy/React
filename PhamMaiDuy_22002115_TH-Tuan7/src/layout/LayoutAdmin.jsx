import React from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { data, columns, overView } from '../utils/dataTable'
function LayoutAdmin() {
    return (
        <div className='max-w-full mx-auto px-4 py-2'>
            <div className='flex'>

                <div className='w-1/5  shadow px-2'>
                    <img src="src/asset/Logo.png" alt="" />

                    <div className='mt-2'>
                        <div className='flex items-center space-x-2 shadow-md rounded-lg py-2 px-2'>
                            <img src="src/asset/dashbroad.png" alt="" />
                            <p>Dashbroads</p>
                        </div>
                        <div className='flex items-center space-x-2 shadow-md rounded-lg py-2 px-2'>
                            <img src="src/asset/Folder.png" alt="" />
                            <p>Projects</p>
                        </div>
                        <div className='flex items-center space-x-2 shadow-md rounded-lg py-2 px-2'>
                            <img src="src/asset/Groups.png" alt="" />
                            <p>Teams</p>
                        </div>
                        <div className='flex items-center space-x-2 shadow-md rounded-lg py-2 px-2'>
                            <img src="src/asset/Pie chart.png" alt="" />
                            <p>Analytics</p>
                        </div>
                        <div className='flex items-center space-x-2 shadow-md rounded-lg py-2 px-2'>
                            <img src="src/asset/Chat.png" alt="" />
                            <p>Messages</p>
                        </div>
                        <div className='flex items-center space-x-2 shadow-md rounded-lg py-2 px-2'>
                            <img src="src/asset/Code.png" alt="" />
                            <p>Integrations</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-10'>
                        <div className='bg-blue-100 p-5 mb-2 ' >
                            <img src="src/asset/Group.png" alt="" className=' ' />
                            <button className='w-full mt-2 py-1 rounded-md bg-white text-blue-200  border-blue-100'>Try now</button>
                        </div>
                    </div>
                </div>


                <div className='w-4/5 '>
                    <header className='flex justify-between shadow h-12 items-center px-4'>
                        <h1 className='font-bold text-2xl text-pink-800'>Dashboard</h1>
                        <div className='flex items-center space-x-4'>
                            <div className='relative'>
                                <input
                                    type="text"
                                    className='border rounded-lg pl-8 pr-2 py-1'
                                    placeholder='Search...'
                                />
                                <img
                                    className='absolute left-2 top-2'
                                    src="src/asset/Search.png"
                                    alt=""
                                />
                            </div>
                            <img src="src/asset/Bell 1.png" alt="" />
                            <img src="src/asset/Question 1.png" alt="" />
                            <img src="src/asset/Avatar 313.png" alt="" />
                        </div>
                    </header>

                    <main className='p-4 shadow'>
                        <div className='flex items-center justify-between space-x-2 py-2'>
                            <div className='flex items-center space-x-2'>
                                <img src="src/asset/dashbroad.png" alt="" />
                                <p className='font-bold text-xl'>Overview</p>
                            </div>
                            <div className='flex space-x-2 px-2'>
                                <div className='border border-pink-500 flex items-center justify-center rounded-md px-4 py-2 relative'>
                                    <img src="src/asset/Download.png" className='absolute left-2 w-5 h-5' alt="" />
                                    <button className='pl-6 text-pink-500'>Import</button>
                                </div>
                                <div className='border border-pink-500 flex items-center justify-center rounded-md px-4 py-2 relative'>
                                    <img src="src/asset/Move up.png" className='absolute left-2 w-5 h-5' alt="" />
                                    <button className='pl-6 text-pink-500'>Export</button>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-6 '>
                            <div className='bg-pink-100 rounded-lg p-4 space-y-2 relative '>
                                <img src="src/asset/Button 1509.png" className='absolute right-4 ' alt="" />
                                <h1 className='font-bold'>Turnover</h1>
                                <p className='text-2xl font-bold'>{overView[0].usd}</p>
                                <p className='text-sm text-green-600'>↑ {overView[0].inc}  <span className='text-gray-500 font-semibold'>prerod of change</span></p>
                            </div>
                            <div className='bg-blue-100 rounded-lg p-4 space-y-2 relative'>
                            <img src="src/asset/Button 1529.png" className='absolute right-4 ' alt="" />
                                <h1 className='font-bold'>Profit</h1>
                                <p className='text-2xl font-bold'>{overView[1].usd}</p>
                                <p className='text-sm text-green-600'>↑ {overView[1].inc}  <span className='text-gray-500 font-semibold'>prerod of change</span></p>
                            </div>
                            <div className='bg-blue-100 rounded-lg p-4 space-y-2 relative'>
                            <img src="src/asset/Button 1530.png" className='absolute right-4 ' alt="" />
                                <h1 className='font-bold'>New Customers</h1>
                                <p className='text-2xl font-bold'>{overView[2].usd}</p>
                                <p className='text-sm text-green-600'>↑ {overView[2].inc} <span className='text-gray-500 font-semibold'>prerod of change</span> </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-2 py-2'>

                            <img src="src/asset/dashbroad.png" alt="" />
                            <p className='font-bold text-xl'>Detail Report</p>

                        </div>

                        <div className="mt-4  border rounded-lg">
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                                highlightOnHover
                                responsive
                                subHeaderComponent
                                selectableRows
                                fixedHeader
                            />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin