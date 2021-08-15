import { NextApiRequest, NextApiResponse } from 'next';

import { Db } from './db';

export interface Request extends NextApiRequest {
  db?: Db;
}

export type Response = NextApiResponse;

export type Handler = (req: Request, res: Response) => Promise<void>;
