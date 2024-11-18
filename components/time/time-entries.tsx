"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

const timeEntries = [
  {
    id: 1,
    staff: {
      name: 'Dr. Sarah Wilson',
      role: 'Dentist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    date: new Date('2024-03-15'),
    startTime: '09:00 AM',
    endTime: '05:00 PM',
    totalHours: 8,
    status: 'completed',
  },
  {
    id: 2,
    staff: {
      name: 'Dr. Michael Chen',
      role: 'Orthodontist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    date: new Date('2024-03-15'),
    startTime: '10:00 AM',
    endTime: '06:00 PM',
    totalHours: 8,
    status: 'completed',
  },
];

const statusStyles = {
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
};

export function TimeEntries({ 
  dateRange 
}: { 
  dateRange: [Date | undefined, Date | undefined] 
}) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Staff</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Total Hours</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timeEntries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <img
                      alt={entry.staff.name}
                      src={entry.staff.image}
                      className="aspect-square h-full w-full"
                    />
                  </Avatar>
                  <div>
                    <div className="font-medium">{entry.staff.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {entry.staff.role}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{format(entry.date, 'MMM d, yyyy')}</TableCell>
              <TableCell>{entry.startTime}</TableCell>
              <TableCell>{entry.endTime}</TableCell>
              <TableCell>{entry.totalHours} hours</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={statusStyles[entry.status as keyof typeof statusStyles]}
                >
                  {entry.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}