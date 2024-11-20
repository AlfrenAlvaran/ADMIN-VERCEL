import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Shop from './pages/Shop/Shop';
import Account from './pages/Account/Account';
import Compare from './pages/Compare/Compare';
import LoginSignUp from './pages/LoginSignUp/LoginSignUp';
import WishList from './pages/WishList/WishList';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/shop/*' element={<Shop />} />
          <Route path='/shop/product/:_id' element={<Product />} />
          <Route path='/accounts' element={<Account />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:_id' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
