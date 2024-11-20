import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const citas = [
  {
    id: 1,
    paciente: 'Sarah Johnson',
    hora: '09:00 AM',
    tipo: 'Limpieza Dental',
    imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 2,
    paciente: 'Michael Chen',
    hora: '10:30 AM',
    tipo: 'Conducto Radicular',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: 3,
    paciente: 'Emily Davis',
    hora: '02:00 PM',
    tipo: 'Chequeo',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];

export function CitasFuturas() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Citas de Hoy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {citas.map((cita) => (
            <div
              key={cita.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <Image
                    alt={cita.paciente}
                    src={cita.imagen}
                    className="aspect-square h-full w-full"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{cita.paciente}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cita.tipo}
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium">{cita.hora}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}