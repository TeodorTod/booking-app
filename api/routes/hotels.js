import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel);
//UPDATE
router.put('/:id', verifyAdmin, updateHotel);
//DELETE
router.delete('/find/:id', deleteHotel);
//GET
router.get('/:id', getHotel);
//GET ALL
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);

export default router;