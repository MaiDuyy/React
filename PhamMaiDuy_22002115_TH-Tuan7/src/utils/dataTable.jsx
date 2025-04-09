import { CircleX } from "lucide-react";
import { useState } from "react";

export const columns = [
  {
    name: 'CUSTOMER NAME',
    selector: row => row.name,
    cell: row => (
      <div className="flex items-center">
        <img 
          src={row.img || 'src/asset/default-avatar.png'} 
          alt={row.name} 
          className="w-8 h-8 rounded-full mr-3"
        />
        <span>{row.name}</span>
      </div>
    ),
    sortable: true,
    grow: 2
  },
  {
    name: 'COMPANY',
    selector: row => row.company,
    sortable: true,
    grow: 1
  },
  {
    name: 'ORDER VALUE',
    selector: row => row.value,
    cell: row => `$${row.value.toLocaleString()}`,
    sortable: true,
    right: true,
    grow: 1
  },
  {
    name: 'ORDER DATE',
    selector: row => row.date,
    sortable: true,
    grow: 1
  },
  {
    name: 'STATUS',
    selector: row => row.status,
    cell: row => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        row.status === 'Completed' ? 'bg-green-100 text-green-800' :
        row.status === 'In-progress' ? 'bg-yellow-100 text-yellow-800' :
        'bg-blue-100 text-blue-800'
      }`}>
        {row.status}
      </span>
    ),
    sortable: true,
    grow: 1
  },
  {
    name: 'ACTIONS',
    cell: row => {
      const [showModal, setShowModal] = useState(false);

      const handleSave = async (formData) => {
        try {
          await axios.put(`https://67c81bc40acf98d07084dff5.mockapi.io/api/header/tet/${row.id}`, formData);
          const response = await axios.get("https://67c81bc40acf98d07084dff5.mockapi.io/api/header/tet");
          data.splice(0, data.length, ...response.data);
          setShowModal(false);
        } catch (err) {
          console.error("Error updating item:", err);
          alert("Failed to update item");
        }
      };

      return (
        <div className="flex space-x-2">
          <button 
            className="text-blue-500 hover:text-blue-700 p-1"
            onClick={() => setShowModal(true)}
            title="Edit"
          >
            <img 
              src="src/asset/create.png" 
              alt="Edit" 
              className="w-5 h-5"
            />
          </button>
          <button 
            className="text-red-500 hover:text-red-700 p-1"
            onClick={async () => {
              if (window.confirm('Are you sure you want to delete this item?')) {
                try {
                  await axios.delete(`c${row.id}`);
                  const response = await axios.get("https://67c81bc40acf98d07084dff5.mockapi.io/api/header/tet");
                  data.splice(0, data.length, ...response.data);
                } catch (err) {
                  console.error("Error deleting item:", err);
                  alert("Failed to delete item");
                }
              }
            }}
            title="Delete"
          >
            <CircleX />
          </button>
          {showModal && (
            <EditModal
              row={row}
              onClose={() => setShowModal(false)}
              onSave={handleSave}
            />
          )}
        </div>
      );
    },
    width: '150px',
    ignoreRowClick: true
  }
];

export const data = [
  {
    id: 1,
    img: "src/asset/Avatar (1).png",
    name: "Elizabeth Lee",
    company: "AvatarSystems",
    value: 359,
    date: "10/07/2023",
    status: "New"
  },
  {
    id: 2,
    img: "src/asset/Avatar (2).png",
    name: "Carlos Garcia",
    company: "SmcozeShift",
    value: 747,
    date: "24/07/2023",
    status: "New"
  },
  {
    id: 3,
    img: "src/asset/Avatar (3).png",
    name: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    value: 654,
    date: "08/08/2023",
    status: "In-progress"
  },
  {
    id: 4,
    img: "src/asset/Avatar (4).png",
    name: "Ryan Brown",
    company: "OmnTech Corporation",
    value: 541,
    date: "31/08/2023",
    status: "In-progress"
  },
  {
    id: 5,
    img: "src/asset/Avatar (5).png",
    name: "Ryan Young",
    company: "DataStream Inc.",
    value: 769,
    date: "01/05/2023",
    status: "Completed"
  },
  {
    id: 6,
    img: "src/asset/Avatar.png",
    name: "Hailey Adams",
    company: "FlowRush",
    value: 922,
    date: "10/06/2023",
    status: "Completed"
  }
];


export const overView = [
  {
    id: 1,
    title: "Turnover",
    usd: "$92,402",
    inc: "5.39%",
    img: "src/asset/Button 1509.png"
  },
  {
    id: 2,
    title: "Profit",
    usd: "$32,218",
    inc: "5.39%",
    img: "src/asset/Button 1510.png"
  },
  {
    id: 3,
    title: "New Customers",
    usd: "$298",
    inc: "6.84%",
    img: "src/asset/Button 1511.png"
  }
];