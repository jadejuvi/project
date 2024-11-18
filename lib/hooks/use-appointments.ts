"use client";

import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

export interface Appointment {
  id: string;
  date: string;
  time: string;
  duration: string;
  type: string;
  status: string;
  notes?: string;
  location?: string;
  patient: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
  staff: {
    id: string;
    name: string;
  };
}

// Mock data
const mockAppointments: Appointment[] = [
  {
    id: '1',
    date: '2024-03-15',
    time: '09:00',
    duration: '30',
    type: 'checkup',
    status: 'scheduled',
    location: 'Room 1',
    patient: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    staff: {
      id: '1',
      name: 'Dr. Wilson',
    },
  },
  {
    id: '2',
    date: '2024-03-15',
    time: '10:30',
    duration: '60',
    type: 'cleaning',
    status: 'scheduled',
    location: 'Room 2',
    patient: {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    staff: {
      id: '2',
      name: 'Dr. Davis',
    },
  },
];

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [loading, setLoading] = useState(false);

  const createAppointment = async (appointmentData: Omit<Appointment, 'id'>) => {
    try {
      setLoading(true);
      // Simulate API call
      const newAppointment = {
        id: Math.random().toString(36).substr(2, 9),
        ...appointmentData,
      };
      
      setAppointments(prev => [...prev, newAppointment]);
      
      toast({
        title: 'Success',
        description: 'Appointment created successfully',
      });
      
      return newAppointment;
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to create appointment',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateAppointment = async (id: string, data: Partial<Appointment>) => {
    try {
      setLoading(true);
      // Simulate API call
      setAppointments(prev => 
        prev.map(appointment => 
          appointment.id === id 
            ? { ...appointment, ...data }
            : appointment
        )
      );

      toast({
        title: 'Success',
        description: 'Appointment updated successfully',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update appointment',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    appointments,
    loading,
    error: null,
    createAppointment,
    updateAppointment,
  };
}