const DEV_BASE_URL = 'https://629b3257cf163ceb8d15c67c.mockapi.io/';

export const BASE_URL = DEV_BASE_URL || '';

export const BIKES = 'bikes';

type RootName = 'allBikes' | 'oneBike';

export default function urlApi(
  rootName: RootName,
  ...args: Array<string | number>
): string {
  const url = {
    allBikes: `${BASE_URL + BIKES}`,
    oneBike: `${BASE_URL + BIKES + args[0]}`,
  };
  return url[rootName];
}
