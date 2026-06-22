const express = require('express');
const redis = require('redis');

const app = express();
const port = process.env.PORT || 3001;

const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || 'cache',
    port: process.env.REDIS_PORT || 6379
  }
});

client.on('error', (err) => console.log('Erreur Redis Client', err));
client.connect().then(() => console.log('Connecté à Redis !')).catch(console.error);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Le backend TaskFlow tourne parfaitement !' });
});

app.listen(port, () => {
  console.log(`Backend en écoute sur le port ${port}`);
});