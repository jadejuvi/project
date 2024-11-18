"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  {
    name: 'Total Patients',
    value: '2,345',
    change: '+12.3%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Appointments Today',
    value: '12',
    change: '+4.5%',
    trend: 'up',
    icon: Calendar,
  },
  {
    name: 'Revenue This Month',
    value: '$45,678',
    change: '-2.3%',
    trend: 'down',
    icon: DollarSign,
  },
  {
    name: 'Average Wait Time',
    value: '14min',
    change: '-5.2%',
    trend: 'down',
    icon: Clock,
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;
        const trendColor = stat.trend === 'up' ? 'text-green-500' : 'text-red-500';

        return (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className={cn('flex items-center text-sm', trendColor)}>
                <TrendIcon className="mr-1 h-4 w-4" />
                {stat.change}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}