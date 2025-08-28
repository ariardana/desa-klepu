import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth.tsx';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Announcements from './pages/Announcements';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/complaints" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h2 className="text-2xl font-bold text-gray-900 mb-2">Halaman Aduan</h2><p className="text-gray-600">Fitur ini sedang dalam pengembangan</p></div></div>} />
              <Route path="/events" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h2 className="text-2xl font-bold text-gray-900 mb-2">Halaman Agenda</h2><p className="text-gray-600">Fitur ini sedang dalam pengembangan</p></div></div>} />
              <Route path="/documents" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h2 className="text-2xl font-bold text-gray-900 mb-2">Halaman Dokumen</h2><p className="text-gray-600">Fitur ini sedang dalam pengembangan</p></div></div>} />
              <Route path="/gallery" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h2 className="text-2xl font-bold text-gray-900 mb-2">Halaman Galeri</h2><p className="text-gray-600">Fitur ini sedang dalam pengembangan</p></div></div>} />
              <Route path="/contacts" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h2 className="text-2xl font-bold text-gray-900 mb-2">Halaman Kontak</h2><p className="text-gray-600">Fitur ini sedang dalam pengembangan</p></div></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;