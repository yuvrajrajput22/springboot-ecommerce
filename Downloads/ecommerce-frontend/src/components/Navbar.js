 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');
  const [searchVal, setSearchVal] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <>
      <div className="bg-neutral-900 text-neutral-100 text-center py-2.5 text-[11px] font-medium tracking-[0.2em] uppercase">
        Free delivery on orders above ₹499 &nbsp;·&nbsp; Use code{' '}
        <span className="font-semibold underline underline-offset-2">SHOPEASY10</span>{' '}
        for 10% off
      </div>

      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 flex items-center gap-10 h-16">

          <Link to="/" className="flex-shrink-0 no-underline">
            <Logo height={30} />
          </Link>

          <div className="flex-1 relative">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search products, brands and more"
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-100 border border-transparent rounded-md text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-300 transition"
            />
          </div>

          <div className="flex items-center gap-7 flex-shrink-0">
            {token ? (
              <>
                <button
                  onClick={handleLogout}
                  className="flex flex-col items-center gap-1 group bg-transparent border-none cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-white text-xs font-semibold">
                    {email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium group-hover:text-neutral-900 transition">
                    Logout
                  </span>
                </button>

                <Link to="/wishlist" className="flex flex-col items-center gap-1 group no-underline">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.6"
                    className="text-neutral-700 group-hover:text-neutral-900 transition">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span className="text-[11px] text-neutral-500 font-medium group-hover:text-neutral-900 transition">
                    Wishlist
                  </span>
                </Link>

                <Link to="/cart" className="flex flex-col items-center gap-1 group no-underline">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.6"
                    className="text-neutral-700 group-hover:text-neutral-900 transition">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span className="text-[11px] text-neutral-500 font-medium group-hover:text-neutral-900 transition">
                    Bag
                  </span>
                </Link>

                <Link to="/orders" className="flex flex-col items-center gap-1 group no-underline">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.6"
                    className="text-neutral-700 group-hover:text-neutral-900 transition">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8m-4-4v4" />
                  </svg>
                  <span className="text-[11px] text-neutral-500 font-medium group-hover:text-neutral-900 transition">
                    Orders
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login"
                  className="border border-neutral-300 text-neutral-900 px-6 py-2 text-xs font-semibold tracking-wider uppercase hover:border-neutral-900 transition no-underline rounded-md">
                  Login
                </Link>
                <Link to="/register"
                  className="bg-neutral-900 text-white px-6 py-2 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-700 transition no-underline rounded-md">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {token && (
          <div className="border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-8 flex items-center gap-9 h-11 overflow-x-auto scrollbar-none">
              {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Electronics', 'Mobile'].map(cat => (
                <span
                  key={cat}
                  className="text-[13px] font-medium text-neutral-500 hover:text-neutral-900 cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-neutral-900 pb-0.5 transition-all">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;