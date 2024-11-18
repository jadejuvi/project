"use client";

import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardStats } from '@/components/dashboard/stats';
import { UpcomingAppointments } from '@/components/dashboard/upcoming-appointments';
import { RecentPatients } from '@/components/dashboard/recent-patients';

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UpcomingAppointments />
        <RecentPatients />
      </div>
    </div>
  );
}