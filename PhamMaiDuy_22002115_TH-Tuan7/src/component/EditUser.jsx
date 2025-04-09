import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function EditUser() {

    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        company: '',
        value: '',
        date: '',
        status: ''
    });

    const handleUpdate = async () => {
        try {
            setIsLoading(true);
            await axios.put(`https://67c81bc40acf98d07084dff5.mockapi.io/api/header/tet/${editingId}`, editForm);
            
            
            setUsers(prevUsers => 
                prevUsers.map(user => 
                    user.id === editingId ? { ...user, ...editForm } : user
                )
            );
            setTableData(prevData => 
                prevData.map(item => 
                    item.id === editingId ? { ...item, ...editForm } : item
                )
            );
            
            setEditingId(null);
            setEditForm({
                name: '',
                company: '',
                value: '',
                date: '',
                status: ''
            });
        } catch (err) {
            console.error("Error updating user:", err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleCancelEdit = () => {
        setEditingId(null);
        setEditForm({
            name: '',
            company: '',
            value: '',
            date: '',
            status: ''
        });
    };
  return (
 <>
   {editingId && (
                        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Edit User</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={editForm.name}
                                    onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                                    className="border rounded px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={editForm.company}
                                    onChange={(e) => setEditForm({...editForm, company: e.target.value})}
                                    className="border rounded px-3 py-2"
                                />
                                <input
                                    type="number"
                                    placeholder="Value"
                                    value={editForm.value}
                                    onChange={(e) => setEditForm({...editForm, value: e.target.value})}
                                    className="border rounded px-3 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Date"
                                    value={editForm.date}
                                    onChange={(e) => setEditForm({...editForm, date: e.target.value})}
                                    className="border rounded px-3 py-2"
                                />
                                <select
                                    value={editForm.status}
                                    onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                                    className="border rounded px-3 py-2"
                                >
                                    <option value="">Select Status</option>
                                    <option value="New">New</option>
                                    <option value="In-progress">In-progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="mt-4 flex space-x-2">
                                <button
                                    onClick={handleUpdate}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={handleCancelEdit}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}</>
  )
}

export default EditUser