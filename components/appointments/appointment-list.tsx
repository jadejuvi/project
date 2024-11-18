"use client";

import { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { useAppointments } from '@/lib/hooks/use-appointments';
import { format } from 'date-fns';

export function AppointmentList({ selectedDate }: { selectedDate?: Date }) {
  const { appointments, loading, error } = useAppointments();
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  if (loading) return <div>Loading appointments...</div>;
  if (error) return <div>Error loading appointments</div>;

  const filteredAppointments = selectedDate
    ? appointments.filter(appointment => 
        appointment.date === format(selectedDate, 'yyyy-MM-dd')
      )
    : appointments;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">
        Schedule for {selectedDate ? format(selectedDate, 'PPP') : 'Today'}
      </h2>

      <div className="grid gap-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id}>
            <CardHeader className="pb-2">
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
                <Badge variant="outline" className="bg-green-100 text-green-700">
                  {appointment.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-muted-foreground">Time: </span>
                    <span className="font-medium">{appointment.time}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration: </span>
                    <span className="font-medium">{appointment.duration} min</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      setSelectedAppointment(appointment);
                      setDetailsOpen(true);
                    }}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="default"
                    className="flex-1"
                    onClick={() => {
                      setSelectedAppointment(appointment);
                      setEditOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}