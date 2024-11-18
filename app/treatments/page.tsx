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
          <h1 className="text-3xl font-bold tracking-tight">Treatment Plans</h1>
          <p className="text-muted-foreground">
            Manage and track patient treatment plans
          </p>
        </div>
        <Button onClick={() => setOpen(true)}>New Treatment Plan</Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Plans</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
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