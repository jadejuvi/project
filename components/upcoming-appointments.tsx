import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const appointments = [
  {
    id: 1,
    patient: 'Sarah Johnson',
    time: '09:00 AM',
    type: 'Dental Cleaning',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 2,
    patient: 'Michael Chen',
    time: '10:30 AM',
    type: 'Root Canal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    id: 3,
    patient: 'Emily Davis',
    time: '02:00 PM',
    type: 'Check-up',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
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
                    alt={appointment.patient}
                    src={appointment.image}
                    className="aspect-square h-full w-full"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">{appointment.patient}</h4>
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