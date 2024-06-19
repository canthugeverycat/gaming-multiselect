const express = require('express');

const router = express.Router();

/**
 * Fetches all elements
 *
 * @return  {string[]} A collection of element items
 */
router.get('/elements', async (req, res) => {
  try {
    const elements = Array.from({ length: 300 }, (_, i) => `Element ${i + 1}`);
    res.json(elements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
