import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://nekkyapiwat:nktraining2022@training.xed61.mongodb.net/nextJS?retryWrites=true&w=majority'
  );
  const db = client.db();

  if (req.method === 'POST') {
    const { name, message } = req.body;
    const id = new Date().toISOString();
    const data = {
      id,
      name,
      message,
    };
    const result = await db.collection('feedbacks').insertOne(data);
    res.status(201).json({ message: 'Success!', data: result });
  } else if (req.method === 'GET') {
    const result = await db
      .collection('feedbacks')
      .find()
      .sort({ id: -1 }) // -1 is descending and 1 is ascending
      .toArray();
    res.status(200).json({ message: 'Success!', data: result });
  }

  client.close();
}
