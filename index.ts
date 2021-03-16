import express  from 'express';
import 'reflect-metadata';
import morgan from 'morgan';

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');
});