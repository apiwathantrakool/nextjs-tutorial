import {
  getAllFeedbacks,
  addNewFeedbacks,
} from '../../../services/firebase-db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, message } = req.body;
    const id = new Date().toISOString();
    const data = {
      id,
      name,
      message,
    };
    const result = await addNewFeedbacks(data);
    res.status(201).json({ message: 'Success!', data: result });
  } else if (req.method === 'GET') {
    const result = await getAllFeedbacks();
    res.status(200).json({ message: 'Success!', data: result });
  }
}
