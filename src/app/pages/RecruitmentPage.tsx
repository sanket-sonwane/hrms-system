import { Plus, Users, Briefcase } from 'lucide-react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { mockJobOpenings, mockCandidates } from '@/app/data/mockData';

export function RecruitmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Recruitment</h1>
          <p className="text-gray-600 mt-1">Manage job openings and candidates</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Post New Job
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Open Positions</div>
                <div className="text-2xl font-bold mt-1">12</div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Total Applicants</div>
                <div className="text-2xl font-bold mt-1">73</div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Interviews This Week</div>
                <div className="text-2xl font-bold mt-1">8</div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="jobs" className="space-y-6">
        <TabsList>
          <TabsTrigger value="jobs">Job Openings</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="pipeline">Hiring Pipeline</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Job Postings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Posted</TableHead>
                    <TableHead>Applicants</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockJobOpenings.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.department}</TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell className="capitalize">{job.type.replace('-', ' ')}</TableCell>
                      <TableCell>{job.posted}</TableCell>
                      <TableCell>{job.applicants}</TableCell>
                      <TableCell>
                        <StatusBadge status={job.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="candidates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Candidate Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCandidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell className="font-medium">{candidate.name}</TableCell>
                      <TableCell>{candidate.email}</TableCell>
                      <TableCell>{candidate.position}</TableCell>
                      <TableCell>{candidate.experience}</TableCell>
                      <TableCell>{candidate.appliedDate}</TableCell>
                      <TableCell>
                        <StatusBadge status={candidate.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Review</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pipeline">
          <Card>
            <CardHeader>
              <CardTitle>Hiring Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Applied (24)</h4>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="p-3">
                        <div className="font-medium text-sm">Candidate {i}</div>
                        <div className="text-xs text-gray-600">Frontend Dev</div>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Screening (12)</h4>
                  <div className="space-y-2">
                    {[1, 2].map((i) => (
                      <Card key={i} className="p-3 bg-blue-50">
                        <div className="font-medium text-sm">Candidate {i}</div>
                        <div className="text-xs text-gray-600">Backend Dev</div>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Interview (8)</h4>
                  <div className="space-y-2">
                    {[1, 2].map((i) => (
                      <Card key={i} className="p-3 bg-purple-50">
                        <div className="font-medium text-sm">Candidate {i}</div>
                        <div className="text-xs text-gray-600">Designer</div>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Offered (3)</h4>
                  <div className="space-y-2">
                    {[1].map((i) => (
                      <Card key={i} className="p-3 bg-green-50">
                        <div className="font-medium text-sm">Candidate {i}</div>
                        <div className="text-xs text-gray-600">Product Manager</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
