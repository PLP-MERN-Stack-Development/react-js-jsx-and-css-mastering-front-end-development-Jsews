import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 text-white py-4 shadow">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">PLP Task Manager</h1>
        <div className="flex items-center gap-4">
          <button onClick={toggle} className="bg-white/10 px-3 py-1 rounded">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
