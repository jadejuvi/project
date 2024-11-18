"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ageGroups = [
  { range: '0-17', count: 156, percentage: 15 },
  { range: '18-34', count: 342, percentage: 33 },
  { range: '35-50', count: 289, percentage: 28 },
  { range: '51-69', count: 167, percentage: 16 },
  { range: '70+', count: 83, percentage: 8 },
];

const insuranceTypes = [
  { type: 'Private', count: 523, percentage: 51 },
  { type: 'Medicare', count: 312, percentage: 30 },
  { type: 'Self-Pay', count: 196, percentage: 19 },
];

export function PatientDemographics() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Age Distribution</CardTitle>
          <CardDescription>Patient age groups</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ageGroups.map((group) => (
              <div key={group.range} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">{group.range} years</div>
                  <div className="text-muted-foreground">
                    {group.count} ({group.percentage}%)
                  </div>
                </div>
                <Progress value={group.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Insurance Distribution</CardTitle>
          <CardDescription>Patient insurance types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insuranceTypes.map((insurance) => (
              <div key={insurance.type} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">{insurance.type}</div>
                  <div className="text-muted-foreground">
                    {insurance.count} ({insurance.percentage}%)
                  </div>
                </div>
                <Progress value={insurance.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}