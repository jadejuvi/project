import db from '@/lib/db';
import { Appointment } from '@/types/appointment';

export async function getAppointments(): Promise<Appointment[]> {
  return db.query<Appointment>(`
    SELECT 
      a.*,
      p.name as patient_name,
      p.email as patient_email,
      p.image as patient_image,
      u.name as staff_name
    FROM appointments a
    JOIN patients p ON a.patient_id = p.id
    JOIN users u ON a.staff_id = u.id
    ORDER BY date, time
  `);
}

export async function getAppointmentById(id: string): Promise<Appointment | undefined> {
  return db.queryOne<Appointment>(`
    SELECT 
      a.*,
      p.name as patient_name,
      p.email as patient_email,
      p.image as patient_image,
      u.name as staff_name
    FROM appointments a
    JOIN patients p ON a.patient_id = p.id
    JOIN users u ON a.staff_id = u.id
    WHERE a.id = ?
  `, [id]);
}

export async function createAppointment(data: Partial<Appointment>): Promise<Appointment> {
  const result = await db.execute(`
    INSERT INTO appointments (
      date, time, duration, type, status, notes, location, patient_id, staff_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    data.date,
    data.time,
    data.duration,
    data.type,
    data.status || 'scheduled',
    data.notes,
    data.location,
    data.patientId,
    data.staffId
  ]);
  
  return getAppointmentById(result.lastID);
}

export async function updateAppointment(id: string, data: Partial<Appointment>): Promise<Appointment | undefined> {
  const updates = [];
  const values = [];
  
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      updates.push(`${key} = ?`);
      values.push(value);
    }
  });

  if (updates.length > 0) {
    await db.execute(`
      UPDATE appointments 
      SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [...values, id]);
  }

  return getAppointmentById(id);
}

export async function deleteAppointment(id: string): Promise<void> {
  await db.execute('DELETE FROM appointments WHERE id = ?', [id]);
}