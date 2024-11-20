import {
  Users,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  {
    name: 'Total de Pacientes',
    value: '2,345',
    change: '+12.3%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Citas Hoy',
    value: '12',
    change: '+4.5%',
    trend: 'up',
    icon: Calendar,
  },
  {
    name: 'Ingresos Este Mes',
    value: '$45,678',
    change: '-2.3%',
    trend: 'down',
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
          <div
            key={stat.name}
            className="p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-full">
                <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className={cn('flex items-center gap-1 text-sm', trendColor)}>
                {stat.change}
                <TrendIcon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}