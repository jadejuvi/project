"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PracticeSettings } from '@/components/settings/practice-settings';
import { StaffSettings } from '@/components/settings/staff-settings';
import { NotificationSettings } from '@/components/settings/notification-settings';
import { IntegrationSettings } from '@/components/settings/integration-settings';
import { BillingSettings } from '@/components/settings/billing-settings';

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
        <p className="text-muted-foreground">
          Administra tus preferencias y las configuraciones de tu cuenta
        </p>
      </div>

      <Tabs defaultValue="practice" className="space-y-6">
        <TabsList>
          <TabsTrigger value="practice">Clínica</TabsTrigger>
          <TabsTrigger value="staff">Profesional</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
          <TabsTrigger value="integrations">Integraciones</TabsTrigger>
          <TabsTrigger value="billing">Suscripción</TabsTrigger>
        </TabsList>

        <TabsContent value="practice" className="space-y-6">
          <PracticeSettings />
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <StaffSettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <IntegrationSettings />
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <BillingSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}