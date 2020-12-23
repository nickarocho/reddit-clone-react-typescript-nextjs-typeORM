import "reflect-metadata";
import { createConnection } from "typeorm";
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev')); // nice tool for logging server responses

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(5000, async () => {
    console.log('Server running at http://localhost:5000');

    try {
        await createConnection();
        console.log('Database connected!');
    } catch(err) {
        console.log(err);
    }
});
