const express = require('express');
const router = express.Router();

router.get('/api/random', (req, res) => {
    try {
        const generateRandomNumber = () => {
            const randomNumber = Math.floor((Math.random() * 200) - 100);
            res.json({ status: true, data: { numberRandom: randomNumber } });
        };
        const intervalId = setTimeout(() => {
            generateRandomNumber();
            clearTimeout(intervalId);
            res.end();
        }, 1000); 
    } catch (error) {
        console.error('Error generating continuous random number:', error.message);
        res.status(500).json({ status: false, message: 'Error generating continuous random number', error: error.message });
    }
});

module.exports = router