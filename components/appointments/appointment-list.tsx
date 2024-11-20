"use client";

import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const appointments = [
  {
    id: 1,
    time: '09:00 AM',
    patient: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    type: 'Chequeo',
    status: 'próximo',
    duration: '30 min',
  },
  // Agrega más citas según sea necesario
];

export function AppointmentList({ selectedDate }: { selectedDate?: Date }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">
          Horario para el {selectedDate ? format(selectedDate, 'd \'de\' MMMM \'de\' yyyy', { locale: es }) : 'Hoy'}
        </h2>
      </div>

      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <Image
                    alt={appointment.patient.name}
                    src={appointment.patient.image}
                    className="aspect-square h-full w-full"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <div>
                  <CardTitle className="text-base">
                    {appointment.patient.name}
                  </CardTitle>
                  <CardDescription>{appointment.type}</CardDescription>
                </div>
              </div>
              <Badge
                variant={appointment.status === 'próximo' ? 'default' : 'secondary'}
              >
                {appointment.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div>
                    <span className="text-muted-foreground">Hora: </span>
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duración: </span>
                    <span className="font-medium">{appointment.duration}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Ver Detalles
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}