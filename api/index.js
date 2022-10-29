import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/auth.js';
import hotelsRoute from './routes/auth.js';
import roomsRoute from './routes/auth.js';

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

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });


app.get('/', (req, res) => {
    res.send('opppoo')
});

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", authRoute);
app.use("/api/hotels", authRoute);
app.use("/api/rooms", authRoute);

app.listen(8800, () => {
    connect()
    console.log('Server is running on port 8800')
})