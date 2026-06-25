 import React, { useState, useEffect } from 'react';
import { getCart, removeFromCart, placeOrder } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { resolveProductImage } from '../utils/seedProducts';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) { navigate('/login'); return; }
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await getCart(userId);
      setCartItems(response.data);
    } catch {
      console.error('Error fetching cart');
    } finally {
      setLoading(false);
    }
  };

  const showMsg = (text, type = 'success') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(''), 2500);
  };

  const handleRemove = async (cartId) => {
    try {
      await removeFromCart(cartId);
      setCartItems(cartItems.filter(item => item.id !== cartId));
      showMsg('Item removed from bag');
    } catch {
      showMsg('Could not remove item', 'error');
    }
  };

  const handlePlaceOrder = async (item) => {
    try {
      await placeOrder(userId, item.product.id, item.quantity);
      await removeFromCart(item.id);
      setCartItems(cartItems.filter(c => c.id !== item.id));
      showMsg('Order placed successfully');
    } catch {
      showMsg('Could not place order', 'error');
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const delivery = total >= 499 ? 0 : 49;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-neutral-400 mt-4 font-medium tracking-wide">Loading your bag...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <h1 className="text-xl font-semibold text-neutral-900 tracking-tight">My Bag</h1>
          <p className="text-sm text-neutral-400 mt-0.5 font-medium">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8">
        {message && (
          <div className={`mb-6 px-4 py-3 text-sm font-medium border rounded-md ${
            messageType === 'success' ? 'bg-white border-neutral-900 text-neutral-900' : 'bg-white border-red-400 text-red-500'
          }`}>
            {message}
          </div>
        )}

        {cartItems.length === 0 ? (
          <div className="bg-white text-center py-24 px-6 rounded-md border border-neutral-100">
            <svg className="mx-auto mb-6 text-neutral-200" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <p className="text-lg font-semibold text-neutral-900 tracking-tight">Your bag is empty</p>
            <p className="text-sm text-neutral-400 mt-2">Add items to get started</p>
            <button onClick={() => navigate('/')}
              className="mt-8 bg-neutral-900 text-white px-10 py-3 text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-neutral-700 transition">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white p-5 flex items-start gap-5 rounded-md border border-neutral-100">
                  <div className="w-24 h-28 flex-shrink-0 overflow-hidden bg-neutral-100 rounded">
                    <img src={resolveProductImage(item.product)} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-neutral-900">{item.product.brand || 'ShopEasy'}</p>
                    <p className="text-[12px] text-neutral-500 mt-0.5 truncate">{item.product.name}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5 capitalize">{item.product.category}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-[14px] font-semibold text-neutral-900">₹{item.product.price.toLocaleString()}</span>
                      <span className="text-[12px] text-neutral-400">× {item.quantity}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <button onClick={() => handlePlaceOrder(item)}
                        className="bg-neutral-900 text-white px-5 py-2 text-[11px] font-semibold tracking-wider uppercase rounded-md hover:bg-neutral-700 transition">
                        Place Order
                      </button>
                      <button onClick={() => handleRemove(item.id)}
                        className="border border-neutral-300 text-neutral-500 px-5 py-2 text-[11px] font-semibold tracking-wider uppercase rounded-md hover:border-neutral-900 hover:text-neutral-900 transition">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[15px] font-semibold text-neutral-900">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 sticky top-32 rounded-md border border-neutral-100">
                <h3 className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase mb-5">Price Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-neutral-600">
                    <span>Price ({cartItems.length} items)</span>
                    <span className="font-medium text-neutral-900">₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Delivery</span>
                    <span className="font-medium text-neutral-900">{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
                  </div>
                </div>
                <div className="border-t border-neutral-100 mt-4 pt-4 flex justify-between">
                  <span className="text-[13px] font-semibold text-neutral-900 tracking-tight">Total Amount</span>
                  <span className="text-[15px] font-semibold text-neutral-900">₹{(total + delivery).toLocaleString()}</span>
                </div>
                {delivery === 0 && (
                  <p className="text-[11px] text-neutral-500 font-medium mt-3">You are saving on delivery charges</p>
                )}
                <button onClick={() => navigate('/orders')}
                  className="w-full mt-6 bg-neutral-900 text-white py-3.5 text-[11px] font-semibold tracking-widest uppercase rounded-md hover:bg-neutral-700 transition">
                  View Orders
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;