import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function setupDatabase() {
  try {
    // Create a new database connection
    const db = new Database('dental.db', { verbose: console.log });

    // Enable foreign keys
    db.pragma('foreign_keys = ON');

    // Read and execute the schema
    console.log('Creating database schema...');
    const schema = readFileSync(join(__dirname, '../lib/db/schema.sql'), 'utf8');
    db.exec(schema);
    console.log('Schema created successfully');

    // Insert initial staff members
    console.log('Inserting initial staff data...');
    const staff = [
      {
        email: 'sarah.wilson@dentflow.com',
        name: 'Dr. Sarah Wilson',
        role: 'dentist',
        permissions: 'all',
        status: 'active',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
      {
        email: 'michael.chen@dentflow.com',
        name: 'Dr. Michael Chen',
        role: 'orthodontist',
        permissions: 'all',
        status: 'active',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
    ];

    const insertStaff = db.prepare(`
      INSERT INTO users (email, name, role, permissions, status, image)
      VALUES (@email, @name, @role, @permissions, @status, @image)
    `);

    for (const member of staff) {
      insertStaff.run(member);
    }

    // Insert sample patients
    console.log('Inserting sample patient data...');
    const patients = [
      {
        email: 'john.doe@example.com',
        name: 'John Doe',
        phone: '+1 234-567-8901',
        date_of_birth: '1985-05-15',
        address: '123 Main St, City, State 12345',
      },
      {
        email: 'jane.smith@example.com',
        name: 'Jane Smith',
        phone: '+1 234-567-8902',
        date_of_birth: '1990-08-22',
        address: '456 Oak Ave, City, State 12345',
      },
    ];

    const insertPatient = db.prepare(`
      INSERT INTO patients (email, name, phone, date_of_birth, address)
      VALUES (@email, @name, @phone, @date_of_birth, @address)
    `);

    for (const patient of patients) {
      insertPatient.run(patient);
    }

    console.log('Database setup completed successfully!');
    db.close();
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();