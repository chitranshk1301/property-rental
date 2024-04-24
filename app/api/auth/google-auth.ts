import type { NextApiRequest, NextApiResponse } from 'next';
import { googleAuth } from '../../../backend/controllers/authController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      await googleAuth(req, res);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
