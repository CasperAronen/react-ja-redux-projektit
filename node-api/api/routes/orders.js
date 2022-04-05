const express = require('express');
const router = express.Router();

// Hadle incoming GET request to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

// Hadle incoming POST request to /orders
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});

// Hadle incoming GET request to /orders
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

module.exports = router;