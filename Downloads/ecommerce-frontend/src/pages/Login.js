 import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/api';
import Logo from '../components/Logo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.data);
      localStorage.setItem('email', email);
      navigate('/');
    } catch (err) {
      setError('Wrong email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-9">
          <Logo height={34} />
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg px-8 py-8">
          <h2 className="text-xl font-semibold text-neutral-900 tracking-tight text-center">Welcome back</h2>
          <p className="text-sm text-neutral-500 mt-1 mb-7 text-center">Sign in to continue shopping</p>

          {error && (
            <div className="border border-red-300 bg-red-50 text-red-600 px-4 py-3 mb-5 text-sm font-medium rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-neutral-700 text-[12px] font-medium tracking-wide uppercase mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                className="w-full px-4 py-3 border border-neutral-300 rounded-md text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition" required />
            </div>
            <div className="mb-6">
              <label className="block text-neutral-700 text-[12px] font-medium tracking-wide uppercase mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                className="w-full px-4 py-3 border border-neutral-300 rounded-md text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition" required />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-neutral-900 text-white py-3.5 rounded-md text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-700 transition disabled:opacity-60">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-neutral-500 mt-6 text-sm">
          {"Don't have an account? "}
          <Link to="/register" className="text-neutral-900 font-semibold hover:underline underline-offset-2">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;