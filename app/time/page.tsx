"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StaffSchedule } from '@/components/time/staff-schedule';
import { TimeEntries } from '@/components/time/time-entries';
import { NewTimeEntryDialog } from '@/components/time/new-time-entry-dialog';
import { DateRangePicker } from '@/components/reports/date-range-picker';
import { Clock, Download } from 'lucide-react';

export default function TimePage() {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    new Date(),
  ]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Time Tracking</h1>
          <p className="text-muted-foreground">
            Manage staff schedules and time entries
          </p>
        </div>
        <div className="flex items-center gap-4">
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
          />
          <Button onClick={() => setOpen(true)}>
            <Clock className="mr-2 h-4 w-4" />
            Log Time
          </Button>
        </div>
      </div>

      <Tabs defaultValue="schedule" className="space-y-6">
        <TabsList>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="entries">Time Entries</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-6">
          <StaffSchedule dateRange={dateRange} />
        </TabsContent>

        <TabsContent value="entries" className="space-y-6">
          <TimeEntries dateRange={dateRange} />
        </TabsContent>
      </Tabs>

      <NewTimeEntryDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}