
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://0.0.0.0:27017', { use>

async function run() {
  await client.connect();
  console.log('Connected!');
  const db = client.db('test');
  const col = db.collection('users');
  await col.insertOne({ name: 'Test' });
  console.log('Inserted!');
  await client.close();
}

run().catch(console.error);

