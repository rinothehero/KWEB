const express = require('express');
const { runQuery } = require('./database');

const app = express();
const port = 3000;

// GET /fare 라우트
app.get('/fare', async (req, res) => {
    try {
        const { uid } = req.query;
        const sql = `
            SELECT users.name, SUM(ROUND((trains.distance / 10) * (types.fare_rate / 100), -2)) AS total_fare
            FROM tickets
            JOIN trains ON tickets.train = trains.id
            JOIN types ON trains.type = types.id
            JOIN users ON tickets.user = users.id
            WHERE tickets.user = ${uid}
        `;
        const result = await runQuery(sql);
        res.type('text/plain');
        res.send(`Total fare of ${result[0].name} is ${result[0].total_fare} KRW.`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// GET /train/status 라우트
app.get('/train/status', async (req, res) => {
    try {
        const { tid } = req.query;
        const sql = `
            SELECT types.max_seats, COUNT(tickets.id) AS booked_seats
            FROM trains
            JOIN types ON trains.type = types.id
            LEFT JOIN tickets ON trains.id = tickets.train
            WHERE trains.id = ${tid}
            GROUP BY trains.id
        `;
        const result = await runQuery(sql);
        const isFull = result[0].booked_seats >= result[0].max_seats;
        res.type('text/plain');
        res.send(`Train ${tid} is ${isFull ? 'sold out' : 'not sold out'}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
