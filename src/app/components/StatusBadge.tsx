import { cn } from '@/app/components/ui/utils';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusStyles = {
    approved: 'bg-green-100 text-green-800',
    pending: 'bg-orange-100 text-orange-800',
    rejected: 'bg-red-100 text-red-800',
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    present: 'bg-green-100 text-green-800',
    absent: 'bg-red-100 text-red-800',
    late: 'bg-orange-100 text-orange-800',
    'half-day': 'bg-yellow-100 text-yellow-800',
    processed: 'bg-blue-100 text-blue-800',
    open: 'bg-green-100 text-green-800',
    closed: 'bg-gray-100 text-gray-800',
    'in-review': 'bg-blue-100 text-blue-800',
    interview: 'bg-purple-100 text-purple-800',
    offered: 'bg-green-100 text-green-800',
    'on-track': 'bg-green-100 text-green-800',
    'at-risk': 'bg-orange-100 text-orange-800',
    completed: 'bg-blue-100 text-blue-800',
  };

  const style = statusStyles[status.toLowerCase() as keyof typeof statusStyles] || 'bg-gray-100 text-gray-800';

  return (
    <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-medium', style, className)}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
