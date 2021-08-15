import Knex from 'knex';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Request extends NextApiRequest {
  db?: Knex<any, unknown[]>;
}

export type Response = NextApiResponse;

export type Handler = (req: Request, res: Response) => Promise<void>;
