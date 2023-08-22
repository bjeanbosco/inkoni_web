import { NextApiRequest, NextApiResponse } from 'next';
import { testDatabaseConnection } from '../../config/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await testDatabaseConnection();
    res.status(200).json({ currentTime: result });
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to the database' });
  }
}

// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })}
