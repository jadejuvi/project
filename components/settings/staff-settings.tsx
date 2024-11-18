"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Plus, Search, UserPlus } from 'lucide-react';
import { StaffRegisterDialog } from '@/components/settings/staff-register-dialog';
import { NewStaffDialog } from '@/components/settings/new-staff-dialog';

const staff = [
  {
    id: 1,
    name: 'Dr. Sarah Wilson',
    role: 'Dentist',
    email: 'sarah.wilson@dentflow.com',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    permissions: 'admin',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Orthodontist',
    email: 'michael.chen@dentflow.com',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    permissions: 'staff',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Dental Hygienist',
    email: 'emily.davis@dentflow.com',
    status: 'inactive',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    permissions: 'limited',
  },
];

const statusStyles = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-gray-100 text-gray-700',
};

export function StaffSettings() {
  const [openNewStaff, setOpenNewStaff] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search staff..."
              className="pl-8 w-[300px]"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button onClick={() => setOpenNewStaff(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Staff Info
          </Button>
          <Button onClick={() => setOpenRegister(true)} variant="default">
            <UserPlus className="mr-2 h-4 w-4" />
            Register Staff
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <img
                        alt={member.name}
                        src={member.image}
                        className="aspect-square h-full w-full"
                      />
                    </Avatar>
                    <div className="font-medium">{member.name}</div>
                  </div>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={statusStyles[member.status as keyof typeof statusStyles]}
                  >
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    {member.permissions}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuItem>Manage Permissions</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Deactivate Account
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <StaffRegisterDialog open={openRegister} onOpenChange={setOpenRegister} />
      <NewStaffDialog open={openNewStaff} onOpenChange={setOpenNewStaff} />
    </div>
  );
}