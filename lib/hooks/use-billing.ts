import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

interface Invoice {
  id: string;
  patientId: string;
  treatmentId: string;
  amount: number;
  status: 'pagado' | 'pendiente' | 'vencido';
  dueDate: Date;
  notes?: string;
}

interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  method: string;
  status: 'exitoso' | 'procesando' | 'fallido';
  date: Date;
}

export function useBilling() {
  const [loading, setLoading] = useState(false);

  const createInvoice = async (data: Omit<Invoice, 'id' | 'status'>) => {
    try {
      setLoading(true);
      const response = await fetch('/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error al crear la factura');

      const invoice = await response.json();
      toast({
        title: 'Éxito',
        description: 'Factura creada con éxito',
      });
      return invoice;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Error al crear la factura',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const processPayment = async (data: Omit<Payment, 'id' | 'status' | 'date'>) => {
    try {
      setLoading(true);
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error al procesar el pago');

      const payment = await response.json();
      toast({
        title: 'Éxito',
        description: 'Pago procesado con éxito',
      });
      return payment;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Error al procesar el pago',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    createInvoice,
    processPayment,
  };
}