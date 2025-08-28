import React, { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { mockAnnouncements } from '../utils/data';

export default function Announcements() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const filteredAnnouncements = mockAnnouncements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || announcement.category === selectedCategory;
    const matchesPriority = selectedPriority === 'all' || announcement.priority === selectedPriority;
    
    return matchesSearch && matchesCategory && matchesPriority && announcement.isPublished;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mendesak': return 'bg-red-100 text-red-800';
      case 'penting': return 'bg-orange-100 text-orange-800';
      case 'kegiatan': return 'bg-purple-100 text-purple-800';
      case 'umum': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pengumuman</h1>
          <p className="text-gray-600">Informasi terbaru dari pemerintah desa</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari pengumuman..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">Semua Kategori</option>
                <option value="umum">Umum</option>
                <option value="penting">Penting</option>
                <option value="mendesak">Mendesak</option>
                <option value="kegiatan">Kegiatan</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
              >
                <option value="all">Semua Prioritas</option>
                <option value="high">Tinggi</option>
                <option value="medium">Sedang</option>
                <option value="low">Rendah</option>
              </select>
            </div>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {filteredAnnouncements.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-gray-400 mb-2">
                <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada pengumuman</h3>
              <p className="text-gray-600">Tidak ada pengumuman yang sesuai dengan kriteria pencarian Anda.</p>
            </div>
          ) : (
            filteredAnnouncements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}>
                        {announcement.category}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                        {announcement.priority === 'high' ? 'Tinggi' : 
                         announcement.priority === 'medium' ? 'Sedang' : 'Rendah'}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        {announcement.createdAt.toLocaleDateString('id-ID', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-xs text-gray-400">
                        oleh {announcement.author.name}
                      </p>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {announcement.title}
                  </h2>
                  
                  <div className="text-gray-700 leading-relaxed">
                    {announcement.content}
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={announcement.author.avatar || `https://ui-avatars.com/api/?name=${announcement.author.name}&background=1e40af&color=fff`}
                        alt={announcement.author.name}
                      />
                      <span className="text-sm text-gray-600">{announcement.author.name}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Baca selengkapnya →
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More Button */}
        {filteredAnnouncements.length > 0 && (
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </div>
  );
}