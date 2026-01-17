import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Switch } from '@/app/components/ui/switch';
import { Building2, Shield, Calendar, DollarSign } from 'lucide-react';
import { mockHolidays } from '@/app/data/mockData';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600 mt-1">Configure system settings and policies</p>
      </div>

      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="leave">Leave Policies</TabsTrigger>
          <TabsTrigger value="holidays">Holidays</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Company Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input defaultValue="Acme Corporation" />
                </div>
                <div className="space-y-2">
                  <Label>Registration Number</Label>
                  <Input defaultValue="REG-2024-001" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" defaultValue="info@acmecorp.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label>Address</Label>
                  <Input defaultValue="123 Business Street, San Francisco, CA 94105" />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Departments & Roles</CardTitle>
              <Button>Add Department</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'].map((dept) => (
                  <div key={dept} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{dept}</div>
                      <div className="text-sm text-gray-600">45 employees</div>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leave" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Leave Policy Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Annual Leave</div>
                    <div className="text-sm text-gray-600">Yearly allocation per employee</div>
                  </div>
                  <Input className="w-24" type="number" defaultValue="20" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Sick Leave</div>
                    <div className="text-sm text-gray-600">Yearly allocation per employee</div>
                  </div>
                  <Input className="w-24" type="number" defaultValue="10" />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Casual Leave</div>
                    <div className="text-sm text-gray-600">Yearly allocation per employee</div>
                  </div>
                  <Input className="w-24" type="number" defaultValue="7" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Carry Forward Unused Leave</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Require Manager Approval</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Allow Half-Day Leaves</Label>
                  <Switch defaultChecked />
                </div>
              </div>
              <Button>Save Policy</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="holidays" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Public Holidays 2026</CardTitle>
              <Button>Add Holiday</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockHolidays.map((holiday, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{holiday.name}</div>
                      <div className="text-sm text-gray-600">{holiday.date}</div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Role Permissions Matrix
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Module</th>
                      <th className="text-center p-3">Admin</th>
                      <th className="text-center p-3">HR</th>
                      <th className="text-center p-3">Manager</th>
                      <th className="text-center p-3">Employee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      'Employee Management',
                      'Attendance',
                      'Leave Management',
                      'Payroll',
                      'Performance',
                      'Recruitment',
                      'Reports'
                    ].map((module) => (
                      <tr key={module} className="border-b">
                        <td className="p-3">{module}</td>
                        <td className="text-center p-3">
                          <Switch defaultChecked />
                        </td>
                        <td className="text-center p-3">
                          <Switch defaultChecked={module !== 'System Settings'} />
                        </td>
                        <td className="text-center p-3">
                          <Switch defaultChecked={['Attendance', 'Leave Management', 'Performance'].includes(module)} />
                        </td>
                        <td className="text-center p-3">
                          <Switch defaultChecked={['Attendance', 'Leave Management', 'Performance'].includes(module)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <Button>Save Permissions</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
