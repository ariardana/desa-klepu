import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../hooks/useAuth.tsx';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Pengumuman', href: '/announcements' },
    { name: 'Aduan', href: '/complaints' },
    { name: 'Agenda', href: '/events' },
    { name: 'Dokumen', href: '/documents' },
    { name: 'Galeri', href: '/gallery' },
    { name: 'Kontak', href: '/contacts' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Desa Digital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <BellIcon className="h-6 w-6" />
                </button>
                <div className="flex items-center space-x-2">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=1e40af&color=fff`}
                    alt={user?.name}
                  />
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                </div>
                {(user?.role === 'admin' || user?.role === 'staff') && (
                  <Link
                    to="/dashboard"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-red-600 text-sm font-medium"
                >
                  Keluar
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Masuk
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                } block px-3 py-2 text-base font-medium rounded-md`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center px-3 mb-3">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=1e40af&color=fff`}
                    alt={user?.name}
                  />
                  <span className="ml-3 text-base font-medium text-gray-700">{user?.name}</span>
                </div>
                {(user?.role === 'admin' || user?.role === 'staff') && (
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-100 rounded-md"
                >
                  Keluar
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Masuk
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}