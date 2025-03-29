import React from 'react';
import { Navigation, Car, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900';
  };

  const showBackButton = location.pathname !== '/';

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-4">
              {showBackButton && (
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <Link to="/" className="flex items-center space-x-3">
                <Navigation className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">GhumoAI</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className={`flex items-center space-x-2 ${isActive('/')}`}>
                <MapPin className="w-5 h-5" />
                <span>Plan Tour</span>
              </Link>
              <Link to="/rental-services" className={`flex items-center space-x-2 ${isActive('/rental-services')}`}>
                <Car className="w-5 h-5" />
                <span>Rental Services</span>
              </Link>
              <Link to="/my-tours" className={`flex items-center space-x-2 ${isActive('/my-tours')}`}>
                <Calendar className="w-5 h-5" />
                <span>My Tours</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* Spacer div to prevent content from going under navbar */}
      <div className="h-16" />
    </>
  );
} 