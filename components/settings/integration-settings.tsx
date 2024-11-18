"use client";

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const integrations = [
  {
    id: 'insurance',
    title: 'Insurance Verification',
    description: 'Automatically verify patient insurance coverage',
    connected: true,
    provider: 'DentalVerify',
  },
  {
    id: 'payments',
    title: 'Payment Processing',
    description: 'Process credit card and online payments',
    connected: true,
    provider: 'Stripe',
  },
  {
    id: 'labs',
    title: 'Dental Labs',
    description: 'Connect with dental laboratories',
    connected: false,
    provider: 'LabConnect',
  },
  {
    id: 'imaging',
    title: 'Imaging Systems',
    description: 'Integrate with X-ray and imaging devices',
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
                Provider: {integration.provider}
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}