import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

const HIDE_NAVBAR_ROUTES = ['/login', '/register'];

const Layout = () => {
  const location = useLocation();
  const hideNavbar = HIDE_NAVBAR_ROUTES.includes(location.pathname.toLowerCase());

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;