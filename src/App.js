import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/NavBar";
import Recetas from './components/pages/Recetas';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Categoria/:category" element={<ItemListContainer />} />
          <Route path="/Recetas" element={<Recetas />} />
          <Route path="/Detalle/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<div className='container404'>
            <img src="https://i.imgur.com/BirJ9jh.png" className="logo404 animate__animated animate__zoomIn animate__delay-2s" alt="logo" />
            <h3 className='titulo404 animate__animated animate__flipInX animate__delay-3s'> 404 - Página no encontrada </h3>
          </div>} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;

