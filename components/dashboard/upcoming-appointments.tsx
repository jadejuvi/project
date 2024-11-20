"use client";

import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const appointments = [
  {
    id: 1,
    patient: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    time: '09:00 AM',
    type: 'Limpieza',
  },
  {
    id: 2,
    patient: {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    time: '10:30 AM',
    type: 'Extracción',
  },
  {
    id: 3,
    patient: {
      name: 'Emily Davis',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    time: '02:00 PM',
    type: 'Evaluación',
  },
];

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Turnos para Hoy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <img
                    alt={appointment.patient.name}
                    src={appointment.patient.image}
                    className="aspect-square h-full w-full"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{appointment.patient.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {appointment.type}
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium">{appointment.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}