export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'warga';
  avatar?: string;
  createdAt: Date;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  category: 'umum' | 'penting' | 'mendesak' | 'kegiatan';
  priority: 'low' | 'medium' | 'high';
  author: User;
  createdAt: Date;
  updatedAt: Date;
  isPublished: boolean;
}

export interface Complaint {
  id: string;
  title: string;
  description: string;
  category: 'infrastruktur' | 'pelayanan' | 'lingkungan' | 'sosial';
  status: 'pending' | 'in_progress' | 'resolved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  submitter: User;
  assignedTo?: User;
  response?: string;
  attachments: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  category: 'rapat' | 'acara' | 'kegiatan' | 'sosialisasi';
  organizer: string;
  isPublic: boolean;
  createdBy: User;
  createdAt: Date;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  category: 'sop' | 'peraturan' | 'formulir' | 'laporan';
  fileUrl: string;
  fileSize: number;
  fileType: string;
  downloadCount: number;
  uploadedBy: User;
  createdAt: Date;
}

export interface Media {
  id: string;
  title: string;
  description?: string;
  type: 'photo' | 'video';
  url: string;
  thumbnailUrl?: string;
  category: 'kegiatan' | 'infrastruktur' | 'acara' | 'umum';
  uploadedBy: User;
  createdAt: Date;
}

export interface Contact {
  id: string;
  name: string;
  position: string;
  department: string;
  phone: string;
  email?: string;
  isEmergency: boolean;
  isActive: boolean;
}

export interface DashboardStats {
  totalUsers: number;
  totalAnnouncements: number;
  totalComplaints: number;
  resolvedComplaints: number;
  upcomingEvents: number;
  totalDocuments: number;
}