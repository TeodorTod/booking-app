import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to DB');
    } catch (error) {
        throw error;
    }
}
app.get('/', (req, res) => {
    res.send('opppoo')
});

app.listen(8800, () => {
    connect()
    console.log('Server is running on port 8800')
})