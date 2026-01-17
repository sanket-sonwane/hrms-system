import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Progress } from '@/app/components/ui/progress';
import { Plus, Target } from 'lucide-react';
import { StatusBadge } from '@/app/components/StatusBadge';
import { mockPerformanceGoals } from '@/app/data/mockData';

export function PerformancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Performance Management</h1>
          <p className="text-gray-600 mt-1">Track goals and performance reviews</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Set New Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Active Goals</div>
                <div className="text-2xl font-bold mt-1">12</div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">Completed</div>
            <div className="text-2xl font-bold mt-1">8</div>
            <div className="text-xs text-green-600 mt-1">This quarter</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600">Average Progress</div>
            <div className="text-2xl font-bold mt-1">67%</div>
            <div className="text-xs text-gray-500 mt-1">Across all goals</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockPerformanceGoals.map((goal) => (
            <Card key={goal.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{goal.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
                  </div>
                  <StatusBadge status={goal.status} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="text-xs text-gray-500">Due: {goal.dueDate}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">Q4 2025 Review</div>
                <div className="text-sm text-gray-600">Manager: John Smith</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">4.5/5.0</div>
                <div className="text-xs text-gray-600">Excellent</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">Q3 2025 Review</div>
                <div className="text-sm text-gray-600">Manager: John Smith</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-blue-600">4.2/5.0</div>
                <div className="text-xs text-gray-600">Very Good</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
