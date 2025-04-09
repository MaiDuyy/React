import React from 'react'
 import { Link } from 'react-router-dom'
 
 function LayoutAdmin() {
     return (
         <div className='max-W-7xl mx-auto px-4 py-2 text-center'>
 
 
 
             <div className='grid grid-cols-1 md:grid-cols-3  '>
                 
                 <div className=' md:cols-span-1 col-span-1  border '>
                     <img src="src/asset/Logo.png" alt="" />
 
 
                    <div className=' mt-2'>
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
                        <div>
                        <img src="src/asset/Group.png" alt="" />
                         <button className=' w-full '>
                             Try now
                         </button>
                        </div>
                     </div>
          
                 </div>
 
 
                 <div className='md:cols-span-3 col-span-2 border '>
                     <header className='flex justify-between shadow h-12 items-center'>
                         <h1 className='font-bold text-2xl text-pink-800'>Dashboard</h1>     
                         <div className='flex items-center space-x-2'>
                            <div className='flex justify-between' >
                            <input type="text" name="" id=""  className='border rounded-lg px-7' placeholder='Search...'/>
                            <img className='flex absolute mt-1 mx-2 ' src="src/asset/Search.png" alt="" />
                            </div>
                             <img src="src/asset/Bell 1.png" alt="" />
                             <img src="src/asset/Question 1.png" alt="" />
                             <img src="src/asset/Avatar 313.png" alt="" />
                         </div>
 
                     </header>
                     <main>
                         <div>
                         <div className='flex items-center space-x-2    py-2 px-2'>
                         <img src="src/asset/dashbroad.png" alt="" />
                         <p>OversView</p>
                         </div>
                         </div>
 
                         <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-6'>
 
                             <div className='bg-pink-100 rounded-lg h-20'>
                                     <h1 className=' w-10 px-2 font-bold'>Turnover</h1>
 
 
                                    
                             </div> 
 
                             <div className='bg-blue-100 rounded-lg h-20'>
                                     <h1 className=' w-10 px-2 font-bold'>Profit</h1>
 
                                    
                             </div>
                             <div className='bg-blue-100 rounded-lg h-20'>
                                     <h1  className=' w-50 px-2 font-bold'>New customer</h1>
 
                                    
                             </div>
                         </div>
 
                         <div>
                         <div className='flex items-center space-x-2    py-2 px-2'>
                         <img src="src/asset/dashbroad.png" alt="" />
                         <p>DetailReport</p>
 
 
                         </div>
 
                             
                         </div>
 
                     </main>
                     <footer>adsf</footer>
                 </div>
             </div>
 
         </div>
     )
 }
 
 export default LayoutAdmin