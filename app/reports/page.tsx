"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RevenueChart } from '@/components/reports/revenue-chart';
import { AppointmentStats } from '@/components/reports/appointment-stats';
import { TreatmentDistribution } from '@/components/reports/treatment-distribution';
import { PatientDemographics } from '@/components/reports/patient-demographics';
import { DateRangePicker } from '@/components/reports/date-range-picker';
import { Download } from 'lucide-react';

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([
    new Date(new Date().getFullYear(), new Date().getMonth() - 1),
    new Date(),
  ]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Informes y Análisis</h1>
          <p className="text-muted-foreground">
            Ver información y métricas de rendimiento
          </p>
        </div>
        <div className="flex items-center gap-4">
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
          />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar Informe
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <AppointmentStats />
      </div>

      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList>
          <TabsTrigger value="revenue">Ingresos</TabsTrigger>
          <TabsTrigger value="treatments">Tratamientos</TabsTrigger>
          <TabsTrigger value="demographics">Demografía</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid gap-6">
            <RevenueChart dateRange={dateRange} />
          </div>
        </TabsContent>

        <TabsContent value="treatments" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <TreatmentDistribution />
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <PatientDemographics />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}