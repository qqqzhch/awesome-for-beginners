import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data.json' 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const resdata = await fetch('https://raw.githubusercontent.com/MunGell/awesome-for-beginners/main/data.json');
  // const data = await resdata.json()
  res.status(200).json(data);
}