import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../utils/db-utils';

export default async function handler(req, res) {
  const client = await connectDatabase();
  if (req.method === 'POST') {
    const { name, message } = req.body;
    const id = new Date().toISOString();
    const data = {
      id,
      name,
      message,
    };
    const result = await insertDocument(client, 'feedbacks', data);
    res.status(201).json({ message: 'Success!', data: result });
  } else if (req.method === 'GET') {
    const result = await getAllDocuments(client, 'feedbacks');
    res.status(200).json({ message: 'Success!', data: result });
  }
  client.close();
}
