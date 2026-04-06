// Simple validation middleware for items
function validateName(name) {
  if (typeof name !== 'string') return 'Name must be a string';
  const trimmed = name.trim();
  if (trimmed.length === 0) return 'Name must not be empty';
  if (trimmed.length > 200) return 'Name must be at most 200 characters';
  return null;
}

function validateCreate(req, res, next) {
  const err = validateName(req.body && req.body.name);
  if (err) return res.status(400).json({ error: err });
  // normalize
  req.body.name = req.body.name.trim();
  next();
}

function validateUpdate(req, res, next) {
  if (!req.body || !Object.prototype.hasOwnProperty.call(req.body, 'name')) {
    return res.status(400).json({ error: 'Missing name in request body' });
  }
  const err = validateName(req.body.name);
  if (err) return res.status(400).json({ error: err });
  req.body.name = req.body.name.trim();
  next();
}

module.exports = { validateCreate, validateUpdate };
