"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const schedule = [
  {
    id: 1,
    staff: {
      name: 'Dra. Sarah Wilson',
      role: 'Dentista',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    shifts: [
      { day: 'Lunes', hours: '9:00 AM - 5:00 PM', status: 'working' },
      { day: 'Martes', hours: '9:00 AM - 5:00 PM', status: 'working' },
      { day: 'Miércoles', hours: '9:00 AM - 5:00 PM', status: 'working' },
      { day: 'Jueves', hours: '9:00 AM - 5:00 PM', status: 'working' },
      { day: 'Viernes', hours: '9:00 AM - 3:00 PM', status: 'working' },
    ],
  },
  {
    id: 2,
    staff: {
      name: 'Dr. Michael Chen',
      role: 'Ortodontista',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    shifts: [
      { day: 'Lunes', hours: '10:00 AM - 6:00 PM', status: 'working' },
      { day: 'Martes', hours: '10:00 AM - 6:00 PM', status: 'working' },
      { day: 'Miércoles', hours: 'Libre', status: 'off' },
      { day: 'Jueves', hours: '10:00 AM - 6:00 PM', status: 'working' },
      { day: 'Viernes', hours: '10:00 AM - 6:00 PM', status: 'working' },
    ],
  },
];

const statusStyles = {
  working: 'bg-green-100 text-green-700',
  off: 'bg-gray-100 text-gray-700',
  leave: 'bg-yellow-100 text-yellow-700',
};

export function StaffSchedule({ 
  dateRange 
}: { 
  dateRange: [Date | undefined, Date | undefined] 
}) {
  return (
    <div className="space-y-6">
      {schedule.map((staff) => (
        <Card key={staff.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <Image
                    alt={staff.staff.name}
                    src={staff.staff.image}
                    className="aspect-square h-full w-full"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <div>
                  <CardTitle>{staff.staff.name}</CardTitle>
                  <CardDescription>{staff.staff.role}</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              {staff.shifts.map((shift) => (
                <div
                  key={shift.day}
                  className="p-4 rounded-lg bg-muted/50"
                >
                  <div className="font-medium mb-2">{shift.day}</div>
                  <Badge
                    variant="outline"
                    className={statusStyles[shift.status as keyof typeof statusStyles]}
                  >
                    {shift.hours}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}