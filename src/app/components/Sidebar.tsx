import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Clock,
  Calendar,
  DollarSign,
  TrendingUp,
  Briefcase,
  FileText,
  Settings
} from 'lucide-react';
import { cn } from '@/app/components/ui/utils';
import { UserRole } from '@/app/types';

interface SidebarProps {
  userRole: UserRole;
}

interface NavItem {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  roles: UserRole[];
}

const navItems: NavItem[] = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', roles: ['admin', 'hr', 'manager', 'employee'] },
  { to: '/employees', icon: Users, label: 'Employees', roles: ['admin', 'hr', 'manager'] },
  { to: '/attendance', icon: Clock, label: 'Attendance', roles: ['admin', 'hr', 'manager', 'employee'] },
  { to: '/leave', icon: Calendar, label: 'Leave', roles: ['admin', 'hr', 'manager', 'employee'] },
  { to: '/payroll', icon: DollarSign, label: 'Payroll', roles: ['admin', 'hr'] },
  { to: '/performance', icon: TrendingUp, label: 'Performance', roles: ['admin', 'hr', 'manager', 'employee'] },
  { to: '/recruitment', icon: Briefcase, label: 'Recruitment', roles: ['admin', 'hr'] },
  { to: '/reports', icon: FileText, label: 'Reports', roles: ['admin', 'hr', 'manager'] },
  { to: '/settings', icon: Settings, label: 'Settings', roles: ['admin', 'hr'] },
];

export function Sidebar({ userRole }: SidebarProps) {
  const location = useLocation();

  const filteredItems = navItems.filter(item => item.roles.includes(userRole));

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">HRMS</h1>
        <p className="text-sm text-gray-500 mt-1">People Management</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);

          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Logged in as <span className="font-medium capitalize">{userRole}</span>
        </div>
      </div>
    </div>
  );
}
