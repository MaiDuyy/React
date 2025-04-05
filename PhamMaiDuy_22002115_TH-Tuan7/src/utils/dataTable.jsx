export const columns = [
  // {
  //   name: <input type="checkbox" />,
  //   selector: row => row.check,
  //   cell: row => <input type="checkbox" checked={row.check} onChange={() => {}} />,
  //   width: '60px'
  // },
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
    sortable: true
  },
  {
    name: 'COMPANY',
    selector: row => row.company,
    sortable: true
  },
  {
    name: 'ORDER VALUE',
    selector: row => row.value,
    cell: row => `$${row.value.toLocaleString()}`,
    sortable: true,
    right: true
  },
  {
    name: 'ORDER DATE',
    selector: row => row.date,
    sortable: true
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
    sortable: true
  },
  {
    name: '',
    cell: row => (
      <button className="text-blue-500 hover:text-blue-700 p-1">
        <img 
          src="src/asset/create.png" 
          alt="Edit" 
          className="w-5 h-5"
          title="Edit"
        />
      </button>
    ),
    width: '80px'
  }
];

export const data = [
  {
    id: 1,
    check: false,
    img: "src/asset/Avatar (1).png",
    name: "Elizabeth Lee",
    company: "AvatarSystems",
    value: 359,
    date: "10/07/2023",
    status: "New"
  },
  {
    id: 2,
    check: false,
    img: "src/asset/Avatar (2).png",
    name: "Carlos Garcia",
    company: "SmcozeShift",
    value: 747,
    date: "24/07/2023",
    status: "New"
  },
  {
    id: 3,
    check: false,
    img: "src/asset/Avatar (3).png",
    name: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    value: 654,
    date: "08/08/2023",
    status: "In-progress"
  },
  {
    id: 4,
    check: false,
    img: "src/asset/Avatar (4).png",
    name: "Ryan Brown",
    company: "OmnTech Corporation",
    value: 541,
    date: "31/08/2023",
    status: "In-progress"
  },
  {
    id: 5,
    check: false,
    img: "src/asset/Avatar (5).png",
    name: "Ryan Young",
    company: "DataStream Inc.",
    value: 769,
    date: "01/05/2023",
    status: "Completed"
  },
  {
    id: 6,
    check: false,
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
    id:1 , 
    usd: "$92,402", 
    inc  : "5.39%"
  },
  {
    id:3 , 
    usd: "$32,218", 
    inc  : "5.39%"
  },
  {
    id:3 , 
    usd: "$298", 
    inc  : "6.84%"
  },
];