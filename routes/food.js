const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Get all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get food item by ID
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new food item
router.post('/', async (req, res) => {
  const food = new Food({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    image: req.body.image,
    availability: req.body.availability,
    ingredients: req.body.ingredients
  });

  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update food item
router.patch('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    Object.keys(req.body).forEach(key => {
      if (req.body[key] != null) {
        food[key] = req.body[key];
      }
    });

    const updatedFood = await food.save();
    res.json(updatedFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete food item
router.delete('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    await food.remove();
    res.json({ message: 'Food item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 