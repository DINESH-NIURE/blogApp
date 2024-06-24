import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-gray-200 p-4 text-gray-700">
      <div className="flex items-center">
        <img src="" alt="Logo" className="w-12 h-12 mr-2" />
        <p className="text-sm">This is the description</p>
      </div>
      <div className="flex items-center">
        <a href="#" className="mr-4 text-sm text-gray-700">Link</a>
        <div className="flex">
          <a href="#" className="mr-2 text-sm text-gray-700">Facebook</a>
          <a href="#" className="mr-2 text-sm text-gray-700">Twitter</a>
          <a href="#" className="mr-2 text-sm text-gray-700">Instagram</a>
        </div>
      </div>
      <p className="mt-4 text-xs text-center">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
