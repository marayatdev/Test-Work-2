const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const dataPath = path.join(__dirname, '../Data/DataJSON.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error');
        try {
            const jsonData = JSON.parse(data);
            const filteredData = jsonData.filter(item => item.userId === userId);
            res.json(filteredData);
        } catch (err) {
            res.status(500).json({ error: 'Failed to parse data file' });
        }
    });
});

module.exports = router;
