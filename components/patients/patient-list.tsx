"use client";

import { Avatar } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Phone, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const patients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 234-567-8901',
    lastVisit: '2024-03-01',
    nextAppointment: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  // Add more patient records as needed
];

export function PatientList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Last Visit</TableHead>
            <TableHead>Next Appointment</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <img
                      alt={patient.name}
                      src={patient.image}
                      className="aspect-square h-full w-full"
                    />
                  </Avatar>
                  <div>
                    <div className="font-medium">{patient.name}</div>
                    <div className="text-sm text-muted-foreground">
                      ID: {patient.id}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-sm">
                    <Phone className="mr-2 h-4 w-4" />
                    {patient.phone}
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="mr-2 h-4 w-4" />
                    {patient.email}
                  </div>
                </div>
              </TableCell>
              <TableCell>{patient.lastVisit}</TableCell>
              <TableCell>{patient.nextAppointment}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Patient</DropdownMenuItem>
                    <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}