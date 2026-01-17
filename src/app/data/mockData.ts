import {
  Employee,
  LeaveRequest,
  AttendanceRecord,
  PayrollRecord,
  JobOpening,
  Candidate,
  PerformanceGoal
} from '@/app/types';

export const mockEmployees: Employee[] = [
  {
    id: 'EMP001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    department: 'Engineering',
    position: 'Senior Developer',
    status: 'active',
    joinDate: '2022-01-15',
    phone: '+1 234-567-8900',
    salary: 95000,
    manager: 'John Smith'
  },
  {
    id: 'EMP002',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    department: 'Marketing',
    position: 'Marketing Manager',
    status: 'active',
    joinDate: '2021-06-20',
    phone: '+1 234-567-8901',
    salary: 85000
  },
  {
    id: 'EMP003',
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    department: 'HR',
    position: 'HR Specialist',
    status: 'active',
    joinDate: '2023-03-10',
    phone: '+1 234-567-8902',
    salary: 70000
  },
  {
    id: 'EMP004',
    name: 'James Wilson',
    email: 'james.wilson@company.com',
    department: 'Sales',
    position: 'Sales Executive',
    status: 'active',
    joinDate: '2022-08-25',
    phone: '+1 234-567-8903',
    salary: 75000
  },
  {
    id: 'EMP005',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@company.com',
    department: 'Finance',
    position: 'Financial Analyst',
    status: 'active',
    joinDate: '2021-11-30',
    phone: '+1 234-567-8904',
    salary: 80000
  }
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: 'LV001',
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    type: 'Casual Leave',
    startDate: '2026-01-20',
    endDate: '2026-01-22',
    days: 3,
    reason: 'Personal work',
    status: 'pending',
    appliedOn: '2026-01-15'
  },
  {
    id: 'LV002',
    employeeId: 'EMP002',
    employeeName: 'Michael Chen',
    type: 'Sick Leave',
    startDate: '2026-01-18',
    endDate: '2026-01-19',
    days: 2,
    reason: 'Medical appointment',
    status: 'approved',
    appliedOn: '2026-01-16'
  },
  {
    id: 'LV003',
    employeeId: 'EMP004',
    employeeName: 'James Wilson',
    type: 'Annual Leave',
    startDate: '2026-02-01',
    endDate: '2026-02-05',
    days: 5,
    reason: 'Vacation',
    status: 'pending',
    appliedOn: '2026-01-14'
  }
];

export const mockAttendance: AttendanceRecord[] = [
  {
    id: 'ATT001',
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    date: '2026-01-15',
    checkIn: '09:00 AM',
    checkOut: '06:00 PM',
    status: 'present',
    hours: 9
  },
  {
    id: 'ATT002',
    employeeId: 'EMP002',
    employeeName: 'Michael Chen',
    date: '2026-01-15',
    checkIn: '09:15 AM',
    checkOut: '06:15 PM',
    status: 'late',
    hours: 9
  },
  {
    id: 'ATT003',
    employeeId: 'EMP003',
    employeeName: 'Emily Davis',
    date: '2026-01-15',
    checkIn: '09:00 AM',
    checkOut: '06:00 PM',
    status: 'present',
    hours: 9
  }
];

export const mockPayroll: PayrollRecord[] = [
  {
    id: 'PAY001',
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    month: 'December 2025',
    basicSalary: 95000,
    allowances: 5000,
    deductions: 15000,
    netSalary: 85000,
    status: 'processed'
  },
  {
    id: 'PAY002',
    employeeId: 'EMP002',
    employeeName: 'Michael Chen',
    month: 'December 2025',
    basicSalary: 85000,
    allowances: 4000,
    deductions: 13500,
    netSalary: 75500,
    status: 'processed'
  }
];

export const mockJobOpenings: JobOpening[] = [
  {
    id: 'JOB001',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'full-time',
    posted: '2026-01-10',
    applicants: 24,
    status: 'open'
  },
  {
    id: 'JOB002',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'full-time',
    posted: '2026-01-08',
    applicants: 18,
    status: 'open'
  },
  {
    id: 'JOB003',
    title: 'Marketing Coordinator',
    department: 'Marketing',
    location: 'New York, NY',
    type: 'full-time',
    posted: '2026-01-05',
    applicants: 31,
    status: 'open'
  }
];

export const mockCandidates: Candidate[] = [
  {
    id: 'CAN001',
    name: 'Alex Turner',
    email: 'alex.turner@email.com',
    position: 'Senior Frontend Developer',
    status: 'interview',
    appliedDate: '2026-01-12',
    experience: '5 years'
  },
  {
    id: 'CAN002',
    name: 'Maria Rodriguez',
    email: 'maria.r@email.com',
    position: 'Product Manager',
    status: 'in-review',
    appliedDate: '2026-01-10',
    experience: '7 years'
  },
  {
    id: 'CAN003',
    name: 'David Park',
    email: 'david.park@email.com',
    position: 'Marketing Coordinator',
    status: 'offered',
    appliedDate: '2026-01-08',
    experience: '3 years'
  }
];

export const mockPerformanceGoals: PerformanceGoal[] = [
  {
    id: 'GOAL001',
    employeeId: 'EMP001',
    title: 'Complete React Migration',
    description: 'Migrate legacy codebase to React',
    progress: 75,
    dueDate: '2026-03-31',
    status: 'on-track'
  },
  {
    id: 'GOAL002',
    employeeId: 'EMP001',
    title: 'Improve Code Coverage',
    description: 'Increase test coverage to 80%',
    progress: 45,
    dueDate: '2026-02-28',
    status: 'at-risk'
  }
];

export const mockHolidays = [
  { date: '2026-01-01', name: 'New Year\'s Day' },
  { date: '2026-01-20', name: 'Martin Luther King Jr. Day' },
  { date: '2026-02-17', name: 'Presidents\' Day' },
  { date: '2026-05-25', name: 'Memorial Day' },
  { date: '2026-07-03', name: 'Independence Day' },
  { date: '2026-09-07', name: 'Labor Day' },
  { date: '2026-11-26', name: 'Thanksgiving Day' },
  { date: '2026-12-25', name: 'Christmas Day' }
];
