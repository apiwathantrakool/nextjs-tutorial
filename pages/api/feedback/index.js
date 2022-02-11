import {
  getAllFeedbacks,
  addNewFeedbacks,
} from '../../../services/firebase-db';
import { API_STATUS } from '../../../constants/api-constants';

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
    res
      .status(API_STATUS._201)
      .json({ message: 'Success!', data: result, status: API_STATUS._201 });
  } else if (req.method === 'GET') {
    const result = await getAllFeedbacks();
    res
      .status(API_STATUS._200)
      .json({ message: 'Success!', data: result, status: API_STATUS._200 });
  }
}
