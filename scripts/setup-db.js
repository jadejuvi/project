const { createClient } = require('@libsql/client');
const { readFileSync } = require('fs');
const { join } = require('path');
const crypto = require('crypto');

// Helper function to generate unique IDs
function generateId(length = 21) {
  return crypto.randomBytes(length).toString('base64url');
}

async function setupDatabase() {
  const db = createClient({
    url: 'file:dental.db',
  });

  try {
    // Read and execute the schema
    const schema = readFileSync(join(process.cwd(), 'lib/db/schema.sql'), 'utf8');
    await db.execute(schema);

    // Insert initial staff members
    const staff = [
      {
        id: generateId(),
        email: 'sarah.wilson@dentflow.com',
        name: 'Dr. Sarah Wilson',
        role: 'dentist',
        permissions: 'all',
        status: 'active',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
      {
        id: generateId(),
        email: 'michael.chen@dentflow.com',
        name: 'Dr. Michael Chen',
        role: 'orthodontist',
        permissions: 'all',
        status: 'active',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
    ];

    for (const member of staff) {
      await db.execute({
        sql: `
          INSERT INTO users (id, email, name, role, permissions, status, image)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        args: [
          member.id,
          member.email,
          member.name,
          member.role,
          member.permissions,
          member.status,
          member.image
        ]
      });
    }

    // Insert sample patients
    const patients = [
      {
        id: generateId(),
        email: 'john.doe@example.com',
        name: 'John Doe',
        phone: '+1 234-567-8901',
        dateOfBirth: '1985-05-15',
        address: '123 Main St, City, State 12345',
      },
      {
        id: generateId(),
        email: 'jane.smith@example.com',
        name: 'Jane Smith',
        phone: '+1 234-567-8902',
        dateOfBirth: '1990-08-22',
        address: '456 Oak Ave, City, State 12345',
      },
    ];

    for (const patient of patients) {
      await db.execute({
        sql: `
          INSERT INTO patients (id, email, name, phone, date_of_birth, address)
          VALUES (?, ?, ?, ?, ?, ?)
        `,
        args: [
          patient.id,
          patient.email,
          patient.name,
          patient.phone,
          patient.dateOfBirth,
          patient.address
        ]
      });
    }

    console.log('Database setup completed successfully!');
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();