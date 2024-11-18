import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Download, Send, CreditCard } from 'lucide-react';

interface InvoiceActionsProps {
  invoiceId: string;
  status: string;
  onPay?: () => void;
  onDownload?: () => void;
  onSend?: () => void;
}

export function InvoiceActions({
  invoiceId,
  status,
  onPay,
  onDownload,
  onSend,
}: InvoiceActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {status !== 'paid' && (
          <DropdownMenuItem onClick={onPay}>
            <CreditCard className="mr-2 h-4 w-4" />
            Process Payment
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={onDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onSend}>
          <Send className="mr-2 h-4 w-4" />
          Send to Patient
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}