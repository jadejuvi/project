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
      title: 'Rehabilitación Completa de la Boca',
      description: 'Restauración dental completa incluyendo coronas e implantes',
      startDate: '2024-03-01',
      endDate: '2024-06-30',
      progress: 35,
      procedures: [
        { name: 'Consulta Inicial', status: 'completed' },
        { name: 'Limpieza Dental', status: 'completed' },
        { name: 'Tratamiento de Conducto', status: 'scheduled' },
        { name: 'Colocación de Corona', status: 'pending' },
      ],
      totalCost: 8500,
      insurance: 'Cubierto (70%)',
    },
  ],
  completed: [
    {
      id: 2,
      patient: {
        name: 'Michael Chen',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
      title: 'Tratamiento de Ortodoncia',
      description: 'Frenos y corrección de alineación',
      startDate: '2023-09-01',
      endDate: '2024-02-28',
      progress: 100,
      procedures: [
        { name: 'Consulta Inicial', status: 'completed' },
        { name: 'Instalación de Frenos', status: 'completed' },
        { name: 'Ajustes Mensuales', status: 'completed' },
        { name: 'Remoción de Frenos', status: 'completed' },
      ],
      totalCost: 6000,
      insurance: 'Cubierto (80%)',
    },
  ],
  template: [
    {
      id: 3,
      title: 'Plantilla de Tratamiento de Conducto Estándar',
      description: 'Plantilla para procedimiento básico de tratamiento de conducto',
      procedures: [
        { name: 'Examen Inicial', status: 'pending' },
        { name: 'Análisis de Rayos X', status: 'pending' },
        { name: 'Procedimiento de Conducto', status: 'pending' },
        { name: 'Colocación de Corona', status: 'pending' },
      ],
      estimatedCost: 2500,
      duration: '2-3 semanas',
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
                <Badge variant="default">En Progreso</Badge>
              )}
              {status === 'completed' && (
                <Badge variant="secondary">Completado</Badge>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                  <DropdownMenuItem>Editar Plan</DropdownMenuItem>
                  {status === 'template' && (
                    <DropdownMenuItem>Usar Plantilla</DropdownMenuItem>
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
                    <span className="text-muted-foreground">Progreso</span>
                    <span className="font-medium">{plan.progress}%</span>
                  </div>
                  <Progress value={plan.progress} />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Fecha de Inicio: </span>
                    <span className="font-medium">{plan.startDate}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Fecha de Fin: </span>
                    <span className="font-medium">{plan.endDate}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Costo Total: </span>
                    <span className="font-medium">${plan.totalCost}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Seguro: </span>
                    <span className="font-medium">{plan.insurance}</span>
                  </div>
                </div>
              </div>
            )}
            {status === 'template' && (
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Costo Estimado: </span>
                  <span className="font-medium">${plan.estimatedCost}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Duración: </span>
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