import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function LayoutAdmin() {
    return (
        <div className='max-w-full mx-auto px-4 py-2'>
            <div className='flex'>
                <div className='w-1/5 shadow px-2'>
                    <img src="src/asset/Logo.png" alt="Logo" className="w-32 h-auto" />

                    <div className='mt-2 space-y-2'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `group flex items-center space-x-2 shadow-md rounded-lg py-2 px-2 duration-200 font-semibold
                                ${isActive ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'}`
                            }
                        >
                            <img
                                src="src/asset/dashbroad.png"
                                alt="Dashboard"
                                className="transition duration-200 group-hover:invert group-hover:brightness-0"
                            />
                            <p>Dashboards</p>
                        </NavLink>

                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `group flex items-center space-x-2 shadow-md rounded-lg py-2 px-2 duration-200 font-semibold
                                ${isActive ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'}`
                            }
                        >
                            <img
                                src="src/asset/Folder.png"
                                alt="Projects"
                                className="transition duration-200 group-hover:invert group-hover:brightness-0"
                            />
                            <p>Projects</p>
                        </NavLink>

                        <NavLink
                            to="/teams"
                            className={({ isActive }) =>
                                `group flex items-center space-x-2 shadow-md rounded-lg py-2 px-2 duration-200 font-semibold
                                ${isActive ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'}`
                            }
                        >
                            <img
                                src="src/asset/Groups.png"
                                alt="Teams"
                                className="transition duration-200 group-hover:invert group-hover:brightness-0"
                            />
                            <p>Teams</p>
                        </NavLink>

                        <NavLink
                            to="/analytics"
                            className={({ isActive }) =>
                                `group flex items-center space-x-2 shadow-md rounded-lg py-2 px-2 duration-200 font-semibold
                                ${isActive ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'}`
                            }
                        >
                            <img
                                src="src/asset/Pie chart.png"
                                alt="Analytics"
                                className="transition duration-200 group-hover:invert group-hover:brightness-0"
                            />
                            <p>Analytics</p>
                        </NavLink>

                        <NavLink
                            to="/messages"
                            className={({ isActive }) =>
                                `group flex items-center space-x-2 shadow-md rounded-lg py-2 px-2 duration-200 font-semibold
                                ${isActive ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'}`
                            }
                        >
                            <img
                                src="src/asset/Chat.png"
                                alt="Messages"
                                className="transition duration-200 group-hover:invert group-hover:brightness-0"
                            />
                            <p>Messages</p>
                        </NavLink>

                        <NavLink
                            to="/integrations"
                            className={({ isActive }) =>
                                `group flex items-center space-x-2 shadow-md rounded-lg py-2 px-2 duration-200 font-semibold
                                ${isActive ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'}`
                            }
                        >
                            <img
                                src="src/asset/Code.png"
                                alt="Integrations"
                                className="transition duration-200 group-hover:invert group-hover:brightness-0"
                            />
                            <p>Integrations</p>
                        </NavLink>
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
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin