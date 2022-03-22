import {
  getAllFeedbacks,
  addNewFeedbacks,
} from '../../../services/firebase-db';
import { API_STATUS } from '../../../constants/api-constants';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = getSession({ req });
  if (!session) {
    res.status(401).json({ message: 'No auth' });
  }
  if (req.method === 'POST') {
    const { name, message } = req.body;
    const id = new Date().toISOString();
    const data = {
      id,
      name,
      message,
    };
    try {
      const result = await addNewFeedbacks(data);
      res
        .status(API_STATUS._201)
        .json({ message: 'Success!', data: result, status: API_STATUS._201 });
    } catch (error) {
      res
        .status(API_STATUS._500)
        .json({ message: error, status: API_STATUS._500 });
    }
  } else if (req.method === 'GET') {
    const result = await getAllFeedbacks();
    res
      .status(API_STATUS._200)
      .json({ message: 'Success!', data: result, status: API_STATUS._200 });
  }
}
