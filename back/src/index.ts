import express from 'express';
import { station_router } from './api/users/station.route';
import { mockDB_router } from './api/mockDB/mockDB.route';
import mongoose from 'mongoose';

mongoose.connect("mongodb://mongo:27017/network", {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(express.json());

// they're both on /network to evit breaking changes
app.use('/', station_router);
app.use('/db', mockDB_router);

app.use(express.urlencoded({ extended: false }));

app.listen(2023, () => {
    console.log(`Server is listening on port 2023`);
});

