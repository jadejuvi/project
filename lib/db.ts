import Database from 'better-sqlite3';
import { join } from 'path';

const db = new Database(join(process.cwd(), 'dental.db'), {
  verbose: console.log
});

// Enable foreign keys
db.pragma('foreign_keys = ON');

export function query<T>(sql: string, params: any[] = []): T[] {
  const stmt = db.prepare(sql);
  return stmt.all(params) as T[];
}

export function queryOne<T>(sql: string, params: any[] = []): T | undefined {
  const stmt = db.prepare(sql);
  return stmt.get(params) as T | undefined;
}

export function execute(sql: string, params: any[] = []) {
  const stmt = db.prepare(sql);
  return stmt.run(params);
}

const dbConfig = {
  query,
  queryOne,
  execute,
};

export default dbConfig;