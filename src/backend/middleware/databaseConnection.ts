import { getDatabaseConnector } from '@backend/database/connection';
import { Handler, Request, Response } from '@backend/model/http';

const connector = getDatabaseConnector();

export default function (...args: any[]) {
  return (fn: Handler) => async (req: Request, res: Response) => {
    req.db = connector();
    await fn(req, res);
    await req.db.destroy();
  };
}
