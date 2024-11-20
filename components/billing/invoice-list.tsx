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
import Image from 'next/image';

interface Invoice {
  id: string;
  patient: {
    name: string;
    image?: string;
  };
  amount: number;
  status: 'pagado' | 'pendiente' | 'vencido';
  date: Date;
  dueDate: Date;
  treatment: string;
}

const statusStyles = {
  pagado: 'bg-green-100 text-green-700',
  pendiente: 'bg-yellow-100 text-yellow-700',
  vencido: 'bg-red-100 text-red-700',
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
      status: 'pagado',
      date: new Date('2024-03-01'),
      dueDate: new Date('2024-03-15'),
      treatment: 'Limpieza + Blanqueamiento',
    },
    {
      id: 'INV-002',
      patient: {
        name: 'Michael Chen',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
      amount: 1200.00,
      status: 'pendiente',
      date: new Date('2024-03-05'),
      dueDate: new Date('2024-03-19'),
      treatment: 'Implante',
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
            <TableHead>Factura</TableHead>
            <TableHead>Paciente</TableHead>
            <TableHead>Tratamiento</TableHead>
            <TableHead>Monto</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Vencimiento</TableHead>
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
                      <Image
                        alt={invoice.patient.name}
                        src={invoice.patient.image}
                        className="aspect-square h-full w-full"
                        width={100}
                        height={100}
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
              <TableCell>{format(invoice.date, 'd MMM, yyyy')}</TableCell>
              <TableCell>{format(invoice.dueDate, 'd MMM, yyyy')}</TableCell>
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
                      Descargar PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar al Paciente
                    </DropdownMenuItem>
                    <DropdownMenuItem>Marcar como Pagado</DropdownMenuItem>
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