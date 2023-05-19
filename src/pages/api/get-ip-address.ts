import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('https://api.ipify.org');

  if (!response.ok) {
    throw new Error(`Error! status: ${response.text()}`);
  }

  const findMyIp = await response.text();
  return res.status(200).json(findMyIp);
}
