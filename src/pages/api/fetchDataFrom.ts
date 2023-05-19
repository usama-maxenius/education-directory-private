import { BASE_URL } from '@/appConstants';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (from: string) => {
  const res = await fetch(`${BASE_URL}/api/${from}`, {
    method: 'GET',
  });

  return res;
};
