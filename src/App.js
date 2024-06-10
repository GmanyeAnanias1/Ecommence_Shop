import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category='men' />} />
          <Route path='/women' element={<ShopCategory category='women' />} />
          <Route path='/kids' element={<ShopCategory category='kids' />} />
          <Route path='/products' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
