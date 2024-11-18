"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const treatments = [
  { name: 'Dental Cleaning', count: 145, percentage: 35 },
  { name: 'Root Canal', count: 89, percentage: 22 },
  { name: 'Fillings', count: 120, percentage: 29 },
  { name: 'Extractions', count: 56, percentage: 14 },
];

export function TreatmentDistribution() {
  const totalTreatments = treatments.reduce((sum, treatment) => sum + treatment.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Treatment Distribution</CardTitle>
        <CardDescription>Most common procedures</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {treatments.map((treatment) => (
            <div key={treatment.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">{treatment.name}</div>
                <div className="text-muted-foreground">
                  {treatment.count} ({treatment.percentage}%)
                </div>
              </div>
              <Progress value={treatment.percentage} className="h-2" />
            </div>
          ))}
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between text-sm">
              <div>Total Treatments</div>
              <div className="font-medium">{totalTreatments}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}