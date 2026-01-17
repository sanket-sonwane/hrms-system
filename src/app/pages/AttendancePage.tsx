import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { StatusBadge } from '@/app/components/StatusBadge';
import { Clock, LogIn, LogOut, Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { mockAttendance } from '@/app/data/mockData';

export function AttendancePage() {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Attendance</h1>
        <p className="text-gray-600 mt-1">Track and manage attendance records</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Today's Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <Clock className="w-12 h-12 mx-auto text-blue-600 mb-2" />
              <div className="text-3xl font-bold">{currentTime}</div>
              <div className="text-sm text-gray-600 mt-1">Current Time</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button className="w-full">
                <LogIn className="w-4 h-4 mr-2" />
                Check In
              </Button>
              <Button variant="outline" className="w-full">
                <LogOut className="w-4 h-4 mr-2" />
                Check Out
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600">This Month</div>
                <div className="text-2xl font-bold mt-1">22 Days</div>
                <div className="text-xs text-gray-500">Present</div>
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="text-sm text-gray-600">Late</div>
                  <div className="text-lg font-bold">2</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Absent</div>
                  <div className="text-lg font-bold">0</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Half Day</div>
                  <div className="text-lg font-bold">1</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600">Average Hours</div>
                <div className="text-2xl font-bold mt-1">9.2 hrs</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="text-sm text-gray-600">This Week</div>
                  <div className="text-lg font-bold">46 hrs</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">This Month</div>
                  <div className="text-lg font-bold">182 hrs</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Attendance Records</CardTitle>
            <div className="flex items-center gap-3">
              <Select defaultValue="january">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="january">January 2026</SelectItem>
                  <SelectItem value="december">December 2025</SelectItem>
                  <SelectItem value="november">November 2025</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Calendar View
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAttendance.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.employeeName}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.checkIn}</TableCell>
                  <TableCell>{record.checkOut}</TableCell>
                  <TableCell>{record.hours}h</TableCell>
                  <TableCell>
                    <StatusBadge status={record.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
