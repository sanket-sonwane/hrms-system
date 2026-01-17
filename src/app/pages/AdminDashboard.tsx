import { Users, UserCheck, Calendar, TrendingUp } from 'lucide-react';
import { StatCard } from '@/app/components/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { StatusBadge } from '@/app/components/StatusBadge';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { mockLeaveRequests } from '@/app/data/mockData';

const attendanceData = [
  { month: 'Jul', attendance: 92 },
  { month: 'Aug', attendance: 94 },
  { month: 'Sep', attendance: 91 },
  { month: 'Oct', attendance: 95 },
  { month: 'Nov', attendance: 93 },
  { month: 'Dec', attendance: 96 },
];

const departmentData = [
  { name: 'Engineering', value: 45, color: '#3b82f6' },
  { name: 'Marketing', value: 25, color: '#10b981' },
  { name: 'Sales', value: 20, color: '#f59e0b' },
  { name: 'HR', value: 10, color: '#8b5cf6' },
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your organization</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Employees"
          value="248"
          icon={Users}
          trend={{ value: '12% from last month', isPositive: true }}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Active Employees"
          value="234"
          icon={UserCheck}
          trend={{ value: '2% from last month', isPositive: true }}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard
          title="On Leave Today"
          value="14"
          icon={Calendar}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
        />
        <StatCard
          title="Attendance Rate"
          value="94.5%"
          icon={TrendingUp}
          trend={{ value: '1.2% from last month', isPositive: true }}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Attendance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line type="monotone" dataKey="attendance" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Leave Approvals</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockLeaveRequests.filter(r => r.status === 'pending').map((request) => (
                <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{request.employeeName}</div>
                    <div className="text-sm text-gray-600">
                      {request.type} • {request.days} days • {request.startDate}
                    </div>
                  </div>
                  <StatusBadge status={request.status} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Add New Employee
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Import Employees
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Configure Policies
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              Generate Reports
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
              <div>
                <div className="font-medium text-sm">3 pending leave approvals require attention</div>
                <div className="text-xs text-gray-600 mt-1">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5"></div>
              <div>
                <div className="font-medium text-sm">Attendance exceptions detected for 5 employees</div>
                <div className="text-xs text-gray-600 mt-1">4 hours ago</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5"></div>
              <div>
                <div className="font-medium text-sm">Payroll for December has been processed successfully</div>
                <div className="text-xs text-gray-600 mt-1">1 day ago</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
