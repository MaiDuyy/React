import React from 'react'
 import { Link } from 'react-router-dom'
import Dashboard from '../component/Dashboard'
 
 function LayoutAdmin() {
     return (


<div className='max-w-full mx-auto px-4 py-2'>
<div className='flex'>
    <div className='w-1/5 shadow px-2'>
        <img src="src/asset/Logo.png" alt="Logo" className="w-32 h-auto" />

        <div className='mt-2 space-y-2'>
        <div className='flex items-cente space-x-2   shadow-md rounded-lg py-2 px-2'>
                         <img src="src/asset/dashbroad.png" alt="" />
                         <p>Dashbroads</p>
                     </div>
                     <div className='flex items-cente space-x-2   shadow-md rounded-lg py-2 px-2'>
                         <img src="src/asset/Folder.png" alt="" />
                         <p>Projects</p>
                     </div>
                     <div className='flex items-cente space-x-2   shadow-md rounded-lg py-2 px-2'>
                         <img src="src/asset/Groups.png" alt="" />
                         <p>Teams</p>
                     </div>
                     <div className='flex items-cente space-x-2   shadow-md rounded-lg py-2 px-2'>
                         <img src="src/asset/Pie chart.png" alt="" />
                         <p>Analytics</p>
                     </div>
                     
                     <div className='flex items-cente space-x-2   shadow-md rounded-lg py-2 px-2'>
                         <img src="src/asset/Chat.png" alt="" />
                         <p>Messages</p>
                     </div>
 
 
                     <div className='flex items-cente space-x-2   shadow-md rounded-lg py-2 px-2'>
                         <img src="src/asset/Code.png" alt="" />
                         <p>Integrations</p>
                     </div>
        </div>

        <div className='flex items-center justify-center mt-10'>
            <div className='bg-blue-100 p-5 mb-2 rounded-lg w-full'>
                <img src="src/asset/Group.png" alt="Group" className='w-full h-auto mb-2' />
                <button className='w-full py-2 rounded-md bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 transition-colors duration-200 font-semibold'>
                    Try now
                </button>
            </div>
        </div>
    </div>

    <div className='w-4/5'>
    <Dashboard/>
    </div>
</div>
</div>
     )
 }
 
 export default LayoutAdmin