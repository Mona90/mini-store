import { useState, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Category from './pages/Category';
import { Route, Routes } from 'react-router-dom';
import PDP from './pages/PDP/PDP';
import Cart from './pages/cart/Cart';

export const productsData = createContext([]);

function App() {
  const [data, setData] = useState([])

  return (
    <productsData.Provider value={{data, setData}}>
        <Header/>
        <Routes>
            <Route index  path="/"  element={<Category/>}/>
            <Route path="/PDP/:id" element={<PDP/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Routes>
    </productsData.Provider>

  );
}

export default App;
