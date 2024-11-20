"use client";

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { AppointmentList } from '@/components/appointments/appointment-list';
import { NewAppointmentDialog } from '@/components/appointments/new-appointment-dialog';

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Turnos</h1>
          <p className="text-muted-foreground">
            Gestiona y programa citas para pacientes
          </p>
        </div>
        <Button onClick={() => setOpen(true)}>Agregar Turno</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        <div className="space-y-4">
          <div className="bg-card rounded-lg border p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>
          <div className="bg-card rounded-lg border p-4">
            <h3 className="font-medium mb-2">Resumen de Hoy</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total de Turnos</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Atendidos</span>
                <span className="font-medium">4</span>
              </div>
            </div>
          </div>
        </div>

        <AppointmentList selectedDate={date} />
      </div>

      <NewAppointmentDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}