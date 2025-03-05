import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://67c81bc40acf98d07084dff5.mockapi.io/api/header/tet')
      .then(response => setProduct(response.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-12">
        <div> 
          
          <div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         
          {product.map((products) => (
            <div key={products.name} className="bg-white border shadow-md rounded-lg p-4">
              <img src={products.img} alt={products.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <label className="block text-xl font-semibold mb-2">{products.name}</label>
              <p className="text-gray-600">{products.description || '15 minute'}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
