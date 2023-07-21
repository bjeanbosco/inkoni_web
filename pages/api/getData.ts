import { NextApiRequest, NextApiResponse } from 'next';
import { getData } from '../../config/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from the database' });
  }
}
