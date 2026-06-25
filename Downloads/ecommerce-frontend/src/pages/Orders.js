 import React, { useState, useEffect } from 'react';
import { getOrders } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { resolveProductImage } from '../utils/seedProducts';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) { navigate('/login'); return; }
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await getOrders(userId);
      setOrders(response.data);
    } catch (err) {
      console.error('Error fetching orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'PENDING': return 'border-neutral-300 text-neutral-600 bg-neutral-50';
      case 'DELIVERED': return 'border-neutral-900 text-neutral-900 bg-white';
      case 'CANCELLED': return 'border-red-300 text-red-500 bg-white';
      default: return 'border-neutral-200 text-neutral-500 bg-white';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <h1 className="text-xl font-semibold text-neutral-900 tracking-tight">My Orders</h1>
          <p className="text-sm text-neutral-400 mt-0.5 font-medium">
            {orders.length} {orders.length === 1 ? 'order' : 'orders'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8">
        {loading ? (
          <div className="text-center py-24">
            <div className="inline-block w-10 h-10 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-neutral-400 mt-4 font-medium tracking-wide">Loading orders...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-md border border-neutral-100">
            <svg className="mx-auto mb-6 text-neutral-200" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <p className="text-lg font-semibold text-neutral-900 tracking-tight">No orders yet</p>
            <p className="text-sm text-neutral-400 mt-2">Your placed orders will appear here</p>
            <button onClick={() => navigate('/')}
              className="mt-8 bg-neutral-900 text-white px-10 py-3 text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-neutral-700 transition">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-md border border-neutral-100 p-6">
                <div className="flex items-center justify-between mb-5 pb-5 border-b border-neutral-100">
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight">Order #{order.id}</h3>
                    <p className="text-neutral-400 text-[12px] mt-0.5">
                      {new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <span className={`px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wider uppercase border ${getStatusStyle(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded overflow-hidden bg-neutral-100 flex-shrink-0">
                    <img src={resolveProductImage(order.product)} alt={order.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-neutral-900 text-[14px] truncate">{order.product.name}</p>
                    <p className="text-neutral-500 text-[12px] mt-0.5 capitalize">{order.product.category}</p>
                    <p className="text-neutral-400 text-[12px] mt-0.5">Quantity: {order.quantity}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-semibold text-neutral-900 text-[16px]">₹{order.totalPrice.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;