"use client";

import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';
import { useAppointments } from '@/lib/hooks/use-appointments';
import { CheckCircle2, Clock, MapPin } from 'lucide-react';

export function StaffAppointmentList({ selectedDate }: { selectedDate?: Date }) {
  const { appointments, loading, error } = useAppointments();

  if (loading) return <div>Loading appointments...</div>;
  if (error) return <div>Error loading appointments</div>;

  // Filter appointments for the selected date and current staff member
  const filteredAppointments = appointments.filter(appointment => 
    selectedDate && 
    format(new Date(appointment.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') &&
    appointment.staff.id === 'current-staff-id' // Replace with actual staff ID
  );

  if (filteredAppointments.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          No appointments scheduled for this date.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {filteredAppointments.map((appointment) => (
        <Card key={appointment.id} className="overflow-hidden">
          <div className="bg-primary/10 px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">{appointment.time}</span>
              </div>
              <Badge variant={appointment.status === 'scheduled' ? 'outline' : 'secondary'}>
                {appointment.status}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  {appointment.patient.image && (
                    <img
                      alt={appointment.patient.name}
                      src={appointment.patient.image}
                      className="aspect-square h-full w-full"
                    />
                  )}
                </Avatar>
                <div>
                  <h3 className="font-medium">{appointment.patient.name}</h3>
                  <p className="text-sm text-muted-foreground">{appointment.type}</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{appointment.location || 'Room 1'}</span>
                </div>
                <div className="mt-1">Duration: {appointment.duration}</div>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" size="sm">View Notes</Button>
              <Button size="sm">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Complete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}