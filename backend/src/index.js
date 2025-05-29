import express from 'express';
import listenroute from './routes/listen.route.js';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/checkout', listenroute);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Eclypse',
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});