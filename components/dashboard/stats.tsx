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
    name: 'Total de Pacientes',
    value: '5.345',
    change: '+12.3%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Turnos de Hoy',
    value: '19',
    change: '+4.5%',
    trend: 'up',
    icon: Calendar,
  },
  {
    name: 'Ganancias del Mes',
    value: '43.678.000',
    change: '-2.3%',
    trend: 'up',
    icon: DollarSign,
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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