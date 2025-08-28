import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MegaphoneIcon, 
  ChatBubbleBottomCenterTextIcon, 
  CalendarDaysIcon,
  DocumentIcon,
  PhotoIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { mockAnnouncements, mockEvents } from '../utils/data';

export default function Home() {
  const features = [
    {
      name: 'Pengumuman',
      description: 'Informasi terbaru dari pemerintah desa',
      icon: MegaphoneIcon,
      href: '/announcements',
      color: 'blue'
    },
    {
      name: 'Aduan Warga',
      description: 'Sampaikan keluhan dan saran Anda',
      icon: ChatBubbleBottomCenterTextIcon,
      href: '/complaints',
      color: 'green'
    },
    {
      name: 'Agenda Kegiatan',
      description: 'Jadwal kegiatan dan acara desa',
      icon: CalendarDaysIcon,
      href: '/events',
      color: 'purple'
    },
    {
      name: 'Dokumen',
      description: 'SOP dan dokumen publik desa',
      icon: DocumentIcon,
      href: '/documents',
      color: 'yellow'
    },
    {
      name: 'Galeri',
      description: 'Foto dan video kegiatan desa',
      icon: PhotoIcon,
      href: '/gallery',
      color: 'pink'
    },
    {
      name: 'Kontak',
      description: 'Informasi kontak penting desa',
      icon: PhoneIcon,
      href: '/contacts',
      color: 'indigo'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    pink: 'bg-pink-100 text-pink-600',
    indigo: 'bg-indigo-100 text-indigo-600'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Selamat Datang di
              <span className="block text-yellow-400">Desa Digital</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Sistem informasi terintegrasi untuk meningkatkan transparansi dan pelayanan kepada masyarakat desa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/announcements"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Lihat Pengumuman
              </Link>
              <Link
                to="/complaints"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Sampaikan Aduan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Digital Desa</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Akses semua layanan dan informasi desa dengan mudah melalui platform digital yang terintegrasi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.name}
                to={feature.href}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 group"
              >
                <div className={`w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest Announcements */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Pengumuman Terbaru</h2>
                <Link
                  to="/announcements"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Lihat Semua →
                </Link>
              </div>
              <div className="space-y-4">
                {mockAnnouncements.slice(0, 3).map((announcement) => (
                  <div key={announcement.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start justify-between mb-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        announcement.priority === 'high' 
                          ? 'bg-red-100 text-red-800'
                          : announcement.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {announcement.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {announcement.createdAt.toLocaleDateString('id-ID')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {announcement.content.substring(0, 150)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Agenda Mendatang</h2>
                <Link
                  to="/events"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Lihat Semua →
                </Link>
              </div>
              <div className="space-y-4">
                {mockEvents.slice(0, 3).map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-lg p-3 text-center min-w-[60px]">
                        <div className="text-sm font-medium">
                          {event.startDate.toLocaleDateString('id-ID', { month: 'short' })}
                        </div>
                        <div className="text-lg font-bold">
                          {event.startDate.getDate()}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {event.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{event.location}</span>
                          <span className="mx-2">•</span>
                          <span>
                            {event.startDate.toLocaleTimeString('id-ID', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}