import React from 'react'

function Header() {
    return (
        <header className='bg-white shadow-md'>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className='flex items-center'>
                    <a href="/"> 
                        <img src="../asset/logo.png" alt="Logo" />
                    </a>
                    <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input 
                            type="search" 
                            id="default-search" 
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Salad" 
                            required 
                        />
                    </div>
                </form>
                </div>

                

                <nav className='hidden md:flex space-x-8'>
                    <a href="/" className='text-gray-800 hover:text-gray-600 font-medium'>What to cook</a>
                    <a href="/" className='text-gray-800 hover:text-gray-600 font-medium'>Recipes</a>
                    <a href="/" className='text-gray-800 hover:text-gray-600 font-medium'>Ingredients</a>
                    <a href="/" className='text-gray-800 hover:text-gray-600 font-medium'>Occasions</a>
                    <a href="/" className='text-gray-800 hover:text-gray-600 font-medium'>About Us</a>
                </nav>

                <div className='flex items-center gap-4'>
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Your Recipe Box</button>
                    <a href="/">
                        <img className='w-10 h-10 rounded-full' src="../asset/avata.png" alt="Profile" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
