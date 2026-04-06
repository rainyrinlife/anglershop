const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// Connect to SQLite DB (creates file if missing)
const dbPath = path.join(__dirname, 'database.db');
const db = new Database(dbPath);

// Auto-load and execute schema (uses IF NOT EXISTS in SQL)
const schemaPath = path.join(__dirname, 'inventory.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');
db.exec(schema);

console.log('Shared database initialized:', dbPath);

module.exports = db;
