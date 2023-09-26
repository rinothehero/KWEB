const { Router } = require('express');
const router = Router();
router.get('/1', (req, res) => res.send('GET /'));
router.post('/2', (req, res) => res.send('POST /'));
module.exports = router;