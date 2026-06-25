 import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/api';
import Logo from '../components/Logo';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await register(email, password);
      setSuccess('Account created. Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const perks = [
    'Free delivery on orders above ₹499',
    'Early access to new arrivals',
    'Save items to your wishlist',
    'Track every order in one place',
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <div className="flex justify-center mb-9">
          <Logo height={34} />
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg px-8 py-8">
          <h2 className="text-xl font-semibold text-neutral-900 tracking-tight text-center">Create your account</h2>
          <p className="text-sm text-neutral-500 mt-1 mb-7 text-center">Sign up to start shopping with us</p>

          {error && (
            <div className="border border-red-300 bg-red-50 text-red-600 px-4 py-3 mb-5 text-sm font-medium rounded-md">{error}</div>
          )}
          {success && (
            <div className="border border-neutral-900 text-neutral-900 px-4 py-3 mb-5 text-sm font-medium rounded-md">{success}</div>
          )}

          <form onSubmit={handleRegister}>
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
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <ul className="mt-7 space-y-2.5">
            {perks.map(perk => (
              <li key={perk} className="flex items-center gap-2.5 text-[13px] text-neutral-600">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-neutral-900 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-neutral-500 mt-6 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-neutral-900 font-semibold hover:underline underline-offset-2">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;