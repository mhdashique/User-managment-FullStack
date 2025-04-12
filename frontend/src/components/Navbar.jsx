import { useState } from 'react';
import reactlogo from '../assets/react.svg'
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar({pageName}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <nav className="bg-cyan-800 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and Home */}
          <div className="flex items-center space-x-4">
            <img
              className="h-8 w-auto cursor-pointer"
              src={reactlogo}
              alt="Logo"
              onClick={()=>{navigate("/")}}
            />
            <p className="text-white font-medium">{pageName}</p>
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="User avatar"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-1 z-20">
                <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100" >Your Profile</Link>
                <Link to="/login" className="block px-4 py-2 text-sm hover:bg-gray-100" >Sign Out</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
