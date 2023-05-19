import { BASE_URL } from '@/appConstants';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = IProgramsArray;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const url = `${BASE_URL}/api/programs/?format=json`;

  const response = await fetch(url);

  const programs = await response.json();
  if (!response.ok) {
    throw new Error(`Error! status: ${response.statusText}`);
  }

  return res.status(200).json(programs);
}
