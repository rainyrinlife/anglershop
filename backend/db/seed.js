const fs = require('fs');
const sqlite = require('better-sqlite3');


const db = new Database('database.db');
const schema = fs.readFileSync('../database.db', 'utf8');
db.exec(schema);

console.log('Database seeded');