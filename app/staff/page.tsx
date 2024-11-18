"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StaffAppointmentList } from '@/components/staff/staff-appointment-list';
import { StaffStats } from '@/components/staff/staff-stats';
import { StaffTimeLog } from '@/components/staff/staff-time-log';
import { StaffTaskList } from '@/components/staff/staff-task-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function StaffDashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Dr. Sarah Wilson
          </p>
        </div>
        <Button>Start Break</Button>
      </div>

      <StaffStats />

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
              />
            </CardContent>
          </Card>

          <StaffTimeLog />
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="appointments" className="space-y-4">
            <TabsList>
              <TabsTrigger value="appointments">My Appointments</TabsTrigger>
              <TabsTrigger value="tasks">My Tasks</TabsTrigger>
            </TabsList>
            <TabsContent value="appointments" className="space-y-4">
              <StaffAppointmentList selectedDate={date} />
            </TabsContent>
            <TabsContent value="tasks" className="space-y-4">
              <StaffTaskList />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}