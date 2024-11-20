import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const pacientes = [
  {
    id: 1,
    nombre: 'Robert Wilson',
    ultimaVisita: 'hace 2 días',
    proximaCita: '15 de marzo de 2024',
    imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    id: 2,
    nombre: 'Lisa Anderson',
    ultimaVisita: 'hace 1 semana',
    proximaCita: '20 de marzo de 2024',
    imagen: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
  {
    id: 3,
    nombre: 'David Martinez',
    ultimaVisita: 'hace 2 semanas',
    proximaCita: '5 de abril de 2024',
    imagen: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
];

export function PacientesRecientes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pacientes Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pacientes.map((paciente) => (
            <div
              key={paciente.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <Image
                    alt={paciente.nombre}
                    src={paciente.imagen}
                    layout="fill"
                    className="aspect-square h-full w-full"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{paciente.nombre}</h4>
                  <p className="text-sm text-muted-foreground">
                    Última visita: {paciente.ultimaVisita}
                  </p>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Próxima: </span>
                {paciente.proximaCita}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}