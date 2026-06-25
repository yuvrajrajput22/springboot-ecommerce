 import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct, addProduct } from '../services/api';
import ProductCard from '../components/ProductCard';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import { SEED_PRODUCTS } from '../utils/seedProducts';

const FEATURES = [
  { title: 'Free Delivery', desc: 'On orders above ₹499', path: 'M3 7h13v8H3zM16 10h4l1 3v2h-5M5.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' },
  { title: 'Easy Returns', desc: '7-day return policy', path: 'M3 12a9 9 0 1 0 3-6.7M3 4v5h5' },
  { title: 'Secure Payments', desc: '100% protected', path: 'M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z' },
  { title: '24x7 Support', desc: 'Dedicated help', path: 'M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z' },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', brand: '', image: '' });
  const [message, setMessage] = useState('');
  const [seeding, setSeeding] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) { navigate('/login'); return; }
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (err) {
      console.error('[v0] Error fetching products', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
      setMessage('Product removed');
      setTimeout(() => setMessage(''), 2000);
    } catch {
      setMessage('Could not delete product');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await addProduct({
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        category: newProduct.category,
        brand: newProduct.brand,
        image: newProduct.image,
      });
      setMessage('Product added');
      setShowAddForm(false);
      setNewProduct({ name: '', price: '', category: '', brand: '', image: '' });
      fetchProducts();
      setTimeout(() => setMessage(''), 2000);
    } catch {
      setMessage('Could not add product');
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    let added = 0, failed = 0;
    for (const p of SEED_PRODUCTS) {
      try { await addProduct(p); added++; }
      catch (err) { failed++; console.error('[v0] Seed failed:', p.name, err); }
    }
    await fetchProducts();
    setSeeding(false);
    setMessage(`Done. Added ${added}, failed ${failed}.`);
    setTimeout(() => setMessage(''), 4000);
  };

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=600&fit=crop&auto=format"
          alt="New season collection"
          className="w-full h-[420px] object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-xl">
              <p className="text-[11px] font-medium tracking-[0.3em] text-neutral-200 uppercase mb-4">
                New Season
              </p>
              <h1 className="text-5xl font-semibold text-white leading-[1.1] tracking-tight text-balance">
                Curated essentials for everyday living
              </h1>
              <p className="text-neutral-300 text-sm mt-5 mb-9 leading-relaxed max-w-md">
                Thoughtfully selected products across categories. Up to 60% off this season.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <button className="bg-white text-neutral-900 px-9 py-3.5 text-[11px] font-semibold tracking-widest uppercase hover:bg-neutral-200 transition rounded-md">
                  Explore Now
                </button>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="border border-neutral-400 text-white px-9 py-3.5 text-[11px] font-semibold tracking-widest uppercase hover:border-white transition rounded-md">
                  Add Product
                </button>
                <button
                  onClick={handleSeed}
                  disabled={seeding}
                  className="border border-neutral-400 text-white px-9 py-3.5 text-[11px] font-semibold tracking-widest uppercase hover:border-white transition rounded-md disabled:opacity-50">
                  {seeding ? 'Adding...' : 'Seed Products'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust / Features bar */}
      <div className="border-b border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200">
          {FEATURES.map(f => (
            <div key={f.title} className="flex items-center gap-3 py-5 px-4 justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="text-neutral-900 flex-shrink-0">
                <path d={f.path} />
              </svg>
              <div>
                <p className="text-[13px] font-semibold text-neutral-900 leading-tight">{f.title}</p>
                <p className="text-[11px] text-neutral-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-neutral-100 sticky top-[108px] z-40">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 text-[12px] font-medium tracking-wide whitespace-nowrap transition border rounded-md ${
                category === cat
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-900 hover:text-neutral-900'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {showAddForm && (
        <div className="bg-neutral-50 border-b border-neutral-100 py-6 px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] font-semibold tracking-widest text-neutral-400 uppercase mb-4">
              Add New Product
            </p>
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <input type="text" placeholder="Product name" value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="px-4 py-3 border border-neutral-200 text-sm text-neutral-900 bg-white rounded-md focus:outline-none focus:border-neutral-900 transition placeholder-neutral-400" required />
              <input type="text" placeholder="Brand" value={newProduct.brand}
                onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                className="px-4 py-3 border border-neutral-200 text-sm text-neutral-900 bg-white rounded-md focus:outline-none focus:border-neutral-900 transition placeholder-neutral-400" />
              <input type="number" placeholder="Price (₹)" value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="px-4 py-3 border border-neutral-200 text-sm text-neutral-900 bg-white rounded-md focus:outline-none focus:border-neutral-900 transition placeholder-neutral-400" required />
              <input type="text" placeholder="Category" value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="px-4 py-3 border border-neutral-200 text-sm text-neutral-900 bg-white rounded-md focus:outline-none focus:border-neutral-900 transition placeholder-neutral-400" required />
              <input type="text" placeholder="Image URL" value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                className="px-4 py-3 border border-neutral-200 text-sm text-neutral-900 bg-white rounded-md focus:outline-none focus:border-neutral-900 transition placeholder-neutral-400" />
              <button type="submit"
                className="bg-neutral-900 text-white text-[11px] font-semibold tracking-widest uppercase rounded-md hover:bg-neutral-700 transition py-3">
                Add
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-8 py-10">
        {message && (
          <div className="mb-6 px-4 py-3 border border-neutral-900 text-neutral-900 text-sm font-medium bg-white rounded-md">
            {message}
          </div>
        )}

        <div className="flex items-center justify-between mb-7">
          <div>
            <h2 className="text-[13px] font-semibold text-neutral-900 tracking-wide uppercase">
              {category === 'All' ? 'All Products' : category}
            </h2>
            <p className="text-[12px] text-neutral-400 mt-0.5">{filteredProducts.length} items</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-24">
            <div className="w-10 h-10 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-neutral-400 mt-4 font-medium tracking-wide">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <svg className="mx-auto mb-5 text-neutral-200" width="48" height="48" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <p className="text-base font-semibold text-neutral-900 tracking-tight">No products found</p>
            <p className="text-sm text-neutral-400 mt-1">Click "Seed Products" above to add sample items</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onDelete={handleDelete} isAdmin={true} />
            ))}
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className="bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Join our newsletter</h3>
            <p className="text-sm text-neutral-500 mt-1">Get early access to new arrivals and exclusive offers.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
            className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-3 border border-neutral-300 rounded-md text-sm text-neutral-900 placeholder-neutral-400 bg-white focus:outline-none focus:border-neutral-900 transition"
              required
            />
            <button type="submit"
              className="bg-neutral-900 text-white px-7 py-3 text-[11px] font-semibold tracking-widest uppercase rounded-md hover:bg-neutral-700 transition whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo dark height={30} />
            <p className="text-neutral-400 text-[13px] leading-relaxed mt-4">
              Everyday essentials, thoughtfully curated. Shop quality products across categories.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] text-neutral-500 uppercase mb-4">Online Shopping</h4>
            <ul className="space-y-2.5 text-[13px] text-neutral-400">
              {['Men', 'Women', 'Kids', 'Electronics'].map(l => (
                <li key={l} className="hover:text-white cursor-pointer transition">{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] text-neutral-500 uppercase mb-4">Customer Policies</h4>
            <ul className="space-y-2.5 text-[13px] text-neutral-400">
              {['Contact Us', 'FAQ', 'Terms & Conditions', 'Privacy Policy'].map(l => (
                <li key={l} className="hover:text-white cursor-pointer transition">{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] text-neutral-500 uppercase mb-4">Experience App On</h4>
            <div className="flex flex-col gap-2">
              <button className="border border-neutral-700 text-neutral-400 px-4 py-2.5 text-[12px] font-medium hover:border-white hover:text-white transition text-left rounded-md">App Store</button>
              <button className="border border-neutral-700 text-neutral-400 px-4 py-2.5 text-[12px] font-medium hover:border-white hover:text-white transition text-left rounded-md">Play Store</button>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 py-5 text-center text-[11px] text-neutral-500 tracking-wide">
          2026 ShopEasy Pvt. Ltd. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;