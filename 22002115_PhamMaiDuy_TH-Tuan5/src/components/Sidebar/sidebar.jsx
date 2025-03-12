import React from 'react';
import { Menu } from 'lucide-react';
const Sidebar = () => {
  return (
    <aside className="md:w-1/4 p-4 bg-white-100 h-150 border rounded-xl">
      <div className="flex flex-auto items-center mb-6">
        <Menu />
        <p className="text-lg font-semibold ml-2">FILTERS</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Type</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox accent-pink-500" />
            <span className="ml-2">Pan-fried</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox accent-pink-500" />
            <span className="ml-2">Stir-fried</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox accent-pink-500" checked />
            <span className="ml-2">Grilled</span>
          </label>
         
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Time</h3>
        <div className="space-y-8 flex justify-between ">
          <span>30 minutes</span>
          <span>50 minutes</span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Rating</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="rating" className="form-radio accent-pink-500" />
            <span className="ml-2">★★★★☆☆☆</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="rating" className="form-radio accent-pink-500" />
            <span className="ml-2">★★★★☆☆☆</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="rating" className="form-radio accent-pink-500"  checked />
            <span className="ml-2">★★★☆☆☆☆</span>
          </label>
    
        </div>
      </div>
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded w-full">Apply</button>
    </aside>
  );
};

export default Sidebar;