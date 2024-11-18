"use client";

import { Sidebar } from '@/components/sidebar';

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
}