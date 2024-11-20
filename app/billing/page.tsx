"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InvoiceList } from '@/components/billing/invoice-list';
import { NewInvoiceDialog } from '@/components/billing/new-invoice-dialog';
import { PaymentHistory } from '@/components/billing/payment-history';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter } from 'lucide-react';

export default function BillingPage() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Facturación</h1>
          <p className="text-muted-foreground">Gestionar facturas y pagos</p>
        </div>
        <Button onClick={() => setOpen(true)}>Crear Factura</Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar facturas..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filtrar
        </Button>
      </div>

      <Tabs defaultValue="invoices" className="space-y-4">
        <TabsList>
          <TabsTrigger value="invoices">Facturas</TabsTrigger>
          <TabsTrigger value="payments">Historial de Pagos</TabsTrigger>
        </TabsList>
        <TabsContent value="invoices" className="space-y-4">
          <InvoiceList searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <PaymentHistory searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>

      <NewInvoiceDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}