import { MongoClient } from 'mongodb';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, message } = req.body;
    const id = new Date().toISOString();
    const data = {
      id,
      name,
      message,
    };

    // MongoClient.connect(
    //   'mongodb+srv://nekkyapiwat:nktraining2022@training.xed61.mongodb.net/nextJS?retryWrites=true&w=majority'
    // ).then((client) => {
    //   const db = client.db();
    // });

    res.status(201).json({ message: 'Success!', data: data });
  }
}
