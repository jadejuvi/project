"use client";

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const notificationSettings = [
  {
    title: 'Appointment Reminders',
    items: [
      { id: 'email-reminder', label: 'Email Notifications', defaultChecked: true },
      { id: 'sms-reminder', label: 'SMS Notifications', defaultChecked: true },
      { id: 'reminder-time', label: '24h Before Appointment', defaultChecked: true },
    ],
  },
  {
    title: 'Patient Communications',
    items: [
      { id: 'new-message', label: 'New Messages', defaultChecked: true },
      { id: 'treatment-updates', label: 'Treatment Updates', defaultChecked: true },
      { id: 'lab-results', label: 'Lab Results Available', defaultChecked: true },
    ],
  },
  {
    title: 'Staff Notifications',
    items: [
      { id: 'schedule-changes', label: 'Schedule Changes', defaultChecked: true },
      { id: 'staff-messages', label: 'Staff Messages', defaultChecked: true },
      { id: 'emergency-alerts', label: 'Emergency Alerts', defaultChecked: true },
    ],
  },
];

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      {notificationSettings.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between space-x-2"
              >
                <Label htmlFor={item.id} className="flex flex-col space-y-1">
                  <span>{item.label}</span>
                </Label>
                <Switch id={item.id} defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end">
        <Button>Save Preferences</Button>
      </div>
    </div>
  );
}