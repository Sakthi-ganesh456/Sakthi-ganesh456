export function notFound(req, res) { res.status(404).json({ error: 'NOT_FOUND', message: 'Resource not found' }); }
export function errors(err, req, res, next) { console.error(err); if (err.name === 'ZodError') return res.status(400).json({ error:'VALIDATION_ERROR', details: err.flatten() }); res.status(err.status || 500).json({ error:'INTERNAL_ERROR', message: 'Something went wrong' }); }
