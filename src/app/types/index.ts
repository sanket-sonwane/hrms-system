export type UserRole = 'admin' | 'hr' | 'manager' | 'employee';

export type LeaveStatus = 'approved' | 'pending' | 'rejected';
export type EmployeeStatus = 'active' | 'inactive';
export type ApplicationStatus = 'in-review' | 'interview' | 'offered' | 'rejected';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  status: EmployeeStatus;
  joinDate: string;
  phone: string;
  avatar?: string;
  salary?: number;
  manager?: string;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: LeaveStatus;
  appliedOn: string;
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'present' | 'absent' | 'late' | 'half-day';
  hours: number;
}

export interface PayrollRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  month: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'processed' | 'pending';
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  posted: string;
  applicants: number;
  status: 'open' | 'closed';
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  position: string;
  status: ApplicationStatus;
  appliedDate: string;
  experience: string;
}

export interface PerformanceGoal {
  id: string;
  employeeId: string;
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  status: 'on-track' | 'at-risk' | 'completed';
}
