import React from 'react';

const Footer = () => (
  <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-6 mt-10">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p>© {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
