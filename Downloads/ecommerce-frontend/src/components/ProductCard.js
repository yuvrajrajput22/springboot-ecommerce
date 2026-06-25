 import React, { useState } from 'react';
import { addToCart } from '../services/api';
import { resolveProductImage } from '../utils/seedProducts';

const ProductCard = ({ product, onDelete, isAdmin }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const userId = localStorage.getItem('userId');

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart(userId, product.id, quantity);
      setMessage('Added to bag');
      setTimeout(() => setMessage(''), 2000);
    } catch {
      setMessage('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const imageSrc = resolveProductImage(product);

  const discount = Math.floor(Math.random() * 40) + 20;
  const originalPrice = Math.floor(product.price * (100 / (100 - discount)));

  return (
    <div className="bg-white group cursor-pointer relative border border-neutral-100 hover:border-neutral-200 transition-colors rounded-md overflow-hidden">

      <div className="relative overflow-hidden bg-neutral-100" style={{ height: '280px' }}>
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] font-semibold px-2 py-1 tracking-wider rounded-sm">
          {discount}% OFF
        </span>

        <button
          onClick={() => setWishlisted(w => !w)}
          className="absolute top-2.5 right-2.5 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 border-none cursor-pointer shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24"
            fill={wishlisted ? '#111' : 'none'} stroke="#111" strokeWidth="1.6">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 py-3 text-[12px] font-semibold tracking-widest text-neutral-900 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-neutral-900 hover:text-white cursor-pointer uppercase">
          {loading ? 'Adding...' : 'Add to bag'}
        </button>
      </div>

      <div className="p-3 pb-4">
        <p className="text-[13px] font-semibold text-neutral-900">
          {product.brand || 'ShopEasy'}
        </p>
        <p className="text-[12px] text-neutral-500 mt-0.5 truncate">{product.name}</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-[14px] font-semibold text-neutral-900">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-[12px] text-neutral-400 line-through">
            ₹{originalPrice.toLocaleString()}
          </span>
          <span className="text-[12px] text-neutral-600 font-medium">
            {discount}% off
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-2">
          <span className="bg-neutral-900 text-white text-[11px] font-medium px-2 py-0.5 rounded-sm flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#fff" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            4.2
          </span>
          <span className="text-[11px] text-neutral-400">(1.2k)</span>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-7 h-7 border border-neutral-300 bg-white text-neutral-600 text-sm font-bold flex items-center justify-center cursor-pointer hover:border-neutral-900 hover:text-neutral-900 transition rounded">
            −
          </button>
          <span className="text-[13px] font-semibold w-5 text-center text-neutral-900">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="w-7 h-7 border border-neutral-300 bg-white text-neutral-600 text-sm font-bold flex items-center justify-center cursor-pointer hover:border-neutral-900 hover:text-neutral-900 transition rounded">
            +
          </button>
        </div>

        {message && (
          <p className="text-[11px] mt-2 text-neutral-900 font-medium">{message}</p>
        )}

        {isAdmin && (
          <button
            onClick={() => onDelete(product.id)}
            className="mt-3 flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-neutral-900 transition bg-transparent border-none cursor-pointer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6m4-6v6" />
              <path d="M9 6V4h6v2" />
            </svg>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;