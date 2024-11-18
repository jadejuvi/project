"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  MoreHorizontal, 
  Clock,
  AlertCircle,
  CheckCircle2 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const tasks = [
  {
    id: 1,
    title: 'Review patient records',
    patient: 'Sarah Johnson',
    dueTime: '10:30 AM',
    priority: 'high',
    status: 'pending',
  },
  {
    id: 2,
    title: 'Update treatment notes',
    patient: 'Michael Chen',
    dueTime: '02:00 PM',
    priority: 'medium',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Follow-up call',
    patient: 'Emily Davis',
    dueTime: '04:00 PM',
    priority: 'low',
    status: 'pending',
  },
];

const priorityStyles = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-yellow-100 text-yellow-700',
  low: 'bg-blue-100 text-blue-700',
};

export function StaffTaskList() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Checkbox
                checked={completedTasks.includes(task.id)}
                onCheckedChange={() => toggleTask(task.id)}
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{task.title}</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-muted-foreground">
                      Patient: {task.patient}
                    </span>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {task.dueTime}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={priorityStyles[task.priority as keyof typeof priorityStyles]}
                  >
                    {task.priority}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}