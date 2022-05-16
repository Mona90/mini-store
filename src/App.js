import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <>
        <Routes>
            <Route index  path="/"  element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Routes>
    </>

  );
}

export default App;


