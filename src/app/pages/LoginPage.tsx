import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { UserRole } from '@/app/types';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('admin');
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(selectedRole);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-blue-600">HRMS</h1>
            <p className="text-sm text-gray-600 mt-1">People Management System</p>
          </div>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Select your role to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" defaultValue="admin@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" defaultValue="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Login As</Label>
            <Select value={selectedRole} onValueChange={(value) => setSelectedRole(value as UserRole)}>
              <SelectTrigger id="role">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="hr">HR Manager</SelectItem>
                <SelectItem value="manager">Department Manager</SelectItem>
                <SelectItem value="employee">Employee</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" onClick={handleLogin}>
            Sign In
          </Button>
          <p className="text-xs text-center text-gray-600">
            Demo credentials - All roles use: password
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
