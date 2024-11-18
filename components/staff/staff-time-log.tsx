"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Clock } from 'lucide-react';

export function StaffTimeLog() {
  const [isTracking, setIsTracking] = useState(false);
  const [currentSession, setCurrentSession] = useState('0:00:00');

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Time Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-3xl font-bold">{currentSession}</div>
            <Button
              className="w-full"
              variant={isTracking ? "destructive" : "default"}
              onClick={() => setIsTracking(!isTracking)}
            >
              {isTracking ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Stop Tracking
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start Tracking
                </>
              )}
            </Button>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Today's Sessions</div>
            {[
              { time: '09:00 AM - 12:30 PM', duration: '3h 30m', status: 'completed' },
              { time: '02:00 PM - Current', duration: '2h 15m', status: 'active' },
            ].map((session, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md border p-2 text-sm"
              >
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">{session.duration}</span>
                  <Badge variant={session.status === 'active' ? 'default' : 'secondary'}>
                    {session.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}