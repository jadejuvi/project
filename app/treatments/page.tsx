"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TreatmentPlanList } from '@/components/treatments/treatment-plan-list';
import { NewTreatmentPlanDialog } from '@/components/treatments/new-treatment-plan-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TreatmentsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Planes de Tratamiento</h1>
          <p className="text-muted-foreground">
            Administra y rastrea los planes de tratamiento de los pacientes
          </p>
        </div>
        <Button onClick={() => setOpen(true)}>Nuevo Plan de Tratamiento</Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Planes Activos</TabsTrigger>
          <TabsTrigger value="completed">Completados</TabsTrigger>
          <TabsTrigger value="templates">Plantillas</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <TreatmentPlanList status="active" />
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <TreatmentPlanList status="completed" />
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <TreatmentPlanList status="template" />
        </TabsContent>
      </Tabs>

      <NewTreatmentPlanDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}