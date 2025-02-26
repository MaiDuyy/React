import { useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
 


  return (
    <>
    <Header/>
   <div className='container mx-auto px-6 py-12'>
    <img src="../asset/container.png" alt="" />
   </div>
   <Footer/>
     </>
  );
}

export default App;
