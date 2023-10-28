import { LoginOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a server.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-sky-300 font-serif ">
      <div className="w-3/5 h-3/5 bg-gradient-to-br from-gray-300 cursor-pointer to-gray-700 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-950">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-950 text-md font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded bg-white text-gray-950"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-950 text-md font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 px-3 rounded bg-white text-gray-950"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="flex justify-center gap-2 px-3 bg-indigo-900 rounded text-white w-1/5 mx-auto py-3"
            ><LoginOutlined className='mt-1'/>
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
