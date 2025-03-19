import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestJson() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load users');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-xl font-semibold mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-6 w-100 ">
        {users.map((user) => (
          <div className="bg-gray-200 border rounded-lg shadow-md p-4" key={user.id}>
            <h1 className="text-xl font-bold text-gray-800">{user.id}</h1>
            <h2 className="text-lg text-gray-700 mt-2">{user.username}</h2>
            <h3 className="text-md text-gray-600 mt-2">{user.phone}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestJson;
