"use client";

import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

const treatmentPlans = {
  active: [
    {
      id: 1,
      patient: {
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
      title: 'Full Mouth Rehabilitation',
      description: 'Complete dental restoration including crowns and implants',
      startDate: '2024-03-01',
      endDate: '2024-06-30',
      progress: 35,
      procedures: [
        { name: 'Initial Consultation', status: 'completed' },
        { name: 'Teeth Cleaning', status: 'completed' },
        { name: 'Root Canal', status: 'scheduled' },
        { name: 'Crown Placement', status: 'pending' },
      ],
      totalCost: 8500,
      insurance: 'Covered (70%)',
    },
  ],
  completed: [
    {
      id: 2,
      patient: {
        name: 'Michael Chen',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
      title: 'Orthodontic Treatment',
      description: 'Braces and alignment correction',
      startDate: '2023-09-01',
      endDate: '2024-02-28',
      progress: 100,
      procedures: [
        { name: 'Initial Consultation', status: 'completed' },
        { name: 'Braces Installation', status: 'completed' },
        { name: 'Monthly Adjustments', status: 'completed' },
        { name: 'Braces Removal', status: 'completed' },
      ],
      totalCost: 6000,
      insurance: 'Covered (80%)',
    },
  ],
  template: [
    {
      id: 3,
      title: 'Standard Root Canal Treatment',
      description: 'Template for basic root canal procedure',
      procedures: [
        { name: 'Initial Examination', status: 'pending' },
        { name: 'X-Ray Analysis', status: 'pending' },
        { name: 'Root Canal Procedure', status: 'pending' },
        { name: 'Crown Placement', status: 'pending' },
      ],
      estimatedCost: 2500,
      duration: '2-3 weeks',
    },
  ],
};

export function TreatmentPlanList({ status }: { status: 'active' | 'completed' | 'template' }) {
  const plans = treatmentPlans[status];

  return (
    <div className="grid gap-4">
      {plans.map((plan) => (
        <Card key={plan.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              {status !== 'template' && (
                <Avatar>
                  <img
                    alt={plan.patient.name}
                    src={plan.patient.image}
                    className="aspect-square h-full w-full"
                  />
                </Avatar>
              )}
              <div>
                <CardTitle className="text-base">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {status === 'active' && (
                <Badge variant="default">In Progress</Badge>
              )}
              {status === 'completed' && (
                <Badge variant="secondary">Completed</Badge>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Plan</DropdownMenuItem>
                  {status === 'template' && (
                    <DropdownMenuItem>Use Template</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            {status !== 'template' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{plan.progress}%</span>
                  </div>
                  <Progress value={plan.progress} />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Start Date: </span>
                    <span className="font-medium">{plan.startDate}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">End Date: </span>
                    <span className="font-medium">{plan.endDate}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total Cost: </span>
                    <span className="font-medium">${plan.totalCost}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Insurance: </span>
                    <span className="font-medium">{plan.insurance}</span>
                  </div>
                </div>
              </div>
            )}
            {status === 'template' && (
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Est. Cost: </span>
                  <span className="font-medium">${plan.estimatedCost}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Duration: </span>
                  <span className="font-medium">{plan.duration}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}