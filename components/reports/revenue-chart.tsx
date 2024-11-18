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
  { month: 'Jan', revenue: 45000, target: 50000 },
  { month: 'Feb', revenue: 52000, target: 50000 },
  { month: 'Mar', revenue: 48000, target: 50000 },
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
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly revenue performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {monthlyRevenue.map((month) => (
            <div key={month.month} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{month.month}</p>
                  <p className="text-2xl font-bold">${month.revenue.toLocaleString()}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Target: ${month.target.toLocaleString()}
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
              <div>Average Revenue</div>
              <div className="font-medium">${averageRevenue.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}