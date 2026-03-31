const express = require('express');
const router = express.Router();

// Fake in-memory DB
let items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' }
];

// GET all items
router.get('/', (req, res) => {
    res.json(items);
});

// GET item by ID
router.get('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// POST create item
router.post('/', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT update item
router.put('/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.name = req.body.name;
    res.json(item);
});

// DELETE item
router.delete('/:id', (req, res) => {
    items = items.filter(i => i.id !== parseInt(req.params.id));
    res.send('Item deleted');
});

module.exports = router;