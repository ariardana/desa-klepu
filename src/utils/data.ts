import { User, Announcement, Complaint, Event, Document, Media, Contact, DashboardStats } from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    email: 'budi@desa.id',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Siti Aminah',
    email: 'siti@desa.id',
    role: 'staff',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '3',
    name: 'Ahmad Rahman',
    email: 'ahmad@email.com',
    role: 'warga',
    createdAt: new Date('2024-02-01')
  }
];

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Pemeliharaan Jalan Utama Desa',
    content: 'Akan dilakukan pemeliharaan jalan utama mulai tanggal 20 Januari 2025. Diharapkan warga untuk menggunakan jalur alternatif selama proses pemeliharaan.',
    category: 'penting',
    priority: 'high',
    author: mockUsers[0],
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
    isPublished: true
  },
  {
    id: '2',
    title: 'Jadwal Pembagian BLT Bulan Januari',
    content: 'Pembagian Bantuan Langsung Tunai untuk bulan Januari akan dilaksanakan pada tanggal 25-27 Januari 2025 di Kantor Desa.',
    category: 'umum',
    priority: 'medium',
    author: mockUsers[1],
    createdAt: new Date('2025-01-12'),
    updatedAt: new Date('2025-01-12'),
    isPublished: true
  }
];

export const mockComplaints: Complaint[] = [
  {
    id: '1',
    title: 'Lampu Jalan Mati di RT 02',
    description: 'Lampu penerangan jalan di RT 02 sudah mati sejak 3 hari yang lalu. Mohon segera diperbaiki.',
    category: 'infrastruktur',
    status: 'in_progress',
    priority: 'medium',
    submitter: mockUsers[2],
    assignedTo: mockUsers[1],
    attachments: [],
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-12')
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Rapat RT Bulanan',
    description: 'Rapat rutin bulanan RT 01 membahas program kerja bulan Februari',
    location: 'Balai RT 01',
    startDate: new Date('2025-01-25T19:00:00'),
    endDate: new Date('2025-01-25T21:00:00'),
    category: 'rapat',
    organizer: 'Ketua RT 01',
    isPublic: true,
    createdBy: mockUsers[1],
    createdAt: new Date('2025-01-10')
  }
];

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'SOP Pelayanan Surat Keterangan',
    description: 'Standar Operasional Prosedur untuk pelayanan pembuatan surat keterangan',
    category: 'sop',
    fileUrl: '/documents/sop-surat-keterangan.pdf',
    fileSize: 1024000,
    fileType: 'application/pdf',
    downloadCount: 25,
    uploadedBy: mockUsers[0],
    createdAt: new Date('2025-01-01')
  }
];

export const mockMedia: Media[] = [
  {
    id: '1',
    title: 'Gotong Royong Membersihkan Selokan',
    description: 'Dokumentasi kegiatan gotong royong membersihkan selokan desa',
    type: 'photo',
    url: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'kegiatan',
    uploadedBy: mockUsers[1],
    createdAt: new Date('2025-01-08')
  },
  {
    id: '2',
    title: 'Pembangunan Jembatan Baru',
    description: 'Progress pembangunan jembatan penghubung antar dusun',
    type: 'photo',
    url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'infrastruktur',
    uploadedBy: mockUsers[0],
    createdAt: new Date('2025-01-05')
  }
];

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Kepala Desa',
    position: 'Kepala Desa',
    department: 'Pemerintahan',
    phone: '0812-3456-7890',
    email: 'kepala.desa@desa.id',
    isEmergency: false,
    isActive: true
  },
  {
    id: '2',
    name: 'Sekretaris Desa',
    position: 'Sekretaris Desa',
    department: 'Administrasi',
    phone: '0813-4567-8901',
    email: 'sekretaris@desa.id',
    isEmergency: false,
    isActive: true
  },
  {
    id: '3',
    name: 'Pos Kamling',
    position: 'Keamanan Desa',
    department: 'Keamanan',
    phone: '0821-9876-5432',
    isEmergency: true,
    isActive: true
  }
];

export const mockDashboardStats: DashboardStats = {
  totalUsers: 156,
  totalAnnouncements: 24,
  totalComplaints: 18,
  resolvedComplaints: 12,
  upcomingEvents: 5,
  totalDocuments: 34
};