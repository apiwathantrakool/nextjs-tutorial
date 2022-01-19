import { MongoClient } from 'mongodb';

export default function handler(req, res) {
  MongoClient.connect(
    'mongodb+srv://nekkyapiwat:nktraining2022@training.xed61.mongodb.net/nextJS?retryWrites=true&w=majority'
  ).then((client) => {
    const db = client.db();
  });
}
