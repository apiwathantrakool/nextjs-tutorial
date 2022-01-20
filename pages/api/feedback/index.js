import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, message } = req.body;
    const id = new Date().toISOString();
    const data = {
      id,
      name,
      message,
    };

    const client = await MongoClient.connect(
      'mongodb+srv://nekkyapiwat:nktraining2022@training.xed61.mongodb.net/nextJS?retryWrites=true&w=majority'
    );
    const db = client.db();
    const result = await db.collection('feedbacks').insertOne(data);
    client.close();

    res.status(201).json({ message: 'Success!', data: result });
  }
}
