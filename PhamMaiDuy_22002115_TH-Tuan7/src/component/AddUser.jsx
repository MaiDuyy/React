import { useState } from "react";


export const  AddUserModal = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
      name: '',
      company: '',
      value: '',
      date: '',
      status: 'New',
      img: 'src/asset/default-avatar.png'
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.company || !formData.value || !formData.date || !formData.status) {
        alert('Please fill in all required fields');
        return;
      }
      const dataToSubmit = {
        ...formData,
        value: parseInt(formData.value)
      };
      onSave(dataToSubmit);
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-96">
          <h3 className="text-lg font-semibold mb-4">Add New User</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company *</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Value *</label>
                <input
                  type="number"
                  value={formData.value}
                  onChange={(e) => setFormData({...formData, value: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  min="0"
                  placeholder="Enter order value"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date *</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  placeholder="DD/MM/YYYY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status *</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };