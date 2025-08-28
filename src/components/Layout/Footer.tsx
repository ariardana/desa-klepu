import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="ml-3 text-xl font-bold">Desa Digital</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Sistem informasi digital untuk meningkatkan transparansi dan pelayanan kepada masyarakat desa.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span className="text-sm">Jl. Raya Desa No. 123, Kecamatan Contoh</span>
              </div>
              <div className="flex items-center text-gray-400">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span className="text-sm">(021) 1234-5678</span>
              </div>
              <div className="flex items-center text-gray-400">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span className="text-sm">info@desa.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/announcements" className="text-gray-400 hover:text-white transition-colors">Pengumuman</Link></li>
              <li><Link to="/complaints" className="text-gray-400 hover:text-white transition-colors">Aduan</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Agenda</Link></li>
              <li><Link to="/documents" className="text-gray-400 hover:text-white transition-colors">Dokumen</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Surat Keterangan</span></li>
              <li><span className="text-gray-400">Surat Domisili</span></li>
              <li><span className="text-gray-400">Surat Usaha</span></li>
              <li><span className="text-gray-400">Layanan KTP</span></li>
              <li><span className="text-gray-400">Layanan KK</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Desa Digital. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}