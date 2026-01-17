import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from '@/app/components/Sidebar';
import { TopBar } from '@/app/components/TopBar';
import { LoginPage } from '@/app/pages/LoginPage';
import { AdminDashboard } from '@/app/pages/AdminDashboard';
import { EmployeesPage } from '@/app/pages/EmployeesPage';
import { AttendancePage } from '@/app/pages/AttendancePage';
import { LeavePage } from '@/app/pages/LeavePage';
import { PayrollPage } from '@/app/pages/PayrollPage';
import { PerformancePage } from '@/app/pages/PerformancePage';
import { RecruitmentPage } from '@/app/pages/RecruitmentPage';
import { ReportsPage } from '@/app/pages/ReportsPage';
import { SettingsPage } from '@/app/pages/SettingsPage';
import { UserRole } from '@/app/types';
import { Toaster } from '@/app/components/ui/sonner';

function App() {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [userName, setUserName] = useState('');

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    const names = {
      admin: 'Admin User',
      hr: 'HR Manager',
      manager: 'Department Manager',
      employee: 'John Employee'
    };
    setUserName(names[role]);
  };

  if (!userRole) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Sidebar userRole={userRole} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar userName={userName} userRole={userRole} />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/employees" element={<EmployeesPage />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/leave" element={<LeavePage />} />
              <Route path="/payroll" element={<PayrollPage />} />
              <Route path="/performance" element={<PerformancePage />} />
              <Route path="/recruitment" element={<RecruitmentPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
