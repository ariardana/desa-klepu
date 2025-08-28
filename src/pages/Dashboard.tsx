import React from 'react';
import { Navigate } from 'react-router-dom';
import { 
  UsersIcon,
  MegaphoneIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  DocumentIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../hooks/useAuth.tsx';
import StatCard from '../components/UI/StatCard';
import { mockDashboardStats } from '../utils/data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || (user?.role !== 'admin' && user?.role !== 'staff')) {
    return <Navigate to="/" replace />;
  }

  const chartData = [
    { name: 'Jan', pengumuman: 4, aduan: 8, resolved: 6 },
    { name: 'Feb', pengumuman: 3, aduan: 12, resolved: 9 },
    { name: 'Mar', pengumuman: 6, aduan: 15, resolved: 11 },
    { name: 'Apr', pengumuman: 8, aduan: 10, resolved: 8 },
    { name: 'Mei', pengumuman: 5, aduan: 18, resolved: 14 },
    { name: 'Jun', pengumuman: 7, aduan: 16, resolved: 12 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Selamat datang, {user?.name}</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <StatCard
            title="Total Pengguna"
            value={mockDashboardStats.totalUsers}
            icon={<UsersIcon className="h-6 w-6" />}
            color="blue"
            change={{ value: '+12%', trend: 'up' }}
          />
          <StatCard
            title="Pengumuman"
            value={mockDashboardStats.totalAnnouncements}
            icon={<MegaphoneIcon className="h-6 w-6" />}
            color="green"
            change={{ value: '+8%', trend: 'up' }}
          />
          <StatCard
            title="Total Aduan"
            value={mockDashboardStats.totalComplaints}
            icon={<ChatBubbleBottomCenterTextIcon className="h-6 w-6" />}
            color="yellow"
          />
          <StatCard
            title="Aduan Selesai"
            value={mockDashboardStats.resolvedComplaints}
            icon={<CheckCircleIcon className="h-6 w-6" />}
            color="green"
            change={{ value: '+15%', trend: 'up' }}
          />
          <StatCard
            title="Agenda Mendatang"
            value={mockDashboardStats.upcomingEvents}
            icon={<CalendarDaysIcon className="h-6 w-6" />}
            color="purple"
          />
          <StatCard
            title="Dokumen"
            value={mockDashboardStats.totalDocuments}
            icon={<DocumentIcon className="h-6 w-6" />}
            color="blue"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Activity Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Bulanan</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="pengumuman" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  name="Pengumuman"
                />
                <Line 
                  type="monotone" 
                  dataKey="aduan" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Aduan"
                />
                <Line 
                  type="monotone" 
                  dataKey="resolved" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  name="Selesai"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Terbaru</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Pengumuman baru ditambahkan</p>
                  <p className="text-xs text-gray-500">2 jam yang lalu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Aduan dari Ahmad Rahman diselesaikan</p>
                  <p className="text-xs text-gray-500">4 jam yang lalu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Event baru dijadwalkan</p>
                  <p className="text-xs text-gray-500">6 jam yang lalu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Dokumen SOP diperbarui</p>
                  <p className="text-xs text-gray-500">1 hari yang lalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg text-center transition-colors duration-200">
              <MegaphoneIcon className="h-8 w-8 mx-auto mb-2" />
              <span className="block text-sm font-medium">Buat Pengumuman</span>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center transition-colors duration-200">
              <CalendarDaysIcon className="h-8 w-8 mx-auto mb-2" />
              <span className="block text-sm font-medium">Tambah Event</span>
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg text-center transition-colors duration-200">
              <DocumentIcon className="h-8 w-8 mx-auto mb-2" />
              <span className="block text-sm font-medium">Upload Dokumen</span>
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-4 rounded-lg text-center transition-colors duration-200">
              <ChatBubbleBottomCenterTextIcon className="h-8 w-8 mx-auto mb-2" />
              <span className="block text-sm font-medium">Kelola Aduan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}