"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PatientList } from '@/components/patients/patient-list';
import { AddPatientDialog } from '@/components/patients/add-patient-dialog';
import { Search } from 'lucide-react';

export default function PatientsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
          <p className="text-muted-foreground">Manage your patient records</p>
        </div>
        <Button onClick={() => setOpen(true)}>Add New Patient</Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <PatientList />
      <AddPatientDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}