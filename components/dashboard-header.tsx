"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { NewAppointmentDialog } from '@/components/appointments/new-appointment-dialog';

export function DashboardHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tablero</h1>
        <p className="text-muted-foreground">
          ¡Bienvenido de nuevo! Esto es lo que está sucediendo hoy.
        </p>
      </div>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Nueva Cita
      </Button>

      <NewAppointmentDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}