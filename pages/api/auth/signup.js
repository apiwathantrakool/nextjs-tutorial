import { signup } from '../../../services/firebase-db';
import { hashPassword } from '../../../utils/auth-utils';

export default async function handler(req, res) {
  const data = req.body;
  const { email, password } = data;
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  } else {
    const hashedPassword = await hashPassword(password);
    const requestBody = {
      email,
      password: hashedPassword,
    };
    const result = await signup(requestBody);
    res.status(201).json({
      message: 'Signup Success!',
      data: result,
      status: 201,
    });
    return;
  }
}
