"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const monthlyRevenue = [
  { month: 'Ene', revenue: 7000000, target: 10000000 },
  { month: 'Feb', revenue: 12000000, target: 10000000 },
  { month: 'Mar', revenue: 8750000, target: 10000000 },
];

export function RevenueChart({ 
  dateRange 
}: { 
  dateRange: [Date | undefined, Date | undefined] 
}) {
  const totalRevenue = monthlyRevenue.reduce((sum, month) => sum + month.revenue, 0);
  const averageRevenue = totalRevenue / monthlyRevenue.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen de Ingresos</CardTitle>
        <CardDescription>Rendimiento mensual de ingresos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {monthlyRevenue.map((month) => (
            <div key={month.month} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{month.month}</p>
                  <p className="text-2xl font-bold">Gs. {month.revenue.toLocaleString('es-PY')}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Objetivo: Gs. {month.target.toLocaleString('es-PY')}
                </div>
              </div>
              <Progress
                value={(month.revenue / month.target) * 100}
                className="h-2"
              />
            </div>
          ))}
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between text-sm">
              <div>Ingreso Promedio</div>
              <div className="font-medium">Gs. {averageRevenue.toLocaleString('es-PY')}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}