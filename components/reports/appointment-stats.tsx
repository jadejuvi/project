"use client";

import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Users, 
  Clock, 
  UserCheck,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Appointments',
    value: '182',
    change: '+12.3%',
    trend: 'up',
    icon: Calendar,
  },
  {
    title: 'New Patients',
    value: '48',
    change: '+4.5%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Avg. Wait Time',
    value: '14min',
    change: '-2.3%',
    trend: 'down',
    icon: Clock,
  },
  {
    title: 'Completion Rate',
    value: '94%',
    change: '+1.5%',
    trend: 'up',
    icon: UserCheck,
  },
];

export function AppointmentStats() {
  return stats.map((stat) => {
    const Icon = stat.icon;
    const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
    const trendColor = stat.trend === 'up' ? 'text-green-500' : 'text-red-500';

    return (
      <Card key={stat.title}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-primary/10 rounded-full">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className={`flex items-center gap-1 text-sm ${trendColor}`}>
              {stat.change}
              <TrendIcon className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </div>
        </CardContent>
      </Card>
    );
  });
}