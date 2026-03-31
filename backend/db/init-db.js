const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

// Connect to SQLite DB (creates file if missing)
const db = new Database("./db/database.db");

// Auto-load and execute schema
const schemaPath = path.join(__dirname, "inventory.sql");
const schema = fs.readFileSync(schemaPath, "utf8");

// Run schema safely: use IF NOT EXISTS in your SQL
db.exec(schema);

console.log("Database connected and schema initialized");

module.exports = db;