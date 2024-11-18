"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  method: string;
  date: Date;
  status: 'successful' | 'processing' | 'failed';
}

const statusStyles = {
  successful: 'bg-green-100 text-green-700',
  processing: 'bg-blue-100 text-blue-700',
  failed: 'bg-red-100 text-red-700',
};

export function PaymentHistory({ searchQuery }: { searchQuery: string }) {
  const payments: Payment[] = [
    {
      id: 'PAY-001',
      invoiceId: 'INV-001',
      amount: 850.00,
      method: 'Credit Card',
      date: new Date('2024-03-01'),
      status: 'successful',
    },
    {
      id: 'PAY-002',
      invoiceId: 'INV-002',
      amount: 1200.00,
      method: 'Insurance',
      date: new Date('2024-03-05'),
      status: 'processing',
    },
  ];

  const filteredPayments = payments.filter(payment =>
    payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.invoiceId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.method.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Payment ID</TableHead>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPayments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.id}</TableCell>
              <TableCell>{payment.invoiceId}</TableCell>
              <TableCell>${payment.amount.toFixed(2)}</TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell>{format(payment.date, 'MMM d, yyyy')}</TableCell>
              <TableCell>
                <Badge
                  className={statusStyles[payment.status]}
                  variant="outline"
                >
                  {payment.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}