import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import router from './src/router/router';

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './src/views');

const DB_URL = 'mongodb://codegym:123456@127.0.0.1:27017/Contacts';

mongoose.connect(DB_URL).then(() => { console.log('Connect success') }).catch(err => { console.log(err) });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => { console.log(`Server is running on port ${port}`) });