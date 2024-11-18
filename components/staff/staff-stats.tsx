import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

const stats = [
  {
    title: "Today's Appointments",
    value: '8',
    change: '+2',
    trend: 'up',
    icon: Calendar,
  },
  {
    title: 'Hours Worked',
    value: '6.5h',
    change: '1.5h left',
    trend: 'neutral',
    icon: Clock,
  },
  {
    title: 'Patients Seen',
    value: '5',
    change: '3 remaining',
    trend: 'neutral',
    icon: Users,
  },
  {
    title: 'Tasks Completed',
    value: '12',
    change: '+4',
    trend: 'up',
    icon: CheckCircle2,
  },
];

export function StaffStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? TrendingUp : 
                         stat.trend === 'down' ? TrendingDown : null;
        const trendColor = stat.trend === 'up' ? 'text-green-500' : 
                          stat.trend === 'down' ? 'text-red-500' : 'text-muted-foreground';

        return (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${trendColor}`}>
                  {stat.change}
                  {TrendIcon && <TrendIcon className="h-4 w-4" />}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}