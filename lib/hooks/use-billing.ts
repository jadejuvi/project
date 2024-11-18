import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

interface Invoice {
  id: string;
  patientId: string;
  treatmentId: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: Date;
  notes?: string;
}

interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  method: string;
  status: 'successful' | 'processing' | 'failed';
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

      if (!response.ok) throw new Error('Failed to create invoice');

      const invoice = await response.json();
      toast({
        title: 'Success',
        description: 'Invoice created successfully',
      });
      return invoice;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to create invoice',
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

      if (!response.ok) throw new Error('Failed to process payment');

      const payment = await response.json();
      toast({
        title: 'Success',
        description: 'Payment processed successfully',
      });
      return payment;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to process payment',
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