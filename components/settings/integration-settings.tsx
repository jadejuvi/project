"use client";

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const integrations = [

  {
    id: 'payments',
    title: 'Procesamiento de Pagos',
    description: 'Procesa pagos con tarjeta de crédito y en línea',
    connected: true,
    provider: 'Bancard',
  },
  {
    id: 'labs',
    title: 'Laboratorios Dentales',
    description: 'Conectate con laboratorios dentales',
    connected: false,
    provider: 'LabConnect',
  },
  {
    id: 'imaging',
    title: 'Sistemas de Imágenes',
    description: 'Integra con dispositivos de rayos X e imágenes',
    connected: true,
    provider: 'DentalImage',
  },
];

export function IntegrationSettings() {
  return (
    <div className="space-y-6">
      {integrations.map((integration) => (
        <Card key={integration.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle>{integration.title}</CardTitle>
                <CardDescription>{integration.description}</CardDescription>
              </div>
              <Switch
                id={integration.id}
                defaultChecked={integration.connected}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm">
              <div className="text-muted-foreground">
                Proveedor: {integration.provider}
              </div>
              <Button variant="outline" size="sm">
                Configurar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end">
        <Button>Guardar Cambios</Button>
      </div>
    </div>
  );
}