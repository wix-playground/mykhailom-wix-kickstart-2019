const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now(), req.headers['user-agent']);
    next();
});

router.post('/', (req, res) => {
    const { userId, amount, price } = req.body;

    if (!userId) {
        res.status(422);
        res.json({
            error: 'Parameter userId is required'
        });
        return;
    }

    res.status(201);
    res.json({
        id: 'test-id',
        userId: userId,
        amount: amount,
        price: price,
        created:  new Date().toISOString()
    });
});

router.get('/:id', (req, res) => {
    res.status(200);
    res.json({
        id: req.params.id,
        userId: 'test-user-id',
        amount: 10,
        price: 9.99,
        created:  new Date().toISOString()
    });
});

router.delete('/:id', (req, res) => {
    res.status(204);
    res.end();
});

module.exports = router;