import { DollarSign, Download, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { StatusBadge } from '@/app/components/StatusBadge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { mockPayroll } from '@/app/data/mockData';

export function PayrollPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Payroll</h1>
          <p className="text-gray-600 mt-1">Manage salary and compensation</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <DollarSign className="w-4 h-4 mr-2" />
            Run Payroll
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">Total Payroll</div>
            <div className="text-2xl font-bold mt-1">$18.7M</div>
            <div className="text-xs text-green-600 mt-1">This Month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">Average Salary</div>
            <div className="text-2xl font-bold mt-1">$75.4K</div>
            <div className="text-xs text-gray-500 mt-1">Per Employee</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">Total Deductions</div>
            <div className="text-2xl font-bold mt-1">$3.2M</div>
            <div className="text-xs text-gray-500 mt-1">Tax + Benefits</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">Net Disbursed</div>
            <div className="text-2xl font-bold mt-1">$15.5M</div>
            <div className="text-xs text-green-600 mt-1">Processed</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Payroll Records</CardTitle>
            <Select defaultValue="december">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="january">January 2026</SelectItem>
                <SelectItem value="december">December 2025</SelectItem>
                <SelectItem value="november">November 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Month</TableHead>
                <TableHead className="text-right">Basic Salary</TableHead>
                <TableHead className="text-right">Allowances</TableHead>
                <TableHead className="text-right">Deductions</TableHead>
                <TableHead className="text-right">Net Salary</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPayroll.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.employeeName}</TableCell>
                  <TableCell>{record.month}</TableCell>
                  <TableCell className="text-right">
                    ${record.basicSalary.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${record.allowances.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${record.deductions.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    ${record.netSalary.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={record.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="w-4 h-4 mr-1" />
                      Payslip
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Salary Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">Base Salary</div>
                <div className="text-sm text-gray-600">All employees combined</div>
              </div>
              <div className="text-xl font-bold">$16.8M</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">Allowances & Bonuses</div>
                <div className="text-sm text-gray-600">Travel, HRA, Performance</div>
              </div>
              <div className="text-xl font-bold">$1.9M</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">Deductions</div>
                <div className="text-sm text-gray-600">Tax, PF, Insurance</div>
              </div>
              <div className="text-xl font-bold text-red-600">-$3.2M</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
