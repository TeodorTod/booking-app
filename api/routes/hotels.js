import express from 'express';
import { createHotel } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

const router = express.Router();

//CREATE
router.post('/', createHotel);
//UPDATE
router.put('/:id', async (req, res) => {

    
});
//DELETE
router.delete('/:id', async (req, res) => {
   
});
//GET
router.get('/:id', async (req, res) => {

});
//GET ALL
router.get('/', async (req, res) => {

});

export default router;