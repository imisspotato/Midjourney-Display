// pages/api/images.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getLatestImages } from '../../bot';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const imageObjects = await getLatestImages();
  res.status(200).json(imageObjects);
}

// latest
// import { NextApiRequest, NextApiResponse } from 'next';
// import { getLatestImages } from '../../bot';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const imageURLs = await getLatestImages();
//   res.status(200).json(imageURLs);
// }

// old
// import { NextApiRequest, NextApiResponse } from 'next';
// import { getImages } from '../../bot';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const imageURLs = getImages();
//   res.status(200).json(imageURLs);
// }
