"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export function BillingSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Métodos de Pago</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-8 bg-primary/10 rounded flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Visa terminando en 4242</p>
                <p className="text-sm text-muted-foreground">Expira 12/24</p>
              </div>
            </div>
            <Button variant="outline">Editar</Button>
          </div>
          <Button variant="outline" className="w-full">
            Agregar Método de Pago
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Información de Facturación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nombre de la Empresa</Label>
              <Input defaultValue="DentFlow Clinic" />
            </div>
            <div className="space-y-2">
              <Label>ID Fiscal</Label>
              <Input defaultValue="12-3456789" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Dirección de Facturación</Label>
            <Input defaultValue="123 Medical Center Dr" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Ciudad</Label>
              <Input defaultValue="San Francisco" />
            </div>
            <div className="space-y-2">
              <Label>Estado</Label>
              <Select defaultValue="CA">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CA">California</SelectItem>
                  <SelectItem value="NY">Nueva York</SelectItem>
                  <SelectItem value="TX">Texas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Código Postal</Label>
              <Input defaultValue="94103" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Guardar Cambios</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Facturación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: 'Mar 1, 2024', amount: '$199.00', status: 'Pagado' },
              { date: 'Feb 1, 2024', amount: '$199.00', status: 'Pagado' },
              { date: 'Jan 1, 2024', amount: '$199.00', status: 'Pagado' },
            ].map((invoice, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">Suscripción Mensual</p>
                  <p className="text-sm text-muted-foreground">{invoice.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-medium">{invoice.amount}</p>
                  <Button variant="outline" size="sm">
                    Descargar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}