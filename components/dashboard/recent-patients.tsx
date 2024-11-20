"use client";

import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const patients = [
  {
    id: 1,
    name: 'Robert Wilson',
    lastVisit: 'Hace 2 días',
    nextAppointment: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    id: 2,
    name: 'Lisa Anderson',
    lastVisit: 'Hace 1 semana',
    nextAppointment: 'Mar 20, 2024',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
  {
    id: 3,
    name: 'David Martinez',
    lastVisit: 'Hace 2 semanas',
    nextAppointment: 'Apr 5, 2024',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
];

export function RecentPatients() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pacientes Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <img
                    alt={patient.name}
                    src={patient.image}
                    className="aspect-square h-full w-full"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{patient.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    Última consulta: {patient.lastVisit}
                  </p>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Próxima: </span>
                {patient.nextAppointment}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}