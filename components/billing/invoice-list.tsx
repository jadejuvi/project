"use client";

import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Download, Send } from 'lucide-react';
import { format } from 'date-fns';

interface Invoice {
  id: string;
  patient: {
    name: string;
    image?: string;
  };
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  date: Date;
  dueDate: Date;
  treatment: string;
}

const statusStyles = {
  paid: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  overdue: 'bg-red-100 text-red-700',
};

export function InvoiceList({ searchQuery }: { searchQuery: string }) {
  const invoices: Invoice[] = [
    {
      id: 'INV-001',
      patient: {
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
      amount: 850.00,
      status: 'paid',
      date: new Date('2024-03-01'),
      dueDate: new Date('2024-03-15'),
      treatment: 'Root Canal + Crown',
    },
    {
      id: 'INV-002',
      patient: {
        name: 'Michael Chen',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
      amount: 1200.00,
      status: 'pending',
      date: new Date('2024-03-05'),
      dueDate: new Date('2024-03-19'),
      treatment: 'Dental Implant',
    },
  ];

  const filteredInvoices = invoices.filter(invoice =>
    invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.treatment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Patient</TableHead>
            <TableHead>Treatment</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    {invoice.patient.image && (
                      <img
                        alt={invoice.patient.name}
                        src={invoice.patient.image}
                        className="aspect-square h-full w-full"
                      />
                    )}
                  </Avatar>
                  <div className="font-medium">{invoice.patient.name}</div>
                </div>
              </TableCell>
              <TableCell>{invoice.treatment}</TableCell>
              <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  className={statusStyles[invoice.status]}
                  variant="outline"
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{format(invoice.date, 'MMM d, yyyy')}</TableCell>
              <TableCell>{format(invoice.dueDate, 'MMM d, yyyy')}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Send className="mr-2 h-4 w-4" />
                      Send to Patient
                    </DropdownMenuItem>
                    <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
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