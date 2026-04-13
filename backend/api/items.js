const express = require('express');
const router = express.Router();
const db = require('../db/db.js');
const { validateCreate, validateUpdate } = require('../middleware/validateItem');


router.get('/category/:category', (req, res) => {
    const category = req.params.category;
    console.log('Fetching items for category:', category);
    const rows = db.prepare('SELECT * FROM items WHERE category = ?').all(category);
    res.json(rows);
});

// GET all items
router.get('/items', (req, res) => {
    const rows = db.prepare('SELECT * FROM items').all();
    res.json(rows);
});

// GET item by ID
router.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const row = db.prepare('SELECT * FROM items WHERE id = ?').get(id);
    if (!row) return res.status(404).send('Item not found');
    res.json(row);
});

// POST create item
router.post('/items', validateCreate, (req, res) => {
    const name = req.body.name;
    const info = db.prepare('INSERT INTO items (name) VALUES (?)').run(name);
    const newItem = db.prepare('SELECT * FROM items WHERE id = ?').get(info.lastInsertRowid);
    res.status(201).json(newItem);
});

// PUT update item
router.put('/:id', validateUpdate, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const name = req.body.name;
    const info = db.prepare('UPDATE items SET name = ? WHERE id = ?').run(name, id);
    if (info.changes === 0) return res.status(404).send('Item not found');
    const updated = db.prepare('SELECT * FROM items WHERE id = ?').get(id);
    res.json(updated);
});

// DELETE item
router.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const info = db.prepare('DELETE FROM items WHERE id = ?').run(id);
    if (info.changes === 0) return res.status(404).send('Item not found');
    res.send('Item deleted');
});

module.exports = router;